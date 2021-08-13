import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Row, Col } from 'antd';


function ListBarterPage() {

    const imgStyle = {
        width: '100%',
        height: '470px',
      };

    const style = {
        width: '250px',
        height: '200px',
        borderRadius: '9px'
      };

     const [barter, setBarter] = useState([]);

     useEffect(() => {

     axios.get(`http://52.78.146.159/barter/`) //barter api
     .then(response => {
     console.log(response);
     setBarter(response.data.slice(0, 10))
        })
    }, []);

    return (
        <div className="form">
            <Header />
            <div style={{
            marginTop: '200px',
            width: '100%',
            height: '120px'
            }}>
            <div className="firstBlock">
              <h1 className="categoryTitleFirst">
                물물교환
              </h1>
              <div>
                <Row className="gutter">
                  {barter.map(barter => (
                    <Col className="gutter-row">
                    <img style={style}
                      src={barter.image}
                      alt="Barter" />
                    <p className="list_name">{barter.title}</p>
                  </Col>
                  ))}
                </Row>
                <br />
                <br />
              </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListBarterPage
