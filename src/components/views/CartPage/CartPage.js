import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';
import Header from "../../../components/views/Header/Header";
import Footer from "../../../components/views/Footer/Footer";

function CartPage(props){
  const dispatch = useDispatch();

  useEffect(() => {

    let cartItems = []

    // 리덕스 userState 안에 cart 안에 상품이 들어있는지 확인
    if(props.user.userData && props.user.userData.cart){
      if(props.user.userData.cart.length > 0){
        props.user.userData.cart.forEach(item => {
          cartItems.push(item.id)
        })

        dispatch(getCartItems(cartItems, props.user.userData.cart))
      }
    }
  }, [])

  return(
    <div style={{ width: '1280px'}}>
      <Header />
      <h1>장바구니</h1>
      <div>
        <UserCardBlock products={props.user.cartDetail && props.user.cartDetail.product} />
      </div>
      <Footer />
    </div>
  )
}

export default CartPage;