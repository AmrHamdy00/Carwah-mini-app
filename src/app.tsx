import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import { store } from './store'
import { setToken } from './store/userSlice'
import { NanaConf } from './nana-sdk'
import './app.css'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')

    const fetchUserToken = async () => {
      console.log('Fetching user token via NanaSDK...')
      try {
        const res: any = await NanaConf.getUserToken()
        console.log('Token response retrieved:', res)
        
        // Handle different possible response structures
        const token = typeof res === 'string' ? res : (res?.token || null)
        
        if (token) {
          store.dispatch(setToken(token))
          console.log('Token saved to Redux store:', store.getState().user.token)
        } else {
          console.warn('No valid token found in response')
        }
      } catch (error) {
        console.error('Error fetching user token:', error)
      }
    }

    fetchUserToken()
  })

  // children is the page to be rendered
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App
