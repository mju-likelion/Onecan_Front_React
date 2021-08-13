import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";

function ListDailyPage() {
  const style = {
    width: "50px",
    height: "100px",
    borderRadius: "9px",
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ORIGIN}/product/`) //product api, 상품별 X > 수정 필요
      .then((response) => {
        console.log(response);
        setProduct(response.data.slice(0, 10));
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
              {product.map((p) => (
                <Col className="gutter-row">
                  <img style={style} 
                  src={`${process.env.REACT_APP_SERVER_ORIGIN}`+p.image.split("8000")[1]} alt="Barter" />
                  <p className="list_name">{`${process.env.REACT_APP_SERVER_ORIGIN}`+p.image.split("8000")[1]}</p>
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

export default ListDailyPage
