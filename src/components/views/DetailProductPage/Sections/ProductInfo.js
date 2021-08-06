import React, {useState} from 'react';
import { Descriptions, Button } from 'antd';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../../../_actions/user_action';
import axios from "axios";
import Count from '../../../utils/Count';

function ProductInfo(props) {
    const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 cart 필드에다가 넣어 준다
    dispatch(addToCart(props.detail._id))

  }

  const [ObjName, setObjName] = useState('')
  const [ObjPrice, setObjPrice] = useState('')
  const [ObjUnit, setObjUnit] = useState('')
  const [ObjPackagingType, setObjPackagingType] = useState('')
  const [ObjDeliveryType, setObjDeliveryType] = useState('')
  const [ShelfLife, setShelfLife] = useState('')
  const [PurchaseQuantity, setPurchaseQuantity] = useState('')

  return (
    <div style={{ }}>
      <h1>표시 {ObjName}</h1>
      <h2>표시 {ObjPrice}</h2>
      <br />
      <p>판매 단위 : {ObjUnit}</p>
      <p>포장 타입 : {ObjPackagingType}</p>
      <p>배송 구분 : {ObjDeliveryType}</p>
      <p>유통기한 : {ShelfLife}</p>
      <p>구매 수량 : {PurchaseQuantity}<Count /></p>
      
      <br />
      <br />
      <br />
      <br />

      <div style ={{display: 'flex', justifyContent: 'center'}}>
            <button 
            style={{cursor: 'pointer'}}
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
