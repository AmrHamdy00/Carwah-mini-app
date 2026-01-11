import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import homeIcon from '../../assets/icons/bottombar/home.svg'
import homeSelectedIcon from '../../assets/icons/bottombar/home-selected.svg'
import rentalsIcon from '../../assets/icons/bottombar/rentals.svg'
import rentalsSelectedIcon from '../../assets/icons/bottombar/rentals-selected.svg'
import profileIcon from '../../assets/icons/bottombar/user.svg'
import profileSelectedIcon from '../../assets/icons/bottombar/user-selected.svg'
import moreIcon from '../../assets/icons/bottombar/more.svg'
import moreSelectedIcon from '../../assets/icons/bottombar/more-selected.svg'
import pointerIcon from '../../assets/icons/bottombar/selected-pointer.svg'
import './index.css'

interface BottomNavProps {
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function BottomNav({ currentTab = 'home', onTabChange }: BottomNavProps) {
  // Order: More, Profile, Bookings(Rentals), Home (Left to Right matching Arabic RTL visual)
  const tabs = [
    { key: 'more', label: 'المزيد', icon: moreIcon, selectedIcon: moreSelectedIcon },
    { key: 'profile', label: 'حسابي', icon: profileIcon, selectedIcon: profileSelectedIcon },
    { key: 'orders', label: 'الحجوزات', icon: rentalsIcon, selectedIcon: rentalsSelectedIcon },
    { key: 'home', label: 'الرئيسية', icon: homeIcon, selectedIcon: homeSelectedIcon },
  ]

  const handleTabClick = (key: string) => {
    if (key === currentTab) return

    if (onTabChange) {
      onTabChange(key)
    }

    let url = ''
    switch (key) {
      case 'home':
        url = '/pages/index/index'
        break
      case 'orders':
        url = '/pages/orders/index'
        break
      case 'profile':
        url = '/pages/profile/index'
        break
      case 'more':
        url = '/pages/more/index'
        break
    }

    if (url) {
      Taro.redirectTo({ url })
    }
  }

  return (
    <View className='bottom-nav'>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.key
        
        return (
          <View 
            key={tab.key} 
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {isActive && (
              <Image 
                src={pointerIcon} 
                className='nav-pointer'
                mode='widthFix'
              />
            )}
            <View className='nav-icon-container'>
              <Image 
                src={isActive ? tab.selectedIcon : tab.icon} 
                className='nav-icon-img'
                mode='aspectFit'
              />
            </View>
            <Text className='nav-label'>{tab.label}</Text>
          </View>
        )
      })}
    </View>
  )
}
