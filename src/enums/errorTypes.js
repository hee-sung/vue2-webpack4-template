const CUSTOM_ERROR_TYPES = Object.freeze({
  JS_INTERFACE_ERROR: {
    TYPE: 'JS_INTERFACE_ERROR'
  },
  HTTP_ERROR: {
    TYPE: 'HTTP_ERROR'
  }
});

const JS_INTERFACE_ERROR_TYPES = Object.freeze({
  OTHER: {
    TYPE: 'OTHER'
  },
  WEB: {
    TYPE: 'WEB'
  },
  IOS: {
    TYPE: 'IOS'
  },
  ANDROID: {
    TYPE: 'ANDROID'
  }
});

const HTTP_ERROR_TYPES = Object.freeze({
  API_ERROR: {
    NAME: 'ApiError'
  },
  HTTP_ERROR: {
    NAME: 'HTTPError'
  }
});


export {
  CUSTOM_ERROR_TYPES,
  JS_INTERFACE_ERROR_TYPES,
  HTTP_ERROR_TYPES
}