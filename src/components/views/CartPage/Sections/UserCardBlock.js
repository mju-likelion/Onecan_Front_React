import React from 'react';
import "./UserCardBlock.css";

function UserCardBlock(props){

  const renderCartImage = (images) => {
    if(images.length > 0){
      // 이미지가 한 개 이상일 경우 첫 번째 이미지를 보여주도록
      let image = images[0]
      // return '서버 주소/${image}'
    }
  }

  // 상품 이미지, 수량, 가격, 삭제버튼 렌더링
  const renderItems = () => (
    props.products && props.product.map((product, index) => (
      <tr key={index}>
        <td>
          <img style={{width: '60px'}} alt="product"
          src={renderCartImage(product.images)} />
        </td>
        <td>
          {product.quantity}
        </td>
        <td>
          {product.price} 원
        </td>
        <td>
          <button>
            상품삭제
          </button>
        </td>
      </tr>
    ))
  )
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
          {renderItems()}
        </tbody>

      </table>
    </div>
  )
}

export default UserCardBlock;