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
      .get(`http://52.78.146.159/barter/`) //barter api
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
          <h1 className="categoryTitleFirst2">물물교환</h1>
          <div>
            <Row className="gutter">
              {barter.map((barter) => (
                <Col className="gutter-row">
                  <img style={style} src={barter.image} alt="Barter" />
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
    </>
  );
}

export default ListBarterPage;
