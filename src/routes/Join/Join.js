import React, { useState } from 'react';
import './Join.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

 function Join() {
    const [info, setInfo] = useInfo({
        id : '',
        email: '',
        password: '',
        passwordtest: '',
        name: '',
        phone: '',
        address: '',
    });
  
    // input에 id, pw가 입력되면 account 변수에 value를 저장
    const onChangeAccount = (e) => {
      setAccount({
        ...account,
        [e.target.name]: e.target.value,
      });
    };
 }

 return (
   <>
        < Header />
        <p className="Join_title">회원가입</p>
            <div className="all_Join">
            <div className="Register_section">
                <span className="ID">아이디</span>
                <input 
                type="text" 
                className="input_id" 
                placeholder="ID를 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="EMAIL">이메일</span>
                <input 
                type="mail" 
                className="input_email" 
                placeholder="e-mail을 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="PW">비밀번호</span>
                <input 
                type="password" 
                className="input_pw" 
                placeholder="비밀번호를 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="PWTEST">비밀번호 확인</span>
                <input 
                type="password" 
                className="input_pwtest" 
                placeholder="비밀번호를 한 번 더 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="Name">이름</span>
                <input 
                type="text" 
                className="input_name" 
                placeholder="이름을 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="Phone">전화번호</span>
                <input 
                type="text" 
                className="input_phone" 
                placeholder="전화번호를 입력하세요"
                onChange={onChangeAccount}></input>
                <br />
                <span className="Address">주소</span>
                <input 
                type="text" 
                className="input_address" 
                placeholder="주소를 입력해 주세요"
                onChange={onChangeAccount}></input>
                <br />
            </div>
            </div>
            <button className="Join_button">회원가입</button>
            <br />
                
        < Footer />
   </>
 );

 
export default Join;