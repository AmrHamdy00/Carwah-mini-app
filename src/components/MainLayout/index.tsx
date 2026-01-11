import { View } from '@tarojs/components'
import Header, { HeaderAlignment } from '../Header'
import BottomNav from '../BottomNav'
import { ReactNode } from 'react'
import './index.css'

interface MainLayoutProps {
  children: ReactNode;
  currentTab?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  showBackArrow?: boolean;
  headerAlign?: HeaderAlignment;
  onHeaderTitleClick?: () => void;
  headerLeftItem?: ReactNode;
  isHome?: boolean;
  showBottomNav?: boolean;
}

export default function MainLayout({ 
  children, 
  currentTab = 'home',
  headerTitle,
  headerSubtitle,
  showBackArrow,
  headerAlign,
  onHeaderTitleClick,
  headerLeftItem,
  isHome = false,
  showBottomNav = false
}: MainLayoutProps) {
  return (
    <View className='main-layout'>
      <Header 
        title={headerTitle}
        subtitle={headerSubtitle}
        showBackArrow={showBackArrow}
        align={headerAlign}
        onTitleClick={onHeaderTitleClick}
        leftItem={headerLeftItem}
        isHome={isHome}
      />
      <View className='content-area'>
        {children}
      </View>
      {(isHome || showBottomNav) && <BottomNav currentTab={currentTab} />}
    </View>
  )
}
