import React from 'react';
import './Header.css';

function Header(){
  return(
    <>
      {/* 헤더 */}
      <header className="HeaderContainer">
      <div className="auth">
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>F&Q</li>
        </ul>
      </div>

      <div className="title_search">
        <div className="title">
          One can do it!
        </div>
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
            <li>장바구니</li>
          </ul>
        </div>
      </div>
    </header>
  </>
  );
}

export default Header;