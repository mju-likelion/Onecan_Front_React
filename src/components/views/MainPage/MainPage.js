import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageGallery from 'react-image-gallery'
import './MainPage.css';

function MainPage(props) {

    
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];


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
        <ImageGallery items={images} />
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

