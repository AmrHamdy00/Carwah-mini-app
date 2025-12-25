
// Nana Configuration and API Definitions using 'ft' global object

// Ensure 'ft' is defined (it should be in the FinClip/MiniProgram environment)
// @ts-ignore
const ft = window.ft || global.ft || require('@tarojs/taro').default;

export const NanaConf = {
  getUserMobile: () => {
    return new Promise((resolve, reject) => {
      if (ft.getUserMobile) {
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
    return new Promise((resolve, reject) => {
      if (ft.getUserName) {
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
      if (ft.getAppLang) {
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
      if (ft.userLoggedIn) {
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
      if (ft.getUserToken) {
        ft.getUserToken({
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getUserAddress: () => {
    return new Promise((resolve, reject) => {
      if (ft.getUserAddress) {
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
      if (ft.getUserId) {
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
      if (ft.addToCart) {
        ft.addToCart({
          ...params,
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  orderPayment: (data) => {
    return new Promise((resolve, reject) => {
      if (ft.orderPayment) {
        ft.orderPayment({
          data,
          success: (res) => resolve(res),
          fail: (err) => reject(err)
        });
      } else {
        resolve(null);
      }
    });
  },
  getNanaUserToken: () => {
    return new Promise((resolve, reject) => {
      if (ft.getNanaUserToken) {
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
      if (ft.closeMiniAppAndOpenDeepLink) {
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
  }
};
module.exports = {
  extApi: [
    {
      name: 'getUserMobile',
      sync: false,
      params: {}
    },
    {
      name: 'getUserName',
      sync: false,
      params: {}
    },
    {
      name: 'getAppLang',
      sync: false,
      params: {}
    },
    {
      name: 'userLoggedIn',
      sync: false,
      params: {}
    },
    {
      name: 'getUserToken',
      sync: false,
      params: {}
    },
    {
      name: 'getUserAddress',
      sync: false,
      params: {}
    },
    {
      name: 'getUserId',
      sync: false,
      params: {}
    },
    {
      name: 'addToCart',
      sync: false,
      params: {
        retailer_id: '',
        pid: '',
        quantity: 0,
        image: '',
        price: 0.0,
        promotionId: '',
        name: '',
        addedFrom: '',
        resolvedBidId: '',
        pricingStyle: ''
      }
    },
    {
      name: 'orderPayment',
      sync: false,
      params: {
        data: {}
      }
    },
    {
      name: 'getNanaUserToken',
      sync: false,
      params: {}
    },
    {
      name: 'closeMiniAppAndOpenDeepLink',
      sync: false,
      params: {
        miniAppId: '',
        deepLink: ''
      }
    }
  ]
}
