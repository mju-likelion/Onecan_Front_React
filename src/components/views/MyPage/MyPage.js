import React from 'react';
//import axios from "axios";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyInfo from './Sections/MyInfo';
import './Sections/My.css';

function MyPage() {
  return (
    <>
    <Header />
    <div 
    className="form" 
    style={{ width: '100%', padding: '5rem 6rem'}}>
          <div 
          className="mypage_title" 
          style={{ textAlign: 'center',
          marginTop:'-3%', 
          marginBotton:'3%' }}>
            <h1 
            style={{marginLeft:"-15%", 
            fontSize: '37px'}}>
              내 정보</h1>
            <br />
          </div>
          <div 
          style={{ width: '100%', padding: '5rem 5rem'}}>
                    <br />
                    {/* MyImage */} 
                    <div 
                    style={{width:'38%', marginTop:'1%', marginLeft:'100px'}}>
                    <img 
                    className="phoneImage" 
                    style={{width:"300px", 
                    height: "300px", 
                    marginLeft: "10%"}} 
                    alt="LandingImg" 
                    src="./LandingImag.jpg" /> 
                    </div>
                    <div 
                    className="InfoBox" 
                    style={{ display: 'flex', 
                    justifyContent: 'center', 
                    alignItems:'flex-start',
                    marginTop:'-18%', 
                    marginLeft:'42%' }}>
                    <br />
                    {/* MyInfo */}
                    <MyInfo detail={MyPage} />
                    </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
export default MyPage
