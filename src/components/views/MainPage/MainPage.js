import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel } from 'antd';
import './MainPage.css';

function MainPage(props) {

    const imgStyle = {
      width: '100%',
      height: '280px',
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
            <h1 className="category_title">Best</h1>
            <p className="more">더보기</p>
          </div>

          <div>
            <h1 className="category_title" >Sale</h1>
            <p className="more" >더보기</p>
          </div>

          <div>
            <h1 className="category_title" >Recipe</h1>
            <p className="more" >더보기</p>
          </div>

          <div> 
            <h1 className="category_title" >물물교환</h1>
            <p className="more" >더보기</p>
          </div>
        </div>
        
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)
