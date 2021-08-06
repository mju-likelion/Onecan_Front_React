import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      <div style= {{
        display: 'flex', justifyContent:'center', alignItems:'center',
        width: '100%', height: '100vh'
      }}>
        {/* <Slider {...settings}> 
          <div>
            <h3>1</h3>
          </div> 
          <div> 
            <h3>2</h3> 
          </div> 
        </Slider> */}
        <div>
          <span>Best</span>
        </div>
        <div>
          <span>Sale</span>
        </div>
        <div>
          <span>Recipe</span>
        </div>
        <div>
          <span>물물교환</span>
        </div>
      </div>
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)

