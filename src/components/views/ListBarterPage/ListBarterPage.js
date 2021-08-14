import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";

function ListBarterPage() {
  const style = {
    width: "50px",
    height: "100px",
    borderRadius: "9px",
  };

  const [barter, setBarter] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ORIGIN}/barter/`) //barter api
      .then((response) => {
        console.log(response);
        setBarter(response.data.slice(0, 10));
      });
  }, []);

  return (
    <>
      <Header />
      <div className="form">
        <div
          style={{
            marginTop: "50px",
            width: "100%",
            height: "50px",
          }}
        >
          <div className="firstBlock"></div>
          <h1 
          className="categoryTitleFirst1" 
          style={{
            textAlign: "center", 
            marginTop: "20%", 
            marginBotton: "5%" , 
            marginLeft:'-8%'}}>물물교환</h1>
          <div>
            <Row className="gutter">
              {barter.map((b) => (
                <Col className="gutter-row">
                  <img style={style} 
                  src={`${process.env.REACT_APP_SERVER_ORIGIN}`+b.image.split("8000")[1]} alt="Barter" />
                  <p className="list_name">
                    {`${process.env.REACT_APP_SERVER_ORIGIN}`+b.title.split("8000")[1]}
                  </p>
                </Col>
              ))}
            </Row>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListBarterPage;
