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

  const onClickMain = (e) => {
    document.location.href = "/";
  };

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
            marginBotton: "5%",
            marginLeft:'-8%' }}>유제품</h1>
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
          <div>
          <h3
            style={{
              textAlign: "center",
              margin: "30px",
              marginRight:"10%"
            }}
          >
            현재 진열된 상품이 없습니다 :)
          </h3>
          <p
            onClick={onClickMain}
            style={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "15px",
              cursor: "pointer",
              marginRight:"8%",
            }}
          >
            One can do it! 메인 홈 이동
          </p>
        </div>
        <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListDailyPage
