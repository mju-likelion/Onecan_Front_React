import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

function RegisterPage(props) {
  const dispatch = useDispatch ();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.Value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.Value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.Value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.Value)
  }



  const onSubmitHandler = (event) => {
      event.preventDefault();

      if(Password !== ConfirmPassword) {
          return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
      }


      let body = {
        email: Email,
        password: Password,
        name: Name

      }

      dispatch(registerUser(body))
            .then(response => {
              if(response.payload.success) {
                  props.history.push("/login")
              } else {
                    alert("회원가입에 실패했습니다.")
              }
            })
    }




    return (
      <div style= {{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100vh'
      }}>
        
      <form style={{display: 'flex', flexDirection:'column'}}
            onSubmit={onSubmitHandler}>
            <label>이메일</label>
            <input type="email" value={Email} onChange={onEmailHandler} />
            
            <label>이름</label>
            <input type="text" value={Name} onChange={onNameHandler} />

            <label>비밀번호</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />

            <label>비밀번호 확인</label>
            <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
            <br />
            <button type="submit">
              회원가입
            </button>
        </form>
      </div>
    )
}

export default withRouter(RegisterPage);
