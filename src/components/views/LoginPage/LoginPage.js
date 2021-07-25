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
      <form style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmitHandler}>
        <label>ID</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>PW</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">
          로그인
        </button>
        <button>
          카카오로 로그인하기
        </button>
        <button>
          네이버로 로그인하기
        </button>
        <button>
          구글로 로그인하기
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default withRouter(LoginPage);