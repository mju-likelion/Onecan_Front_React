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
    <div>
      <Descriptions title ="상품 정보" bordered>
          <Descriptions.Item label="상품명">{props.detail.Name}</Descriptions.Item>
          <br />
          <br />
          <Descriptions.Item label="가격">{props.detail.Price}</Descriptions.Item>
          <br />
          <br />
          <Descriptions.Item label="판매단위">{props.detail.Sales_Unit}</Descriptions.Item>
          <Descriptions.Item label="포장 타입">{props.detail.Packaging}</Descriptions.Item>
          <Descriptions.Item label="배송 구분">{props.detail.Delivery_Type}</Descriptions.Item>
          <Descriptions.Item label="유통기한">{props.detail.shelf_Life}</Descriptions.Item>
          <Descriptions.Item label="구매 수량">{props.detail.purchase_Quantity}</Descriptions.Item>
          <Descriptions.Item label="상품 설명">{props.detail.descriptions}</Descriptions.Item>
          <div style ={{displat: 'flex', justifyContent: 'center'}}>
          <button 
          size="large" 
          className="ToCart"
           onClick={clickHandler}>
            카트에 담기
          </button>
           </div>
      </Descriptions>


      <br />
      <br />
      <br />

      







    </div>
  )
}

export default ProductInfo
