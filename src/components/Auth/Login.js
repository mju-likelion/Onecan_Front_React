import React from 'react';
import './Login.css';

function Login(){
  return(
    <>
      {/* 헤더 */}
      <header className="head">
        <div className="auth">
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
            <li>F&Q</li>
          </ul>
        </div>

        <div className="title_search">
          <div className="title">
            One can do it!
          </div>
          <div className="search">
            <input placeholder="검색어를 입력하세요"></input> 
          </div>
        </div>
        <div className="category">
          <div className="category_list">
            <ul>
              <li>전체 카테고리</li>
              <li>Best</li>
              <li>Sale</li>
              <li>장바구니</li>
            </ul>
          </div>
        </div>
      </header>
      {/* 로그인 */}
      <p className="login_title">Login</p>
      <div className="all_login">
        <div className="login_section">
          <span className="ID">ID</span>
          <input type="text" className="input_id" placeholder="ID를 입력하세요"></input>
          <br />
          <span className="PW">PW</span>
          <input type="password" className="input_pw" placeholder="비밀번호를 입력하세요"></input>
        </div>
      </div>
      <button className="kakao_button">카카오로 로그인하기</button>
      <br />
      <button className="naver_button">네이버로 로그인하기</button>
      <br />
      <button className="google_button">구글로 로그인하기</button>

      {/* 푸터 */}  
      <section className="FooterContainer">
        <div className="FirstFooter">
          <footer>
            <h1 className="name">One can do it!</h1>
            <nav>
              <ul className="lists">
                <li>이용약관</li>
                <li>이용안내</li>
                <li>입점문의</li>
              </ul>
              <hr className="line" />
              <p className="email">E-mail</p>
            </nav>
          </footer>
        </div>
      </section>  
    </>
  );  
}

export default Login;