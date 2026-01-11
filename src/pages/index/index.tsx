import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import MainLayout from '../../components/MainLayout'
import bgImg from '../../assets/images/bg.png'
import bannerPng from '../../assets/images/banner.png'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <MainLayout 
      currentTab='home' 
      isHome={true}
      headerTitle='إيجار سيارات'
      headerSubtitle='اجر سيارتك الآن مع كروة'
    >
      <View className='index-content'>
        <Image src={bgImg} className='index-bg' mode='aspectFill' />
        <View className='banner-section'>
          <Image src={bannerPng} className='banner-image' mode='widthFix' />
        </View>
      </View>
    </MainLayout>
  )
}
