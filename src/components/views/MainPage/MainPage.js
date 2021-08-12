import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel, Row, Col } from 'antd';
import './MainPage.css';
import {RightOutlined} from '@ant-design/icons'; //아이콘 import 오류 해결

function MainPage(props) {

    const imgStyle = {
      width: '100%',
      height: '470px',
    };

    const style = { 
      width: '250px',
      height: '200px',
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
          <div>
            <h1 className="categoryTitleFirst">
              <Link to='/listobj/:listId' style={{color: '#4d804a'}}>
                Best<RightOutlined /></Link>
            </h1> 
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
                  src="https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_960_720.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2015/05/07/13/49/traditional-756493_960_720.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
              <Col className="gutter-row">
                <img style={style}
                  src="https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg" 
                  alt="음식" />
                <p className="list_name">이름</p>
                <p className="list_price">가격</p>
              </Col>
            </Row>
            <br />
            <br />
          </div>

          <div>
              <h1 className="categoryTitle">
                <Link to='/listobj/:listId' style={{color: '#4d804a'}}>
                  Sale<RightOutlined /></Link>
              </h1> 
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
            <br />
            <br />
          </div>
          </div>
          
          <div className="thirdBlock">
            <h1 className="categoryTitle">
                <Link to='/listrecipe' style={{color: '#4d804a'}}>
                  Recipe<RightOutlined /></Link>
            </h1>
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
            <br />
          </div>
          </div>

          <div className="fourthBlock"> 
            <h1 className="categoryTitle">
                <Link to='/listbarter' style={{color: '#4d804a'}}>
                  Barter<RightOutlined />
                </Link>
            </h1>
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
            <br />
          </div>
          </div>
        </div>
        
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)
