import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import "./Header.css";

function Header(props) {

  const [ShowLogin, setShowLogin] = useState(false)
  const [ShowRegister, setShowRegister] = useState(false)

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
      <Link to='/listrecipe' style={{}}>레시피</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/listbarter' style={{color: 'black'}}>물물교환</Link>
      </Menu.Item>
    </Menu>
  );

  const categorymenu = (
    <Menu>
        <Menu.Item>
        <Link to='/listobj/:listId'>Best 상품</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listnew'>New 상품</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listvegetable'>채소ㆍ과일</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listseafood'>수산물</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listdmeat'>정육ㆍ계란</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listdrink'>생수ㆍ음료</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listmilk'>유제품</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/listdaily'>생필품ㆍ주방용품</Link>
        </Menu.Item>
        
    </Menu>
  )
  
  return (
    <>
      {/* 헤더 */}
      <header className="HeaderContainer">
        <div style={{width:'80%', marginLeft:'180px'}}>
        <div className="auth">
          <ul>
            {ShowLogin ?
              <li onClick={onClickLogout} style={{cursor: 'pointer', color: 'black'}}>로그아웃</li>
              :
              <li style={{cursor: 'pointer'}}>
                <Link to='/login' style={{color: 'black'}}>로그인</Link>
              </li>
            }
            {ShowRegister ?
              <li style={{cursor: 'pointer'}}><Link to='/mypage' style={{color: 'black'}}>마이페이지</Link></li>
              :
               <li> <Link to='/register' style={{color: 'black'}}>회원가입</Link>
              </li>
            }
              <li style={{cursor: 'pointer'}}>
                <Link to='/faq' style={{color: 'black'}}>FAQ</Link>
              </li>
          </ul>
        </div>

        <div className="title_search">
          <div className="title" style={{cursor: 'pointer'}}>
            <Link to='/' style={{color: 'black', fontSize: '45px'}}>One can do it!</Link>
          </div>
          <div className="search">
            <input placeholder="검색어를 입력하세요!"></input>
          </div>
        </div>
        <div className="category">
          <br />
          <div className="category_list">
            <ul>
              <Dropdown overlay={categorymenu} style={{cursor: 'pointer'}}>
                <li style={{cursor: 'pointer'}}>
                  전체 카테고리
                </li>
              </Dropdown>
              <li style={{cursor: 'pointer'}}>
                <Link to='/listobj/:listId'>BEST</Link>
              </li>
              <li style={{cursor: 'pointer'}}>
                <Link to='/listobj/:listId'>신상품</Link>
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
