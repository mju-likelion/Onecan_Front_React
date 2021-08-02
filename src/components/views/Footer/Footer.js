import React from "react";
import "./Footer.css";

const onClickTerms = (e) => {
  document.location.href = ('/terms')
}

const onClickInfo = (e) => {
  document.location.href = ('/information')
}
 
function Footer() {
  return (
    <>
      <section className="FooterContainer">
        <div className="FirstFooter">
          <footer>
            <h1 className="name">One can do it!</h1>
            <nav>
              <ul className="lists">
                <li onClick={onClickTerms} style={{cursor:'pointer'}}>이용약관</li>
                <li onClick={onClickInfo} style={{cursor: 'pointer'}}>이용안내</li>
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
