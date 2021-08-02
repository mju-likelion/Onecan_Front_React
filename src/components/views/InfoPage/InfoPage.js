import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './InfoPage.css';

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
                    <h2>Market</h2>
                </div>
                <div className="market_service">
                    <p className="market_content">저희 'One can do it' 마켓에서는 야채, 과일, 육류, 유제품 등 많은 신선 제품들과 생활 필수품들을 만나 보실 수 있습니다!</p>
                    <p className="market_content">지금까지 혼자 살아서 먹지 못했던 과일이나 채소들이 있다면, 저희 원캔 마켓과 함께 하세요!</p>
                    <p className="market_content">딸기가 드시고 싶으셨다고요? 저희 마켓에서 원하는 만큼만 구매해 보세요!</p>
                    <p className="market_content">이제 시들시들한 당근은 보내주시고 내가 원하는 만큼만 구매해서 남기지 않는 착한 소비를 함께 해보는건 어떨까요?</p>
                    <p className="market_content">원하는 양만, 더 많은 종류의 식재료를 지금까지와는 다르게 더 저렴한 가격으로 구매하실 수 있습니다.</p>
                    <p className="market_content">저희 'One can do it' 마켓과 함께해주세요:) </p>
                </div>
            </div>
            <div className="community">
                <div className="service_name">
                    <h2>Community</h2>
                </div>
                <div className="community_service">
                    <p className="community_content">'One can do it' 커뮤니티에서는 다양한 레시피를 많은 사람들과 공유하며 여러 요리를 시도해 볼 수 있습니다.</p>
                    <p className="community_content">혼자서만 알고 있기 아까웠던 자신만의 생활 레시피를 저희 'One can do it'에서 여러 사람들과 공유해보세요.</p>
                    <p className="community_content">나만 알고 있던 꿀팁, 생활지혜 등을 자유롭게 저희 'One can do it' 커뮤니티에서 보여주세요!</p>
                    <p className="community_content">더불어 저희 원캔두잇에서만 제공하는 차별화된 물물교환 시스템까지 지금 바로 이용해 보시는 건 어떨까요?</p>
                </div>
            </div>
            <div className="utilize">
                <div className="utilize_name">
                    <h2>이용 관련 법률</h2>
                </div>
                <div className="utilize_service">
                    <p className="utilize_content">이용약관 페이지를 참고해주시면 감사하겠습니다:)</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default InfoPage;