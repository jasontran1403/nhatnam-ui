// Base URL
export const BASE_URL = 'http://localhost:9009';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH_TOKEN: '/api/auth/refresh-token',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE_PROFILE: '/api/user/update',
  },
  PRODUCT: {
    LIST: '/api/products',
    DETAIL: '/api/products',
    CREATE: '/api/products/create',
    UPDATE: '/api/products/update',
    DELETE: '/api/products/delete',
  },
  ORDER: {
    CREATE: '/api/orders/create',
    LIST: '/api/orders',
    DETAIL: '/api/orders',
    CANCEL: '/api/orders/cancel',
  },
  CART: {
    ADD: '/api/cart/add',
    LIST: '/api/cart',
    UPDATE: '/api/cart/update',
    REMOVE: '/api/cart/remove',
  },
};

// Status Codes
export const STATUS_CODE = {
  SUCCESS: 900,
  UNAUTHORIZED: 901,
  FORBIDDEN: 902,
  BAD_REQUEST: 903,
  NOT_FOUND: 904,
  CONFLICT: 905,
  VALIDATION_ERROR: 906,
  TOO_MANY_REQUESTS: 907,
  INTERNAL_SERVER_ERROR: 921,
  SERVICE_UNAVAILABLE: 922,
  DATABASE_ERROR: 923,
  WRONG_PASSWORD: 941,
  ACCOUNT_LOCKED: 942,
  EMAIL_ALREADY_EXISTS: 943,
  PHONE_ALREADY_EXISTS: 944,
  INSUFFICIENT_BALANCE: 945,
};