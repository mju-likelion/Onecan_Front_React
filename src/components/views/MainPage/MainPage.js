import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainPage.css';

function MainPage(props) {

    const settings = { 
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1 };


    useEffect(() => {
      axios.get('/api/hello')
          .then(response => { console.log(response) })
    }, [])


    return (
      <>
      <Header />
      <div style={{
        marginTop: '300px',
        width: '100%',
        height: '120px'
      }}>
        {/* 이미지 슬라이더 필요 */}
      </div>
        
        <div className="form">
          <h1 className="category_title">Best</h1>
          <p className="more">더보기</p>
        </div>

        <div className="form">
          <h1 className="category_title" >Sale</h1>
          <p className="more" >더보기</p>
        </div>

        <div className="form">
          <h1 className="category_title" >Recipe</h1>
          <p className="more" >더보기</p>
        </div>

        <div className="form"> 
          <h1 className="category_title" >물물교환</h1>
          <p className="more" >더보기</p>
        </div>
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)

