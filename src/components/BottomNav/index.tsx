import { View, Text, Image } from '@tarojs/components'
import homeIcon from '../../assets/icons/bottombar/home.png'
import homeSelectedIcon from '../../assets/icons/bottombar/home-selcted.png'
import rentalsIcon from '../../assets/icons/bottombar/rentals.png'
import rentalsSelectedIcon from '../../assets/icons/bottombar/rentals-selected.png'
import profileIcon from '../../assets/icons/bottombar/user.png'
import profileSelectedIcon from '../../assets/icons/bottombar/user-selected.png'
import moreIcon from '../../assets/icons/bottombar/more.png'
import moreSelectedIcon from '../../assets/icons/bottombar/more-selected.png'
import pointerIcon from '../../assets/icons/bottombar/selected-pointer.png'
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
    if (onTabChange) {
      onTabChange(key)
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
