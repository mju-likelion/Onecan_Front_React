import React, { useEffect, useState } from 'react';
import {Button} from 'antd';
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem } from '../../../_actions/user_action';
import UserCardBlock from './Sections/UserCardBlock';
import Header from "../../../components/views/Header/Header";
import Footer from "../../../components/views/Footer/Footer";

function CartPage(props){
  const dispatch = useDispatch();

  const [Total, setTotal] = useState(0)
  const [ShowTotal, setShowTotal] = useState(false)

  useEffect(() => {

    let cartItems = []
    // 리덕스 userState 안에 cart 안에 상품이 들어있는지 확인
    // 디비가 없기때문에 불러오지 못해서 일단 주석으로 처리
    // if (props.user.userData && props.user.userData.cart) {
    //     if (props.user.userData.cart.length > 0) {
    //         props.user.userData.cart.forEach(item => {
    //             cartItems.push(item.id)
    //         })
    //         dispatch(getCartItems(cartItems, props.user.userData.cart))
    //             .then(response => { calculateTotal(response.payload) })
    //     }
    // }
  }, [])
  // props.user.userData : [] 안에 넣어야함

  //총 금액 계산하기
  let calculateTotal = (cartDetail) => {
      let total = 0;

      // 각각의 상품의 가격을 계산해서 total을 계산
      cartDetail.map(item => {
          total += parseInt(item.price, 10) * item.quantity
      })

      setTotal(total)
      setShowTotal(true)
  }

  let removeFromCart = (productId) => {
    dispatch(removeCartItem(productId))
      .then(response => {
        // 장바구니에 상품(배열의 길이가 0보다 작거나 같으면)이 없으면 보여주지 않음
        if(response.payload.productInfo.length <= 0){
          setShowTotal(false)
        }
      })
  }



  return(
    <div>
      <Header />
      <h1 style={{
        marginTop: '250px',
        marginLeft: '220px'
      }}>장바구니</h1>
      <div>
        <UserCardBlock />
        {/* <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} /> */}
      </div>
      {ShowTotal ?
        <div style={{
          marginTop: '100px',
          marginLeft: '240px'
        }}>
          <h2>총 금액: {Total} 원</h2>
          <Button style={{
          width: '150px',
          height: '40px',
          borderRadius: 10,
          border: 0,
          fontFamily: 'Montserrat',
          color: 'white',
          background: '#6AB04C',
          cursor: 'pointer',
          margin: '10px'
          }}>
          구매하기
        </Button>
        </div>
        :
        <h3 style={{
          textAlign: 'center',
          margin: '30px'
        }}>장바구니에 담긴 상품이 없습니다 :)</h3>
      }
      <Footer />
    </div>
  )
}


export default CartPage;