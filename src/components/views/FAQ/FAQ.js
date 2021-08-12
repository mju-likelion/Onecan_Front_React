import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './FAQ.css';

function FAQ() {
  return (
    <>
      <Header />
      <div className="contents">
        <div className="title_list">
            <div className="title_one">
                <h1>무엇이 궁금하신가요?</h1>
            </div>
        </div>

        <div className="service_wrap">
          <div className="market">
              <div className="service_name">
                  <h2>One can 마켓의 장점</h2>
              </div>
              <div className="market_service">
              <p className="market_content">저희 'One can do it'을 방문해 주셔서 감사합니다:) </p>
                    <p className="market_content">One Can 마켓은 기존의 대형 유통 체제에서도 최적화된 방식으로 </p>
                    <p className="market_content">1인 가구의 삶의 질을 높일 방안을 찾고자 하였습니다.</p>
                    <p className="market_content">따라서 저희는 어떻게 하면 1인 가구에게 질 좋은 상품을 합리적인 가격으로 제공할지 연구했습니다.</p>
                    <p className="market_content">그리고 그 방안으로는 저희 One can market 고유의 중간 업체를 선정하여 고객 각각 원하는 양만을 </p>
                    <p className="market_content">받아볼 수 있도록 유통할 방법을 찾았습니다. </p> 
                    <p className="market_content">그리고 이에 따라 저희 마켓의 이용자는 가격대비 더 많은 종류의 식품을 접할 수 있게 될 전망입니다. </p> 
              </div>
          </div>

          <div className="market">
              <div className="service_name">
                  <h2>One can 커뮤니티란?</h2>
              </div>
              <div className="market_service">
                    <p className="market_content">One Can 커뮤니티는 두 형태의 서비스를 제공합니다. </p>
                    <p className="market_content">레시피와 물물교환 페이지는 여러분의 생활에 새로움을 더할 수 있습니다.</p>
                    <p className="market_content">레시피로 나만의 레시피를 전시해 보세요! 그게 무엇이든 생활에 관련된 것이라면 다 좋습니다!</p>
                    <p className="market_content">물물교환으로 나의 살림을 더 효율적으로 꾸려보세요! 어쩌면 나에게 무척 도움이 될지도!  </p>
              </div>
          </div>
           
        </div>
      </div>
      <Footer />
    </>
  )
}


export default FAQ
