import React from 'react';
import "./footer.scss"
const Footer = () => {
  const handleYear = () => {
      const year = new Date()
      return year.getFullYear()
  }
  return (
    <footer className='footer'>
        <p className='legend'>CopyRight &#169; {handleYear()} by Uriel Benítez</p>
    </footer>
  );
};

export default Footer;
