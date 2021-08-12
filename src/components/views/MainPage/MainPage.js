import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel, Row, Col } from 'antd';
import './MainPage.css';

function MainPage(props) {

    const imgStyle = {
      width: '100%',
      height: '380px',
    };

    const style = { 
      width: '160px',
      height: '160px',
      borderRadius: '9px'
    };

    useEffect(() => {
      axios.get('/api/hello')
          .then(response => { console.log(response) })
    }, [])


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
                src="https://cdn.pixabay.com/photo/2017/08/30/17/12/waffle-hearts-2697904_1280.jpg" 
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
          <div>
            <h1 className="categoryTitleFirst">Best 상품<p className="more">더보기</p></h1>
            <Row className="gutter">
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
            </Row>
          </div>

          <div>
            <h1 className="categoryTitle" >Sale 상품 <p className="more">더보기</p></h1>
            <div>
            <Row className="gutter">
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
            </Row>
          </div>
          </div>

          <div className="thirdBlock">
            <h1 className="categoryTitle" >Recipe <p className="more">더보기</p></h1>
            <div>
            <Row className="gutter">
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
            </Row>
            <br />
          </div>
          </div>

          <div className="fourthBlock"> 
            <h1 className="categoryTitle" >물물교환 <p className="more">더보기</p></h1>
            <div>
            <Row className="gutter">
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_1280.jpg" 
                  alt="음식" />
              </Col>
            </Row>
            <br />
          </div>
          </div>
        </div>
        
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)
