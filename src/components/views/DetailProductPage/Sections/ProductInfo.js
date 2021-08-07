import React, {useState} from 'react';
import { Descriptions, Button } from 'antd';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../../../_actions/user_action';
import axios from "axios";
import Count from '../../../utils/Count';

//기존 전송 코드
function ProductInfo(props) {
    const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 cart 필드에다가 넣어 준다
    dispatch(addToCart(props.detail._id))

  }

  const [ObjName, setObjName] = useState('')
  const [ObjPrice, setObjPrice] = useState('')
  const [ObjDescription, setObjDescription] = useState('')
  const [ObjUnit, setObjUnit] = useState('')
  const [ObjPackagingType, setObjPackagingType] = useState('')
  const [ObjDeliveryType, setObjDeliveryType] = useState('')
  const [ShelfLife, setShelfLife] = useState('')
  const [PurchaseQuantity, setPurchaseQuantity] = useState('')

  return (
    <div style={{ }}>
      <h1>상품명 {ObjName}</h1>
      <h2>상품 가격{ObjPrice}</h2>
      <br />
      <div className="ObjDescription">
                   <p className="ObjDescriptionText">
                     <br />
                    상품 설명 상품 설명 상품 설명 상품 설명 상품 설명
                   상품 설명 상품 설명 상품 설명 상품 설명 상품 설명
                   상품 설명 상품 설명 상품 설명 상품 설명 상품 설명
                   {ObjDescription}
                   </p>
                </div>
      <br />
      <br />
      <hr style={{ 
       borderTop: '1px dashed #31572E',
       borderBottom:'none', 
       borderLeft:'none', 
       borderRight:'none'}} />
      <br/>
      <p>판매 단위 : {ObjUnit}</p>
      <p>포장 타입 : {ObjPackagingType}</p>
      <p>배송 구분 : {ObjDeliveryType}</p>
      <p>유통기한 : {ShelfLife}</p>
      <span><p>구매 수량 : {PurchaseQuantity}</p><Count /></span>
      
      <br />
      <br />
      <br />
      <br />

      <div style ={{display: 'flex', justifyContent: 'flex-start', marginLeft:'35px'}}>
            <button 
            style={{cursor: 'pointer'}}
            size="large" 
            className="ToCart"
            onClick={clickHandler}>
              <p className="ToCartText">상품 담기</p>
            </button>
          </div>
      <br />
      <br />
    </div>
  )
}

export default ProductInfo
