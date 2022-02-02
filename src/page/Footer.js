import React from 'react';
import footerImg from '../img/footer.png';
import '../css/Footer.css';
function Footer() {
  return (
    <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{ "padding":"10px 20px","zIndex":"100"}}>
        <img src={footerImg} className='footer__img pointer'/>
        <span className='copyright' style={{ "color":"#000000","fontSize":"14px","opacity":"0.75" }}>Copyright &copy; 2022 Lukman akbar, All Rights Reserved</span>
    </div>
  );
}

export default Footer;
