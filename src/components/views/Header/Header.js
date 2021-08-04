import React, { useState } from "react";
import axios from 'axios';
import { Menu, Dropdown } from 'antd';
import "./Header.css";

function Header(props) {

  const [ShowLogin, setShowLogin] = useState(false)

  const onClickLogin = (e) => {
    // 로그인 페이지로 이동
    document.location.href = "/login";
  };

  const onClickJoin = (e) => {
    document.location.href = "/register";
  };

  const onClickFQ = (e) => {
    document.location.href = "/f&q";
  };

  const onClickMain = (e) => {
    document.location.href = '/';
  };

  const onClickCart = (e) => {
    document.location.href = '/cart';
  };

  // 로그아웃
  const onClickLogout = () => {
    axios.get('/api/users/logout')
        .then(response => {
            if (response.data.success) {
              // '로그인'을 보여줘야함
                props.history.push("/login")
                setShowLogin(true)
            } else {
              // '로그아웃'을 보여줘야함
              alert('로그아웃에 실패하였습니다.')
              setShowLogin(false)
            }
        })
  }

  const menu = (
    <Menu>
      <Menu.Item>
          레시피
      </Menu.Item>
      <Menu.Item>
          물물교환
      </Menu.Item>
    </Menu>
  );
  
  return (
    <>
      {/* 헤더 */}
      <header className="HeaderContainer">
        <div className="auth">
          <ul>
            {ShowLogin ?
              <li onClick={onClickLogout} style={{cursor: 'pointer'}}>로그아웃</li>
              :
              <li onClick={onClickLogin} style={{cursor: 'pointer'}}>로그인</li>
            }
            <li onClick={onClickJoin}  style={{cursor: 'pointer'}}>회원가입</li>
            <li onClick={onClickFQ}  style={{cursor: 'pointer'}}>F&Q</li>
          </ul>
        </div>

        <div className="title_search">
          <div className="title" onClick={onClickMain} style={{cursor: 'pointer'}}>One can do it!</div>
          <div className="search">
            <input placeholder="검색어를 입력하세요"></input>
          </div>
        </div>
        <div className="category">
          <div className="category_list">
            <ul>
              <li>전체 카테고리</li>
              <li>Best</li>
              <li>Sale</li>
              <li onClick={onClickCart} style={{cursor: 'pointer'}}>장바구니</li>
              <li>
              <Dropdown overlay={menu}>
                <li>
                  커뮤니티
                </li>
              </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
