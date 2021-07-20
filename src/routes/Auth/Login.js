import React from 'react';
import './Login.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Login(){

  return(
    <>
      <Header />
      
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
        <button className="login_button">로그인</button>
        <br />
        <button className="kakao_button">카카오로 로그인하기</button>
        <br />
        <button className="naver_button">네이버로 로그인하기</button>
        <br />
        <button className="google_button">구글로 로그인하기</button>

      <Footer />
    </>
  );  
}

export default Login;