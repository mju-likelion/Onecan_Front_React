import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MainPage(props) {

    useEffect(() => {
      axios.get('/api/hello')
          .then(response => { console.log(response) })
    }, [])


    return (
      <>
      <Header />
      <div style= {{
        display: 'flex', justifyContent:'center', alignItems:'center',
        width: '100%', height: '100vh'
      }}>
        <h2>시작 페이지</h2>
      </div>
      <Footer />
      </>
    )
  }

export default withRouter(MainPage)

