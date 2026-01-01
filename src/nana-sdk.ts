import { request, getAccountInfoSync } from '@tarojs/taro';
import { API_KEY, PAYMENT_SESSION_URL } from './constants';

// Nana SDK Helper for Taro/React
// Wraps the 'ft' global object exposed by the Nana host app

// Ensure 'ft' is defined (it should be in the FinClip/MiniProgram environment)
const ft: any = (typeof window !== 'undefined' && (window as any).ft) || (typeof global !== 'undefined' && (global as any).ft) || {};

export const NanaConfig = {
  // Configuration Constants
  API_KEY,
  PAYMENT_SESSION_URL,
  MINI_APP_ID: 'carwah_mini_app' // Default MiniApp ID if needed
};

export const NanaConf = {
  createPaymentSession: async (userToken: string, amount: number, reference: string) => {
    try {
      const response = await new Promise<any>((resolve, reject) => {
        request({
          url: PAYMENT_SESSION_URL,
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
            'miniapp-api-key': API_KEY,
            'miniapp-user-token': `Bearer ${userToken}`
          },
          data: {
            amount: amount,
            reference: reference
          },
          success: (res) => {
            resolve(res.data);
          },
          fail: (err) => {
            reject(new Error(`Network Error: ${err.errMsg}`));
          }
        });
      });

      if (response.success) {
        // Get the mini app ID
        const appInfo = getAccountInfoSync();
        const appId = appInfo.miniProgram.appId;

        // Add mini app ID to the response data
        response.data.mini_app_id = appId;

        return response.data;
      } else {
        console.error('Failed to create payment session:', response);
        throw new Error('Failed to create payment session');
      }
    } catch (error) {
      console.error('Error creating payment session:', error);
      throw error;
    }
  },

  handlePayment: async (amount: number, reference: string) => {
    try {
      // Step 1: Get user token
      const userTokenRes: any = await NanaConf.getUserToken();
      if (!userTokenRes || !userTokenRes.token) {
        throw new Error('Failed to retrieve user token');
      }

      console.log('User Token:', userTokenRes.token);

      // Step 2: Create payment session
      const paymentSessionData = await NanaConf.createPaymentSession(userTokenRes.token, amount, reference);

      // Step 3: Call orderPayment
      return new Promise((resolve, reject) => {
        if (ft && ft.orderPayment) {
          ft.orderPayment({
            data: paymentSessionData,
            success: (res) => {
              console.log('Payment processed successfully:', res);
              resolve(res);
            },
            fail: (res) => {
              console.error('Payment failed:', res);
              reject(res);
            }
          });
        } else {
           console.warn('NanaSDK: ft.orderPayment not available, mocking success');
           resolve({ success: true, mock: true });
        }
      });
    } catch (error) {
      console.error('Payment process failed:', error);
      throw error;
    }
  },

  getUserMobile: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getUserMobile) {
        ft.getUserMobile({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getUserName: () => {
    console.log(ft, "ft")
    return new Promise((resolve, reject) => {
      if (ft && ft.getUserName) {
        ft.getUserName({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getAppLang: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getAppLang) {
        ft.getAppLang({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  userLoggedIn: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.userLoggedIn) {
        ft.userLoggedIn({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getUserToken: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getUserToken) {
        ft.getUserToken({
          success: (res) => {
            console.log('NanaSDK: getUserToken success', res);
            resolve(res);
          },
          fail: (err) => {
            console.error('NanaSDK: getUserToken fail', err);
            reject(err);
          }
        });
      } else {
        console.warn('NanaSDK: ft.getUserToken not available');
        resolve(null);
      }
    });
  },
  getUserAddress: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getUserAddress) {
        ft.getUserAddress({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getUserId: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getUserId) {
        ft.getUserId({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  addToCart: (params) => {
    return new Promise((resolve, reject) => {
      if (ft && ft.addToCart) {
        ft.addToCart({
          ...params,
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        console.warn('NanaSDK: ft.addToCart not available, mocking success');
        resolve({ success: true, mock: true });
      }
    });
  },
  orderPayment: (data) => {
    console.log('NanaSDK: orderPayment called with', data);
    return new Promise((resolve, reject) => {
      if (ft && ft.orderPayment) {
        ft.orderPayment({
          data,
          success: (res) => {
            console.log('NanaSDK: orderPayment success', res);
            resolve(res);
          },
          fail: (err) => {
            console.error('NanaSDK: orderPayment fail', err);
            reject(err);
          }
        });
      } else {
        console.warn('NanaSDK: ft.orderPayment not available, mocking success');
        resolve({ success: true, mock: true });
      }
    });
  },
  getNanaUserToken: () => {
    return new Promise((resolve, reject) => {
      if (ft && ft.getNanaUserToken) {
        ft.getNanaUserToken({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  closeMiniAppAndOpenDeepLink: (miniAppId, deepLink) => {
    return new Promise((resolve, reject) => {
      if (ft && ft.closeMiniAppAndOpenDeepLink) {
        ft.closeMiniAppAndOpenDeepLink({
          miniAppId,
          deepLink,
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  closeMiniApp: (miniAppId) => {
    return new Promise((resolve, reject) => {
      if (ft && ft.closeMiniApp) {
        ft.closeMiniApp({
          miniAppId,
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  }
};
