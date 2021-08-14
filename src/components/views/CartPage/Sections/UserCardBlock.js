import React, { useEffect, useState } from 'react';
import "./UserCardBlock.css";
import {Button} from 'antd';
import axios from "axios";

function UserCardBlock(props){

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/product/`) 
      .then(response => {
        console.log(response);
        setProduct(response.data);
      })
  }, []);

  // const renderCartImage = (images) => {
  //   if(images.length > 0){
  //     // 이미지가 한 개 이상일 경우 첫 번째 이미지를 보여주도록
  //     let image = images[0]
  //     // return '서버 주소/${image}'
  //   }
  // }

  // 상품 이미지, 수량, 가격, 삭제버튼 렌더링
  // const renderItems = () => (
  //   props.products && props.product.map((product, index) => (
  //     <tr key={index}>
  //       <td>
  //         <img style={{width: '60px'}} alt="product"
  //         src={renderCartImage(product.images)} />
  //       </td>
  //       <td>
  //         {product.quantity}
  //       </td>
  //       <td>
  //         {product.price} 원
  //       </td>
  //       <td>
  //         <Button OnClick={() => props.removeItem(product._id)}>
  //           상품삭제
  //         </Button>
  //       </td>
  //     </tr>
  //   ))
  // )
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>상품</th>
            <th>수량</th>
            <th>상품 가격</th>
            <th>상품 삭제</th>
          </tr>
        </thead>

        <tbody>
          
          {product.map(product => (
            <tr>
            <td>
              <img style={{width: '60px'}}
                src={`${process.env.REACT_APP_SERVER_ORIGIN}`+product.image.split("8000")[1]}
                alt="상품 이미지" />
            </td>
            <td>
              {/* db에 없음 */}
              {`${process.env.REACT_APP_SERVER_ORIGIN}`+product.quantity.split("8000")[1]} 
            </td>
            <td>
              {`${process.env.REACT_APP_SERVER_ORIGIN}`+product.price.split("8000")[1]} 원
            </td>
            <td>
              <Button OnClick={() => props.removeCartItem(product._id)}>
                상품삭제
              </Button>
            </td>
            </tr>
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default UserCardBlock;