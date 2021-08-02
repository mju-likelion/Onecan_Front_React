import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
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

export function getCartItems(cartItems, userCart) {
  const request = axios.get('/api/product/products_by_id?id=${cartItems}&type=array')
       .then(response => {
          // cartItem에 해당하는 정보들을 product collection 에서 가져온 후에 quantity에 넣어준다
          // Product.js 파일이 있어야 오류 없이 돌아갈 것 같음 (상품상세페이지)
          userCart.forEach(cartItem => {
            response.data.forEach((productDetail, index) => {
              if(cartItem.id === productDetail._id){
                response.data[index].quantity = cartItem.quantity
              }
            })
          })
          return response.data;
       });

       return {
         type: GET_CART_ITEMS,
         payload: request
       }
      }


export function removeCartItem(productId) {

  //백에서 request 받고 처리하기 구현 필요
  const request = axios.get(`/api/users/removeFromCart?id=${productId}`)
      .then(response => {
          //productInfo ,  cart 정보를 조합해서   CartDetail을 만든다. 
          response.data.cart.forEach(item => {
              response.data.productInfo.forEach((product, index) => {
                  if (item.id === product._id) {
                      response.data.productInfo[index].quantity = item.quantity
                  }

              })
          })
          return response.data;
      });

  return {
      type: REMOVE_CART_ITEM,
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
