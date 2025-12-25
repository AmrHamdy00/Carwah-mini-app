import { View, Text, Button, Input, Image } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import { NanaConf } from '../../../NanaConf'
import './index.css'

export default function NanaDemo() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')
  const [cartStatus, setCartStatus] = useState('')

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
    } catch (error) {
      console.error(error)
      Taro.showToast({ title: 'Failed', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  // --- 2. Add to Cart ---
  const handleAddToCart = async () => {
    setLoading(true)
    try {
      const res = await NanaConf.addToCart({
        retailer_id: 'retailer_123',
        pid: 'product_456',
        quantity: 1,
        image: 'https://example.com/product.jpg',
        price: 19.99,
        promotionId: '',
        name: 'Sample Product',
        addedFrom: 'miniapp',
        resolvedBidId: '',
        pricingStyle: 'standard'
      })
      setCartStatus(res && (res.message || 'Added'))
      Taro.showToast({ title: 'Added', icon: 'success' })
    } catch (error) {
      setCartStatus('Add to cart failed')
      Taro.showToast({ title: 'Failed', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  // --- 3. Payment ---
  const handlePayment = async () => {
    setLoading(true)
    try {
      const result = await NanaConf.orderPayment({
        payment_session_token: 'mock_session_token',
        payment_session_secret: 'mock_session_secret',
        mini_app_id: 'mock_app_id'
      })
      setPaymentStatus(result && (result.message || 'Payment initiated'))
    } catch (error) {
       setPaymentStatus('Payment Failed')
    } finally {
      setLoading(false)
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
            {userInfo.address && (
              <Text>
                Address: {userInfo.address.title || ''} {userInfo.address.city ? `(${userInfo.address.city})` : ''}
              </Text>
            )}
          </View>
        )}
      </View>

      <View className='section'>
        <Text className='section-title'>2. Commerce</Text>
        <Button className='btn' onClick={handleAddToCart} disabled={loading}>Add Sample Item to Cart</Button>
        {cartStatus && <Text className='result'>{cartStatus}</Text>}
        <View style={{height: 10}}></View>
        <Button className='btn' onClick={handlePayment} disabled={loading}>Order Payment</Button>
        {paymentStatus && <Text className='result'>{paymentStatus}</Text>}
      </View>
    </View>
  )
}
