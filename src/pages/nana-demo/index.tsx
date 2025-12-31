import { View, Text, Button, Input, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { NanaConf, NanaConfig } from '../../nana-sdk'
import './index.css'

export default function NanaDemo() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')

  useEffect(() => {
    handleGetUserInfo()
  }, [])

  // Mock Products (Cars)
  const cars = [
    {
      id: 'car_001',
      name: 'Toyota Camry 2024',
      type: 'Sedan • 5 Seats',
      price: 100.00,
      image: 'https://img.freepik.com/free-photo/silver-sedan-car-with-modern-design-road_114579-4384.jpg',
      retailer_id: 'carwah_rental'
    },
    {
      id: 'car_002',
      name: 'Nissan Patrol 2024',
      type: 'SUV • 7 Seats',
      price: 250.00,
      image: 'https://img.freepik.com/free-photo/white-off-road-car-driving-road_114579-4009.jpg',
      retailer_id: 'carwah_rental'
    }
  ]

  // --- 1. User Info ---
  const handleGetUserInfo = async () => {
    setLoading(true)
    try {
      const [nameRes, mobileRes, addrRes, langRes, loginRes, tokenRes, idRes] = await Promise.all([
        NanaConf.getUserName(),
        NanaConf.getUserMobile(),
        NanaConf.getUserAddress(),
        NanaConf.getAppLang(),
        NanaConf.userLoggedIn(),
        NanaConf.getUserToken(),
        NanaConf.getUserId()
      ])
      const info = {
        userName: nameRes && (nameRes.userName || nameRes.name || nameRes),
        userMobile: mobileRes && (mobileRes.userMobile || mobileRes),
        address: addrRes && (addrRes.address || addrRes),
        language: langRes && (langRes.language || langRes),
        isLoggedIn: loginRes && (loginRes.isLoggedIn || loginRes === true),
        token: tokenRes && (tokenRes.token || tokenRes.data?.token || (typeof tokenRes === 'string' ? tokenRes : null)),
        userId: idRes && (idRes.userId || idRes.id || idRes)
      }
      setUserInfo(info)
      return info;
    } catch (error) {
      console.error(error)
      Taro.showToast({ title: 'Login Failed', icon: 'none' })
      return null;
    } finally {
      setLoading(false)
    }
  }

  // --- 2. Payment Flow ---
  const createPaymentSession = async (userToken, amount) => {
    const miniAppApiKey = NanaConfig.API_KEY;
    const payload = {
      amount: amount,
      reference: 'order_' + new Date().getTime() // Unique reference
    };
    
    console.log('--- Creating Payment Session ---');
    console.log('URL:', 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session');
    console.log('Headers:', {
      'Content-Type': 'application/json',
      'miniapp-api-key': miniAppApiKey,
      'miniapp-user-token': `Bearer ${userToken}`
    });
    console.log('Payload:', payload);

    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'miniapp-api-key': miniAppApiKey,
          'miniapp-user-token': `Bearer ${userToken}`
        },
        data: payload,
        success: (res) => {
          console.log('Payment Session Response:', res);
          // Check for both success boolean in body or successful status code
          if ((res.data && res.data.success) || (res.statusCode >= 200 && res.statusCode < 300)) {
            resolve(res.data);
          } else {
            console.error('Payment Session Error:', res);
            reject(new Error(res.data.message || 'Failed to create payment session'));
          }
        },
        fail: (err) => {
          console.error('Network Error:', err);
          reject(new Error(`Network Error: ${err.errMsg || err.message}`));
        }
      });
    });
  }

  const handleCheckout = async (amount) => {
    setLoading(true)
    setPaymentStatus('Processing Payment...')
    
    try {
      // Step 1: Get User Token
      console.log('Current userInfo:', userInfo);
      let token = userInfo?.token;
      
      if (!token) {
         console.log('Token missing in state, attempting refetch...');
         const info = await handleGetUserInfo();
         console.log('Refetched info:', info);
         token = info?.token;
      }

      if (!token) {
        // Fallback for testing if no real token is available (e.g. web mock)
        console.warn('Still no token found. If running in mock mode, this will fail unless mocked.');
        throw new Error('User not logged in or token missing');
      }

      console.log('Using Token:', token);

      // Step 2: Create Payment Session
      const sessionRes = await createPaymentSession(token, amount); 
      
      if (!sessionRes.success) {
        throw new Error('Failed to create payment session (success flag missing)');
      }

      // Step 3: Add Mini App ID
      const accountInfo = Taro.getAccountInfoSync();
      // Use dynamic appId from accountInfo if available, otherwise fallback to config/default
      const miniAppId = accountInfo.miniProgram.appId || NanaConfig.MINI_APP_ID;
      
      // Mutate/Prepare session data as per requirements
      const paymentData = {
        ...sessionRes.data,
        mini_app_id: miniAppId
      };

      console.log('Calling orderPayment with:', paymentData);

      // Step 4: Process Payment via Nana SDK
      await NanaConf.orderPayment(paymentData);
      
      setPaymentStatus('Payment Successful!');
      Taro.showToast({ title: 'Paid!', icon: 'success' })

    } catch (error) {
       console.error('Payment process failed:', error);
       setPaymentStatus(`Payment Failed: ${error.message || 'Unknown error'}`);
       Taro.showToast({ title: 'Error', icon: 'none' })
    } finally {
      setLoading(false)
      setTimeout(() => setPaymentStatus(''), 3000);
    }
  }

  // --- 3. Navigation ---
  const handleCloseMiniApp = async () => {
    try {
      await NanaConf.closeMiniApp(NanaConfig.MINI_APP_ID)
    } catch (error) {
      console.error('Close MiniApp failed:', error)
    }
  }

  return (
    <View className='nana-demo'>
      {/* 1. Header Strip */}
      <View className='header-strip'>
        <Text className='brand-title'>Carwah</Text>
        <View className='user-status'>
          {userInfo ? `Hi, ${userInfo.userName || 'User'}` : 'Loading...'}
        </View>
      </View>

      {/* 2. Hero Section */}
      <View className='hero-section'>
        <Text className='hero-title'>Find Your Perfect Ride</Text>
        <Text className='hero-subtitle'>Premium cars at affordable daily rates</Text>
        
        {/* Mock Search Box */}
        <View className='search-box'>
          <Text className='search-input-mock'>📍 Pickup Location: Riyadh</Text>
          <Text className='search-input-mock'>📅 Pickup Date: Today, 10:00 AM</Text>
        </View>
      </View>

      {/* 3. Products Grid */}
      <View className='section-header'>
        <Text className='section-title'>Available Cars</Text>
        <Text className='see-all'>View All</Text>
      </View>

      <View className='products-grid'>
        {cars.map(car => (
          <View key={car.id} className='product-card'>
            <Image src={car.image} className='product-image' mode='aspectFill' />
            <View className='product-info'>
              <Text className='product-name'>{car.name}</Text>
              <Text className='product-meta'>{car.type}</Text>
              <View className='card-footer'>
                <View className='price-tag'>
                  <Text className='price-amount'>{car.price}</Text>
                  <Text className='price-unit'>SAR / Day</Text>
                </View>
                <Button 
                  className='btn-add' 
                  onClick={() => handleCheckout(car.price)} 
                  disabled={loading}
                >
                  Rent
                </Button>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* 4. Status Overlays */}
      {loading && (
        <View className='loading-overlay'>
          <Text>Loading...</Text>
        </View>
      )}
      
      {paymentStatus && (
        <View className='payment-status'>
          <Text>{paymentStatus}</Text>
        </View>
      )}
      
      {/* Footer / Exit Links */}
      <View style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>
        <Text onClick={handleCloseMiniApp} style={{ color: '#999', fontSize: '12px', textDecoration: 'underline' }}>
          Back to Nana App
        </Text>
      </View>
    </View>
  )
}
