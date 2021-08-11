import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Join.css';

function InfoPage() {
  return (
    <>
      <Header />
      <div className="contents">
        <div className="title_list">
            <div className="title_one">
                <h1>One can do it!</h1>
            </div>
            <div className="title_two">
                <h1>We can do it!</h1>
            </div>
        </div>

        <div className="service_wrap">
            <div className="market">
                <div className="service_name">
                    <h2>입점 안내</h2>
                </div>
                <div className="market_service">
                    <p className="market_content">저희 'One can do it'을 방문해 주셔서 감사합니다:) </p>
                    <p className="market_content">현재 입점 준비 중입니다.</p>
                    <p className="market_content">자세한 사항은 onecandoit@likelion.org로 문의 메일 부탁드립니다.</p>
                    <p className="market_content">감사합니다!</p>
                    
                
                    
                </div>
            </div>
           
        </div>
      </div>
      <Footer />
    </>
  )
}

export default InfoPage;