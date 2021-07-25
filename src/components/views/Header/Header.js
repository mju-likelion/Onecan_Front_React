import React from "react";
import "./Header.css";

function Header() {
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
  return (
    <>
      {/* 헤더 */}
      <header className="HeaderContainer">
        <div className="auth">
          <ul>
            <li onClick={onClickLogin}>로그인</li>
            <li onClick={onClickJoin}>회원가입</li>
            <li onClick={onClickFQ}>F&Q</li>
          </ul>
        </div>

        <div className="title_search">
          <div className="title">One can do it!</div>
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
              <li>커뮤니티</li>
              <li>장바구니</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
