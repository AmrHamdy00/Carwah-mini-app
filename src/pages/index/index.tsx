import { useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { NanaConf } from '../../nana-sdk'
import './index.css'

interface UserInfo {
  name: string
  mobile: string
  address: any
  userId: string
  appLang: string
}

export default function Index() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: 'Loading...',
    mobile: 'Loading...',
    address: null,
    userId: 'Loading...',
    appLang: 'en'
  })

  useLoad(async () => {
    console.log('Page loaded.')
    try {
      const [nameRes, mobileRes, userIdRes, langRes] = await Promise.all([
        NanaConf.getUserName(),
        NanaConf.getUserMobile(),
        NanaConf.getUserId(),
        NanaConf.getAppLang()
      ]) as any[]

      setUserInfo({
        name: nameRes?.userName || 'Guest',
        mobile: mobileRes?.mobile || 'N/A',
        address: null,
        userId: userIdRes?.userId || 'N/A',
        appLang: langRes?.lang || 'en'
      })
    } catch (error) {
      console.error('Error fetching user info:', error)
      setUserInfo(prev => ({ ...prev, name: 'Error loading info' }))
    }
  })

  const handleTestPayment = async () => {
    try {
      console.log('Initiating test payment...');
      const amount = 10;
      const reference = `order_${Date.now()}`;
      await NanaConf.handlePayment(amount, reference);
      console.log('Test payment flow completed.');
    } catch (error) {
      console.error('Test payment failed:', error);
    }
  };

  return (
    <View className='container'>
      <View className='user-card'>
        <View className='user-header'>
          <View className='avatar-placeholder'>
             <Text className='avatar-text'>{userInfo.name.charAt(0).toUpperCase()}</Text>
          </View>
          <View className='user-basic-info'>
            <Text className='user-name'>{userInfo.name}</Text>
            <Text className='user-id'>ID: {userInfo.userId}</Text>
          </View>
        </View>
        
        <View className='info-row'>
          <Text className='label'>Mobile:</Text>
          <Text className='value'>{userInfo.mobile}</Text>
        </View>
        
        <View className='info-row'>
          <Text className='label'>Language:</Text>
          <Text className='value'>{userInfo.appLang === 'ar' ? 'Arabic' : 'English'}</Text>
        </View>
      </View>

      <View className='action-section'>
        <Button 
          className='payment-btn' 
          onClick={handleTestPayment}
        >
          Pay 10 SAR
        </Button>
      </View>
    </View>
  )
}
