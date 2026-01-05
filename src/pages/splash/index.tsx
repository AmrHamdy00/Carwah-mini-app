import { View, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.css'
import logo from '../../assets/images/carwah-logo.svg'

export default function Splash() {
  const [loaded, setLoaded] = useState(false)

  useLoad(() => {
    // Trigger animation visibility immediately
    setLoaded(true)

    // Navigate to home after 3 seconds
    setTimeout(() => {
      Taro.reLaunch({
        url: '/pages/index/index',
        fail: (err) => {
          console.error('Navigation failed:', err)
        }
      })
    }, 3000)
  })

  return (
    <View className='splash-container'>
      <View className={`logo-container ${loaded ? 'visible' : ''}`}>
        <Image src={logo} className='logo' mode='widthFix' />
      </View>
    </View>
  )
}
