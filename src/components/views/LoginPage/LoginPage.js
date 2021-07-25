import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

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
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;