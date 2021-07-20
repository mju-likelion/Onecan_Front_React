import React from 'react';
import './Footer.css';

function Footer(){
  return(
    <>
      <section className="FooterContainer">
      <div className="FirstFooter">
        <footer>
          <h1 className="name">One can do it!</h1>
          <nav>
            <ul className="lists">
              <li>이용약관</li>
              <li>이용안내</li>
              <li>입점문의</li>
            </ul>
            <hr className="line" />
            <p className="email">E-mail</p>
          </nav>
        </footer>
      </div>
    </section>
  </>
  );
}

export default Footer;