import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import MainLayout from '../../components/MainLayout'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <MainLayout currentTab='home'>
      <View className='index-content'>
        <Text>Welcome to Carwah</Text>
        {/* Content goes here */}
      </View>
    </MainLayout>
  )
}
