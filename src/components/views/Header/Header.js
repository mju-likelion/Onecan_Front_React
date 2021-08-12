import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import "./Header.css";

function Header(props) {

  const [ShowLogin, setShowLogin] = useState(false)

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
        <div style={{width:'80%', marginLeft:'180px'}}>
        <div className="auth">
          <ul>
            {ShowLogin ?
              <li onClick={onClickLogout} style={{cursor: 'pointer'}}>로그아웃</li>
              :
              <li style={{cursor: 'pointer'}}>
                <Link to='/login' style={{color: 'black'}}>로그인</Link>
              </li>
            }
            <li style={{cursor: 'pointer'}}>
              <Link to='/register' style={{color: 'black'}}>회원가입</Link>
            </li>
            <li style={{cursor: 'pointer'}}>
              <Link to='/f&q' style={{color: 'black'}}>F&Q</Link>
            </li>
          </ul>
        </div>

        <div className="title_search">
          <div className="title" style={{cursor: 'pointer'}}>
            <Link to='/' style={{color: 'black'}}>One can do it!</Link>
          </div>
          <div className="search">
            <input placeholder="검색어를 입력하세요"></input>
          </div>
        </div>
        <div className="category">
          <div className="category_list">
            <ul>
              <li>전체 카테고리</li>
              <li style={{cursor: 'pointer'}}>
                <Link to='listobjbest'>BEST</Link>
              </li>
              <li style={{cursor: 'pointer'}}>
                <Link to='listobjsale'>SALE</Link>
              </li>
              <li style={{cursor: 'pointer'}}>
                <Link to='/cart'>장바구니</Link>
              </li>
              <li>
              <Dropdown overlay={menu} style={{cursor: 'pointer'}}>
                <li style={{cursor: 'pointer'}}>
                  커뮤니티
                </li>
              </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;
