import { View, Text } from '@tarojs/components'
import MainLayout from '../../components/MainLayout'
import './index.css'

export default function Profile() {
  return (
    <MainLayout currentTab='profile' headerTitle='Profile' showBottomNav={true} showBackArrow={false}>
      <View className='placeholder-container'>
        <Text>Profile Page</Text>
      </View>
    </MainLayout>
  )
}
