import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import Header from "../../../components/views/Header/Header";
import Footer from "../../../components/views/Footer/Footer";
import { Input, Button } from "antd";
import axios from "axios";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.Value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.Value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.Value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.Value);
  };

  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.Value);
  };

  const onPhoneHandler = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  }; //phone

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("you clicked submit!");

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    } else {
      alert("입력된 정보를 다시 확인해 주세요.");
    }

    let body = {
      email: Email,
      password: Password,
      confirmpassword: ConfirmPassword,
      name: Name,
      Address: Address,
      Phone: Phone,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    });
  };

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setEmail(response.data);
      });

    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setName(response.data);
      });

    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setPassword(response.data);
      });

    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setConfirmPassword(response.data);
      });

    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setAddress(response.data);
      });

    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/rest-auth/registration/`)
      .then((response) => {
        console.log(response);
        setPhone(response.data);
      });

    if (Phone.length === 10) {
      setPhone(Phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (Phone.length === 13) {
      setPhone(
        Phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [Phone]); //phone 하이픈 넣음

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div style={{ paddingTop: 300 }}>
            <br />
            <h1
              style={{
                paddingTop: 20,
                letterSpacing: 10,
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              We can do it!
            </h1>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Montserrat",
                fontSize: 25,
                letterSpacing: 5,
              }}
            >
              회원가입
            </h2>
            <br />
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 460,
                marginRight: 460,
              }}
              onSubmit={onSubmitHandler}
            >
              <label>이메일(아이디)</label>
              <Input
                id="email"
                placeholder="이메일을 입력하세요"
                type="text"
                value={Email}
                onChange={onEmailHandler}
                style={{
                  width: 330,
                  height: 30,
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />

              <label>이름</label>
              <Input
                id="name"
                placeholder="이름을 입력하세요"
                type="text"
                value={Name}
                onChange={onNameHandler}
                style={{
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />

              <label>비밀번호</label>
              <Input
                id="password"
                placeholder="비밀번호를 입력하세요"
                type="password"
                value={Password}
                onChange={onPasswordHandler}
                style={{
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />

              <label>비밀번호 확인</label>
              <Input
                id="Confirmpassword"
                placeholder="비밀번호를 한 번 더 입력하세요"
                type="password"
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
                style={{
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />
              <br />

              <label>주소</label>
              <Input
                id="Address"
                placeholder="주소를 입력하세요(상세 주소 포함)"
                type="text"
                value={Address}
                onChange={onAddressHandler}
                style={{
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />

              <label>전화번호(콜)</label>
              <Input
                id="Phone"
                placeholder="전화번호를 입력하세요"
                type="text"
                value={Phone}
                onChange={onPhoneHandler}
                style={{
                  borderRadius: 9,
                  marginBottom: 15,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              />
              <br />

              <label>
                <Button
                  style={{
                    borderRadius: 9,
                    marginRight: "1%",
                    borderColor: "#9fdb9f",
                    color: "#3d463d",
                  }}
                  onClick={() => window.open(`${process.env.REACT_APP_SERVER_ORIGIN}/registerterms`, "_blank")}
                >
                  개인정보 수집 및 활용 동의
                </Button>
                <input
                  style={{
                    width: "40px",
                    height: "13px",
                    marginTop: "3%",
                    marginBottom: "-2%",
                    borderColor: "#9fdb9f",
                  }}
                  type="checkbox"
                />
              </label>
              <br />

              <Button
                type="submit"
                onClick={onSubmitHandler}
                style={{
                  color: "#31572E",
                  borderRadius: 9,
                  borderColor: "#9fdb9f",
                  color: "#3d463d",
                }}
              >
                가입하기
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(RegisterPage);
