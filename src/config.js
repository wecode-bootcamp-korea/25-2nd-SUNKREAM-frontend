export const BASE_URL = '';
export const KAOKAO_LOGIN_URL = '10.58.1.82:8000';
export const ACCESS_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code`;
