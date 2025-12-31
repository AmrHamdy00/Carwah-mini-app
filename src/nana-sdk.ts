// Nana SDK Helper for Taro/React
// Wraps the 'ft' global object exposed by the Nana host app

// Ensure 'ft' is defined (it should be in the FinClip/MiniProgram environment)
const ft: any = (typeof window !== 'undefined' && (window as any).ft) || (typeof global !== 'undefined' && (global as any).ft) || {};

export const NanaConfig = {
  // Configuration Constants
  API_KEY: '535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790',
  PAYMENT_SESSION_URL: 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session',
  MINI_APP_ID: 'carwah_mini_app' // Default MiniApp ID if needed
};

export const NanaConf = {
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
