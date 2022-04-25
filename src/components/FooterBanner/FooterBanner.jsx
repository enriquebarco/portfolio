import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterBanner.scss";

export default function FooterBanner() {
  return (
    <div className="footer-banner" >
        <h3 className="footer-banner__title">Let's collaborate</h3>
        <p className="footer-banner__text">Interested working together? Let's schedule a chat!</p>
        <Link className="footer-banner__link" to="/contact">Get in touch</Link>
    </div>
  )
}