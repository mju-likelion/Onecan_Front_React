import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import {Row, Col} from 'antd';
import Header from "../../../components/views/Header/Header";
import Footer from "../../../components/views/Footer/Footer";


function DetailProductPage(props) {


  const [Product, setProduct] = useState({})
//이 부분에서 백이랑 연관되는 코드가 더 필요하지만 오류 떠서 일단 빼 뒀음(추후 추가)

  return (
    <div 
    style={{width: "100%", height: "100vh" }}>
      <div style = {{display: 'flex', justifyContent: 'center'}}>
        {/*<h1>상품 디테일 </h1>*/ }
      </div> 
      
      <br />
      <Row gutter={[16, 16]} > 

        <Col lg={12} sm={24}>
          {/* ProductImage*/ }
          <ProductImage detail = {Product} />
        </Col>
        <Col lg={12} sm={24}>
           {/* ProductInfo*/ }
           <ProductInfo detail = {Product} />
        </Col>
        <Footer />
      </Row>

     
    </div>
  )
}
export default DetailProductPage;
