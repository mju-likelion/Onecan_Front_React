import axios from 'axios';
import React, { useEffect, useState } from "react";
import {withRouter, Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel, Row, Col } from 'antd';
import './MainPage.css';
import {RightOutlined} from '@ant-design/icons'; //아이콘 import 오류 해결

function MainPage() {

    const imgStyle = {
      width: '100%',
      height: '470px',
    };

    const style = {
      width: '250px',
      height: '200px',
      borderRadius: '9px'
    };

  const [product, setProduct] = useState([]);
  const [new_product, setNew_Product] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [barter, setBarter] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/products/') //best api
      .then(response => {
        console.log(response);
        setProduct(response.data.slice(0, 4))
      })
      axios.get('http://localhost:8000/new_products/') //new api
      .then(response => {
        console.log(response);
        setNew_Product(response.data.slice(0, 4))
      })
 
    axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/`)//recipe api
      .then(response => {
        console.log(response);
        setRecipe(response.data.slice(0, 4))
      })
    axios.get('http://localhost:8000/barters/') //barter api
      .then(response => {
        console.log(response);
        setBarter(response.data.slice(0, 4))
      })
  }, []);

    return (
      <>
      <Header />
      <div style={{
        marginTop: '200px',
        width: '100%',
        height: '120px'
      }}>
          <Carousel autoplay> 
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
                alt="음식" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928043_960_720.jpg"
                alt="음식" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg"
                alt="음식" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg"
                alt="음식" />
            </div>
        </Carousel> 
      </div>
        <div className="form">
          <div className="firstBlock">
              <h1 className="categoryTitleFirst">
                <Link to='/listobj/:listId' style={{color: '#4d804a'}}>
                  Best<RightOutlined /></Link>
              </h1>
              <div>
                <Row className="gutter">
                  {product.map(item => (
                    <Col className="gutter-row">
                    <img style={style}
                      src={item.image}
                      alt="Best 상품" />
                    <p className="list_name">{item.product}</p>
                    <p className="list_price">{item.price}</p>
                  </Col>
                  ))}
                </Row>
                <br />
                <br />
              </div>
            </div>
          <div className="secondBlock">
              <h1 className="categoryTitle">
                <Link to='/listobj/:listId' style={{color: '#4d804a'}}>
                  신상품<RightOutlined /></Link>
              </h1> 
            <div>
              <Row className="gutter">
              
                  {new_product.map(item => (
                    <Col className="gutter-row">
                        <img style={style}
                          src={new_product.images}
                          alt="NEW 상품" />
                      <p className="list_name">{new_product.product}</p>
                      <p className="list_price">{new_product.price}</p>
                    </Col>
                ))}
              </Row>
              <br />
              <br />
            </div>
          </div>
          <div className="thirdBlock">
            <h1 className="categoryTitle">
                <Link to='/listrecipe' style={{color: '#4d804a'}}>
                  레시피<RightOutlined /></Link>
            </h1>
              <div>
                <Row className="gutter">
                  {recipe.map(recipe => (
                    <Col className="gutter-row">
                      <img style={style}
                        src={recipe.image}
                        alt="레시피 이미지" />
                    </Col>
                  ))}
                </Row>
                <br />
                <br />
            </div>
          </div>

          <div className="fourthBlock">
            <h1 className="categoryTitle">
                <Link to='/listbarter' style={{color: '#4d804a'}}>
                  물물교환<RightOutlined /></Link>
            </h1>
            <div>
            <Row className="gutter">
                {barter.map(item => (
                  <Col className="gutter-row">
                    <img style={style}
                      src={item.image}
                      alt="물물교환 이미지" />
                  </Col>
                ))}
              </Row>
            <br />
            <br />
          </div>
          </div>
        </div>

      <Footer />
      </>
    );
  };

export default withRouter(MainPage);
