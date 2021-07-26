import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';

function LoginPage(props) {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler =(event) => {
    // 새로고침 안되도록
    event.preventDefault();  
    let body = {
      email : Email,
      password : Password
    }
    
    // 백엔드 구현이 안되서 실행이 되지는 않음 
    dispatch(loginUser(body))
        .then(response => {
          if(response.payload.loginSuccess){
            props.history.push('/')
          }else{
            alert('아이디와 비밀번호가 일치하지 않습니다.')
          }
        })
    
  }

  return (
    <>
    <Header />
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column', marginLeft: 480, marginRight: 480, marginTop:100}}
          onSubmit={onSubmitHandler}>
        <p style={{ fontSize: 40, fontFamily: 'Montserrat', textAlign: 'center'}}>Login</p>
        <label style={{ fontSize: 20, fontFamily: 'Montserrat'}}>ID</label>
        <input 
           type="email" 
           value={Email} 
           onChange={onEmailHandler} 
           style={{
             width: 300, 
             height: 30, 
             borderRadius: 9, 
             color: '#E0E0E0'}} />
        <label style={{
           fontSize: 20, 
           fontFamily: 'Montserrat'}}>PW</label>
        <input 
          type="password" 
          value={Password} 
          onChange={onPasswordHandler} 
          style={{
            width: 300, 
            height: 30, 
            borderRadius: 9, 
            color: '#E0E0E0'}} />
        <br />
        <button 
          type="submit"
          style={{
            height: 25,
            backgroundColor: '#31572E',
            color: 'white',
            borderRadius: 9,
            marginTop: 10,
            border: 0
          }}>
          로그인
        </button>
        <button
          style={{
            height: 25,
            backgroundColor: 'yellow',
            color: 'black',
            borderRadius: 9,
            marginTop: 20,
            border: 0
          }}>
          Kakao
        </button>
        <button
          style={{
            height: 25,
            backgroundColor: '#15CB60',
            color: 'black',
            borderRadius: 9,
            marginTop: 10,
            border: 0
          }}>
          Naver
        </button>
        <button
          style={{
            height: 25,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: 9,
            marginTop: 10,
            borderBlockStyle: 'solid',
            borderColor: 'blue'
          }}>
          Google
        </button>
        <p style={{
          fontFamily: 'Montserrat',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20
        }}>회원가입 | 아이디 비밀번호 찾기</p>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default withRouter(LoginPage);