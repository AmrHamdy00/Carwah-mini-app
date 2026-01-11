import { View } from '@tarojs/components'
import Header from '../Header'
import BottomNav from '../BottomNav'
import { ReactNode } from 'react'
import './index.css'

interface MainLayoutProps {
  children: ReactNode;
  currentTab?: string;
}

export default function MainLayout({ children, currentTab = 'home' }: MainLayoutProps) {
  return (
    <View className='main-layout'>
      <Header />
      <View className='content-area'>
        {children}
      </View>
      <BottomNav currentTab={currentTab} />
    </View>
  )
}
