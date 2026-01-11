import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect, ReactNode } from 'react'
import rightArrow from '../../assets/icons/topbar/rightarrow.png'
import { NanaConf, NanaConfig } from '../../nana-sdk'
import './index.css'

export type HeaderAlignment = 'start' | 'center' | 'end' | 'space-between';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBackArrow?: boolean;
  onBack?: () => void;
  onTitleClick?: () => void;
  align?: HeaderAlignment;
  leftItem?: ReactNode; // Item to show on the left (or opposite to title if space-between)
  isHome?: boolean;
}

export default function Header({ 
  title, 
  subtitle, 
  showBackArrow = true,
  onBack,
  onTitleClick,
  align = 'end',
  leftItem,
  isHome = false
}: HeaderProps) {
  const [statusBarHeight, setStatusBarHeight] = useState(0)

  useEffect(() => {
    try {
      const info = Taro.getSystemInfoSync()
      setStatusBarHeight(info.statusBarHeight || 0)
    } catch (e) {
      console.error('Failed to get system info', e)
    }
  }, [])

  const handleBack = async () => {
    if (isHome) {
      // Close the mini app when on homepage using Nana SDK
      try {
        await NanaConf.closeMiniApp(NanaConfig.MINI_APP_ID)
      } catch (e) {
        console.error('Failed to close mini app via SDK', e)
        // Fallback to standard Taro exit
        // @ts-ignore
        if (Taro.exitMiniProgram) {
          Taro.exitMiniProgram({
            success: () => console.log('Exited mini program'),
            fail: (err) => console.error('Failed to exit', err)
          })
        }
      }
    } else {
      if (onBack) {
        onBack()
      } else {
        const pages = Taro.getCurrentPages()
        if (pages.length > 1) {
          Taro.navigateBack()
        } else {
          console.log('No page to navigate back to')
        }
      }
    }
  }

  // Determine justify-content based on align prop
  const getJustifyContent = () => {
    switch (align) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'space-between': return 'space-between';
      case 'end': 
      default: return 'flex-end';
    }
  }

  // Total height calculation: Status Bar + Content Height
  const contentHeight = 46
  
  return (
    <View className='header' style={{ paddingTop: `${statusBarHeight}px`, height: `${contentHeight + statusBarHeight}px` }}>
      <View 
        className='header-content' 
        style={{ justifyContent: getJustifyContent() }}
      >
        {/* Optional Left Item (rendered first in DOM, appears left in LTR, but we need to check flex direction) */}
        {/* Since we might want space-between: [LeftItem] ... [TitleBlock] */}
        {leftItem && (
          <View className='header-left-item'>
            {leftItem}
          </View>
        )}

        <View 
          className='header-text-container' 
          onClick={onTitleClick}
        >
          <View className='header-title-row' onClick={!onTitleClick && showBackArrow ? handleBack : undefined}>
            {isHome && <Text className='header-title'>{title}</Text>}
            {showBackArrow && (
              <Image src={rightArrow} className='header-arrow' mode='aspectFit' />
            )}
          </View>
          {isHome && subtitle && (
            <Text className='header-subtitle'>{subtitle}</Text>
          )}
        </View>
      </View>
    </View>
  )
}
