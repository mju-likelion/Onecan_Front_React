import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART
} from './types';

export function loginUser(dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit)
       .then(response => response.data);

       return {
         type: LOGIN_USER,
         payload: request
       }
}

export function registerUser(dataToSubmit) {
  const request = axios.post('/api/users/register', dataToSubmit)
       .then(response => response.data);

       return {
         type: REGISTER_USER,
         payload: request
       }
}

export function auth() {
  const request = axios.get('/api/users/auth')
       .then(response => response.data);

       return {
         type: AUTH_USER,
         payload: request
       }
}

export function logoutUser() {
  const request = axios.get('${USER_SERVER}/logout')
       .then(response => response.data);

       return {
         type: LOGOUT_USER,
         payload: request
       }
}

export function addToCart(id) {

  let body = {
      productID : id
  } //이제 백엔드에서 users.js 작성해 주면 됨
  const request = axios.post('${USER_SERVER}/addToCart', body)
       .then(response => response.data);

       return {
         type: ADD_TO_CART,
         payload: request
       }
}