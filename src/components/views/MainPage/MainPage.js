import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Carousel, Row, Col } from "antd";
import "./MainPage.css";
import { RightOutlined } from "@ant-design/icons"; //아이콘 import 오류 해결

function MainPage(props) {
  const imgStyle = {
    width: "100%",
    height: "470px",
  };

  const style = {
    width: "250px",
    height: "200px",
    borderRadius: "9px",
  };

  const [product, setProduct] = useState([]);
  const [new_product, setNew_Product] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [barter, setBarter] = useState([]);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/product/`) //best api
      .then(response => {
        console.log(response);
        setProduct(response.data.slice(0, 4));
      })
      axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/new_product/`) //new api
      .then(response => {
        console.log(response);
        setNew_Product(response.data.slice(0, 4));
      })
    axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/recipe/`)//recipe api
      .then(response => {
        console.log(response);
        setRecipe(response.data.slice(0, 4));
      })
    axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/barter/`) //barter api
      .then(response => {
        console.log(response);
        setBarter(response.data.slice(0, 4));
      })
  }, []);

  return (
    <>
      <Header />
      <div style={{
        marginTop: '200px',
        width: '100%',
        height: '120px',
      }}>
          <Carousel autoplay> 
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
                alt="광고" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928043_960_720.jpg"
                alt="광고" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg"
                alt="광고" />
            </div>
            <div>
              <img style={imgStyle}
                src="https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg"
                alt="광고" />
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
                  {product.map(product => (
                    <Col className="gutter-row">
                    <img style={style}
                      src={`${process.env.REACT_APP_SERVER_ORIGIN}`+product.image.split("8000")[1]}
                      alt="Best 상품" />
                    <p className="list_name">{`${process.env.REACT_APP_SERVER_ORIGIN}`+product.product.split("8000")[1]}</p>
                    <p className="list_price">{`${process.env.REACT_APP_SERVER_ORIGIN}`+product.price.split("8000")[1]}</p>
                  </Col>   
                  ))}
                </Row>
                <br />
                <br />
              </div>
            </div>
          <div className="secondBlock">
              <h1 className="categoryTitle">
                <Link to='/listnew' style={{color: '#4d804a'}}>
                  신상품<RightOutlined /></Link>
              </h1> 
            <div>
              <Row className="gutter">
              
                  {new_product.map(new_product => (
                    <Col className="gutter-row">
                        <img style={style}
                          src={`${process.env.REACT_APP_SERVER_ORIGIN}`+new_product.image.split("8000")[1]}
                          alt="NEW 상품" />
                      <p className="list_name">{`${process.env.REACT_APP_SERVER_ORIGIN}`+new_product.product.split("8000")[1]}</p>
                      <p className="list_price">{`${process.env.REACT_APP_SERVER_ORIGIN}`+new_product.price.split("8000")[1]}</p>
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
                        src={`${process.env.REACT_APP_SERVER_ORIGIN}`+recipe.image.split("8000")[1]}
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
            <Link to="/listbarter" 
              style={{ color: "#4d804a" }}>
              물물교환
              <RightOutlined />
            </Link>
          </h1>
          <div>
            <Row className="gutter">
                {barter.map(barter => (
                  <Col className="gutter-row">
                    <img style={style}
                      src={`${process.env.REACT_APP_SERVER_ORIGIN}`+barter.image.split("8000")[1]}
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