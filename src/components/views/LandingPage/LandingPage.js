import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../../components/views/Header/Header';
import Footer from '../../../components/views/Footer/Footer';

function LandingPage(props) {

    useEffect(() => {
      axios.get('/api/hello')
          .then(response => { console.log(response) })
    }, [])

    const onClickHandler = () => {
      axios.get('/api/users/logout')
          .then(response => {
              if (response.data.success) {
                  props.history.push("/login")
              } else {
                alert('로그아웃에 실패하였습니다.')
              }
          })
    }

    return (
      <>
      <Header />
      <div style= {{
        display: 'flex', justifyContent:'center', alignItems:'center',
        width: '100%', height: '100vh'
      }}>
        <h2>시작 페이지</h2>

        <button onClick={onClickHandler}>
          로그아웃
        </button>
      </div>
      <Footer />
      </>
    )
  }

export default withRouter(LandingPage)

