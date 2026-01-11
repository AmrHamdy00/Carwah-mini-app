import { View, Text } from '@tarojs/components'
import MainLayout from '../../components/MainLayout'
import './index.css'

export default function Orders() {
  return (
    <MainLayout currentTab='orders' headerTitle='Orders' showBottomNav={true} showBackArrow={false}>
      <View className='placeholder-container'>
        <Text>Orders Page</Text>
      </View>
    </MainLayout>
  )
}
