import { View, Text, Button, Input, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { NanaConf, NanaConfig } from '../../nana-sdk'
import './index.css'

export default function NanaDemo() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')
  const [cartStatus, setCartStatus] = useState('')

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

  // --- 2. Add to Cart ---
  const handleAddToCart = async (car) => {
    setLoading(true)
    try {
      const res = await NanaConf.addToCart({
        retailer_id: car.retailer_id,
        pid: car.id,
        quantity: 1,
        image: car.image,
        price: car.price,
        promotionId: '',
        name: car.name,
        addedFrom: 'miniapp',
        resolvedBidId: '',
        pricingStyle: 'standard'
      })
      setCartStatus(`Added ${car.name}`)
      Taro.showToast({ title: 'Added', icon: 'success' })
    } catch (error) {
      console.error(error)
      setCartStatus('Add to cart failed')
      Taro.showToast({ title: 'Failed', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  // --- 3. Payment Flow ---
  const createPaymentSession = async (userToken, amount) => {
    const payload = {
      amount: amount,
      reference: 'order_' + new Date().getTime() // Unique reference
    };
    
    console.log('--- Creating Payment Session ---');
    console.log('URL:', NanaConfig.PAYMENT_SESSION_URL);
    console.log('Headers:', {
      'Content-Type': 'application/json',
      'miniapp-api-key': NanaConfig.API_KEY,
      'miniapp-user-token': `Bearer ${userToken}`
    });
    console.log('Payload:', payload);

    return new Promise((resolve, reject) => {
      Taro.request({
        url: NanaConfig.PAYMENT_SESSION_URL,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'miniapp-api-key': NanaConfig.API_KEY,
          'miniapp-user-token': `Bearer ${userToken}`
        },
        data: payload,
        success: (res) => {
          console.log('Payment Session Response:', res);
          if (res.statusCode >= 200 && res.statusCode < 300 && res.data.success) {
            resolve(res.data);
          } else {
            console.error('Payment Session Error:', res);
            reject(new Error(res.data.message || 'Failed to create payment session'));
          }
        },
        fail: (err) => {
          console.error('Network Error:', err);
          reject(new Error('Network error while creating payment session'));
        }
      });
    });
  }

  const handleCheckout = async () => {
    setLoading(true)
    setPaymentStatus('Processing Checkout...')
    
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
      const sessionRes = await createPaymentSession(token, 100.00); 
      
      if (!sessionRes.success) {
        throw new Error('Failed to create payment session');
      }

      // Step 3: Process Payment via Nana SDK
      const accountInfo = Taro.getAccountInfoSync();
      const miniAppId = accountInfo.miniProgram.appId || NanaConfig.MINI_APP_ID;
      
      const paymentData = {
        ...sessionRes.data,
        mini_app_id: miniAppId
      };

      await NanaConf.orderPayment(paymentData);
      
      setPaymentStatus('Payment Successful!');
      Taro.showToast({ title: 'Paid!', icon: 'success' })

    } catch (error) {
       console.error(error);
       setPaymentStatus(`Payment Failed: ${error.message || 'Unknown error'}`);
       Taro.showToast({ title: 'Error', icon: 'none' })
    } finally {
      setLoading(false)
      setTimeout(() => setPaymentStatus(''), 3000);
    }
  }

  // --- 4. Navigation ---
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
      {userInfo && (
        <>
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
                      onClick={() => handleAddToCart(car)} 
                      disabled={loading}
                    >
                      Rent Now
                    </Button>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </>
      )}

      {/* 4. Checkout Bar (Fixed Bottom) */}
      <View className='checkout-bar'>
        <View className='cart-summary'>
          <Text className='total-label'>Total Amount</Text>
          <Text className='total-amount'>100.00 SAR</Text>
        </View>
        <Button 
          className='btn-checkout' 
          onClick={handleCheckout} 
          disabled={loading}
        >
          Checkout
        </Button>
      </View>

      {/* 5. Status Overlays */}
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
