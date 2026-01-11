import { View } from '@tarojs/components'

export const OrdersIcon = ({ color = '#999999', size = 24 }) => (
  <View style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.75 12H16.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.75 8H16.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.75 16H12.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </View>
)
