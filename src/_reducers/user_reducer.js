import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    GET_CART_ITEMS
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
      case LOGIN_USER: 
          return { ...state, loginSuccess: action.payload }
          break;
      case REGISTER_USER:
          return { ...state, register: action.payload }
          break;
      case AUTH_USER:
          return { ...state, userData: action.payload }
          break;
      case GET_CART_ITEMS:
          return { ...state, cartDetail: action.payload }
          break;
      default:
          return state;
  }
}