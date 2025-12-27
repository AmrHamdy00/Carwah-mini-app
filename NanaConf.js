// Nana Configuration for MiniApp Host
// This file is used by the Nana Platform to register allowed APIs.
// It must be a CommonJS module.

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
    },
    {
      name: 'closeMiniApp',
      sync: false,
      params: {
        miniAppId: ''
      }
    }
  ]
};
