import { View, Text } from '@tarojs/components'
import MainLayout from '../../components/MainLayout'
import './index.css'

export default function More() {
  return (
    <MainLayout currentTab='more' headerTitle='More' showBottomNav={true} showBackArrow={false}>
      <View className='placeholder-container'>
        <Text>More Page</Text>
      </View>
    </MainLayout>
  )
}
