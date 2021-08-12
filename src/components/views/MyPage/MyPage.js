import React from 'react';
//import axios from "axios";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSelect from './Sections/ImageSelect';
import MyInfo from './Sections/MyInfo';
import './Sections/My.css';

function MyPage() {
  return (
    <>
    <Header />
    <div className="form" style={{ width: '100%', padding: '5rem 6rem'}}>
          <div className="mypage_title" style={{ textAlign: 'center', marginTop:'2%', marginBotton:'3%' }}>
            <h1 style={{marginLeft:"-55%", fontSize: '37px'}}>마이페이지</h1>
            <br />
            <hr width="70%"/>
          </div>
          <div style={{ width: '100%', padding: '5rem 6rem'}}>
            <br />
                    {/* MyImage */} 
                    <div style={{width:'38%', marginTop:'1%', marginLeft:'100px'}}>
                    <p className="UserCharacter">나의 One can 캐릭터</p>
                    <ImageSelect detail={MyPage} />
                     
                    </div>
                    
                    <div className="InfoBox" style={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start', marginTop:'-32%', marginLeft:'50%' }}>
                    <p className="UserInfo">고객 정보</p>
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
