import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

 
function Footer() {
  return (
    <>
      <section className="FooterContainer">
        <div className="FirstFooter">
          <footer>
                <h1 className="name" style={{cursor: 'pointer'}}>
                <Link to='/'>One can do it!</Link>
                </h1>
            <nav>
              <ul className="lists">
                <li style={{cursor:'pointer'}}>
                <Link to='/information'>이용약관</Link>
                </li>
                <li style={{cursor: 'pointer'}}>
                <Link to='/terms'>이용안내</Link>
                </li>
                <li>
                <Link to='/join'>입점문의</Link>
                </li>
              </ul>
              <hr className="line" />
              <p className="email">onecandoit!@likelion.org   <br /> 하나가 모여 우리가 될 우리만의 삶을 누려 보세요!  |  One can do it, We can do it!  </p>
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Footer;
