import { Image } from '@tarojs/components'
// Using SVG as component is tricky in Taro sometimes depending on config, 
// but we can use Image with base64 or just standard View with background mask.
// For simplicity and compatibility, I will use an Image component if I had the assets.
// Since I am creating code, I will use a simple SVG string implementation if Taro supports it, 
// OR better yet, since this is a mini-program, I should use font icons or images.
// BUT, for now, I will use a simple React component that renders an SVG if the environment supports it (H5/React Native)
// or just a View with a shape for MiniProgram if SVG is not fully supported without plugins.
// Wait, Taro supports SVG components in recent versions.
// Let's try standard SVG.

import { View } from '@tarojs/components'

export const HomeIcon = ({ color = '#999999', size = 24 }) => (
  <View style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </View>
)
