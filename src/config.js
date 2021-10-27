export const BASE_URL = '';
export const KAOKAO_LOGIN_URL = '10.58.1.82:8000';
export const ACCESS_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code`;
export const URL = {
  product: 'http://10.58.0.168:8000/products',
  chart: 'http://10.58.5.203:8000/orders/price',
  wishList: 'http://10.58.5.200:7900/products',
};
