import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

const onClickTerms = (e) => {
  document.location.href = ('/terms')
}



const onClickMain = (e) => {
  document.location.href = '/';
};
 
function Footer() {
  return (
    <>
      <section className="FooterContainer">
        <div className="FirstFooter">
          <footer>
            <h1 className="name" onClick={onClickMain} style={{cursor: 'pointer'}}>One can do it!</h1>
            <nav>
              <ul className="lists">
                <li style={{cursor:'pointer'}}>
                <Link to='/information'>이용약관</Link>
                </li>
                <li style={{cursor: 'pointer'}}>이용안내</li>
                <li>입점문의</li>
              </ul>
              <hr className="line" />
              <p className="email">onecandoit!@likelion.org</p>
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Footer;
