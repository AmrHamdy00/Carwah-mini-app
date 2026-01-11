import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import logo from '../../assets/images/carwah-logo.svg'
import './index.css'

export default function Header() {
  const [statusBarHeight, setStatusBarHeight] = useState(0)

  useEffect(() => {
    try {
      const info = Taro.getSystemInfoSync()
      setStatusBarHeight(info.statusBarHeight || 0)
    } catch (e) {
      console.error('Failed to get system info', e)
    }
  }, [])

  return (
    <View className='header' style={{ paddingTop: `${statusBarHeight}px`, height: `${44 + statusBarHeight}px` }}>
      <View className='header-content'>
        <Image src={logo} className='header-logo' mode='aspectFit' />
      </View>
    </View>
  )
}
