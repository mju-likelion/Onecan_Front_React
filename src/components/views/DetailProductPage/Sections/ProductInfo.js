import React from 'react';
import { Descriptions, Button } from 'antd';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../../../_actions/user_action';

function ProductInfo(props) {
    const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 cart 필드에다가 넣어 준다
    dispatch(addToCart(props.detail._id))


  }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:500, marginRight:50, marginLeft:50}}>
      <Descriptions title ="상품 정보" bordered>
          <Descriptions.Item label="상품명">1{props.detail.Name}</Descriptions.Item>
          <Descriptions.Item label="가격">1{props.detail.Price}</Descriptions.Item>
          <Descriptions.Item label="판매단위">1{props.detail.Sales_Unit}</Descriptions.Item>
          <Descriptions.Item label="포장 타입">1{props.detail.Packaging}</Descriptions.Item>
          <Descriptions.Item label="배송 구분">1{props.detail.Delivery_Type}</Descriptions.Item>
          <Descriptions.Item label="유통기한">1{props.detail.shelf_Life}</Descriptions.Item>
          <Descriptions.Item label="구매 수량">1{props.detail.purchase_Quantity}</Descriptions.Item>
          <Descriptions.Item label="상품 설명">1{props.detail.descriptions}</Descriptions.Item>
          </Descriptions>
      <br />
      <div style ={{display: 'flex', justifyContent: 'center'}}>
            <button 
            size="large" 
            className="ToCart"
            onClick={clickHandler}>상품 담기
            </button>
          </div>
      <br />
      <br />
    </div>
  )
}

export default ProductInfo
