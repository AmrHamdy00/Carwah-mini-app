import { View, Text, Button, Input, Image } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import { NanaConf } from '../../nana-sdk'
import './index.css'

export default function NanaDemo() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')
  const [cartStatus, setCartStatus] = useState('')
  console.log(NanaConf, "NanaConf")

  // Mock Products (Cars)
  const cars = [
    {
      id: 'car_001',
      name: 'Toyota Camry 2024',
      price: 100.00,
      image: 'https://img.freepik.com/free-photo/silver-sedan-car-with-modern-design-road_114579-4384.jpg',
      retailer_id: 'carwah_rental'
    },
    {
      id: 'car_002',
      name: 'Hyundai Sonata 2024',
      price: 95.00,
      image: 'https://img.freepik.com/free-photo/blue-sedan-car-road_114579-4122.jpg',
      retailer_id: 'carwah_rental'
    },
    {
      id: 'car_003',
      name: 'Nissan Altima 2024',
      price: 98.00,
      image: 'https://img.freepik.com/free-photo/white-suv-car-road_114579-4089.jpg',
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
        isLoggedIn: loginRes && loginRes.isLoggedIn,
        token: tokenRes && tokenRes.token,
        userId: idRes && idRes.userId
      }
      setUserInfo(info)
      Taro.showToast({ title: 'Loaded', icon: 'success' })
      return info;
    } catch (error) {
      console.error(error)
      Taro.showToast({ title: 'Failed', icon: 'none' })
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
  // Backend call to create payment session
  const createPaymentSession = async (userToken, amount) => {
    // NOTE: In a real production app, this call should go to YOUR backend (MiniApp Backend),
    // which then calls the Nana API securely. Calling Nana API directly from frontend 
    // requires exposing your MiniApp API Key, which is NOT recommended for production.
    
    // For this demo/development, we will call the Nana API directly if CORS/Security allows,
    // or you should replace this URL with your middleware backend URL.
    
    // Using the endpoint from docs: https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session
    
    const miniAppApiKey = 'YOUR_MINIAPP_API_KEY_HERE'; // TODO: Replace with real key
    
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'miniapp-api-key': miniAppApiKey,
          'miniapp-user-token': `Bearer ${userToken}`
        },
        data: {
          amount: amount,
          reference: 'order_' + new Date().getTime() // Unique reference
        },
        success: (res) => {
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
    setPaymentStatus('Starting checkout...')
    
    try {
      // Step 1: Get User Token
      let token = userInfo?.token;
      if (!token) {
         const info = await handleGetUserInfo();
         token = info?.token;
      }

      if (!token) {
        throw new Error('User not logged in or token missing');
      }

      // Step 2: Create Payment Session (Real API Call)
      setPaymentStatus('Creating payment session...')
      const sessionRes = await createPaymentSession(token, 100.00); 
      
      if (!sessionRes.success) {
        throw new Error('Failed to create payment session');
      }

      // Step 3: Process Payment via Nana SDK
      setPaymentStatus('Processing payment...')
      
      // Get App ID dynamically
      const accountInfo = Taro.getAccountInfoSync();
      const miniAppId = accountInfo.miniProgram.appId;
      
      const paymentData = {
        ...sessionRes.data,
        mini_app_id: miniAppId
      };

      const result = await NanaConf.orderPayment(paymentData);
      
      setPaymentStatus('Payment Successful!');
      Taro.showToast({ title: 'Paid!', icon: 'success' })
      console.log('Payment Result:', result);

    } catch (error) {
       console.error(error);
       setPaymentStatus(`Payment Failed: ${error.message || 'Unknown error'}`);
       Taro.showToast({ title: 'Error', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  // --- 4. Navigation ---
  const handleCloseMiniApp = async () => {
    try {
      // In a real app, you might get this ID dynamically or from config
      await NanaConf.closeMiniApp('current_miniapp_id')
    } catch (error) {
      console.error('Close MiniApp failed:', error)
    }
  }

  const handleCloseAndDeepLink = async () => {
    try {
      await NanaConf.closeMiniAppAndOpenDeepLink('current_miniapp_id', 'nana://home')
    } catch (error) {
      console.error('Close & DeepLink failed:', error)
    }
  }

  return (
    <View className='nana-demo'>
      <View className='header'>
        <Text className='title'>Nana Super App Demo</Text>
      </View>

      <View className='section'>
        <Text className='section-title'>1. User & Identity</Text>
        <Button className='btn' onClick={handleGetUserInfo} disabled={loading}>Get Profile</Button>
        {userInfo && (
          <View className='info-box'>
            {userInfo.userName && <Text>Name: {userInfo.userName}</Text>}
            {userInfo.userId && <Text>ID: {userInfo.userId}</Text>}
            {userInfo.userMobile && <Text>Mobile: {userInfo.userMobile}</Text>}
            {userInfo.language && <Text>Language: {userInfo.language}</Text>}
            {userInfo.token && <Text className='token'>Token: {userInfo.token.substring(0, 10)}...</Text>}
            {userInfo.address && (
              <Text>
                Address: {userInfo.address.title || ''} {userInfo.address.city ? `(${userInfo.address.city})` : ''}
              </Text>
            )}
          </View>
        )}
      </View>

      <View className='section'>
        <Text className='section-title'>2. Carwah Products</Text>
        <View className='products-grid'>
          {cars.map(car => (
            <View key={car.id} className='product-card'>
              <Image src={car.image} className='product-image' mode='aspectFill' />
              <View className='product-info'>
                <Text className='product-name'>{car.name}</Text>
                <Text className='product-price'>{car.price} SAR / Day</Text>
                <Button 
                  className='btn btn-sm' 
                  onClick={() => handleAddToCart(car)} 
                  disabled={loading}
                >
                  Add to Cart
                </Button>
              </View>
            </View>
          ))}
        </View>
        
        {cartStatus && <Text className='result'>{cartStatus}</Text>}
        <View style={{height: 10}}></View>
        <Button className='btn btn-primary' onClick={handleCheckout} disabled={loading}>Checkout & Pay (100 SAR)</Button>
        {paymentStatus && <Text className='result'>{paymentStatus}</Text>}
      </View>

      <View className='section'>
        <Text className='section-title'>3. Navigation</Text>
        <Button className='btn' onClick={handleCloseMiniApp}>Close MiniApp</Button>
        <View style={{height: 10}}></View>
        <Button className='btn' onClick={handleCloseAndDeepLink}>Close & Open Nana Home</Button>
      </View>
    </View>
  )
}
