import React, { useState } from 'react';
import compLogo from "../../assets/icons/memoji.jpeg";
import waveLogo from "../../assets/icons/memoji-wave.png";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import 'animate.css'


import "./PageHeader.scss";
import { Link } from 'react-router-dom';


function PageHeader({ setIsDalle}) {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="header">
        <div className="header__container">
          {isOpen ? 
            <Link to="/dalle">
              <img className="header__logo animate__animated animate__fadeIn" src={waveLogo} alt="enrique barco memoji computer" /> 
            </Link>
            : 
            <Link to="/">
              <img src={compLogo} alt="enrique barco memoji wave" className="header__logo" /> 
            </Link>}
          <div className={"header__button-area"}>
            <label className="header__button-label" htmlFor="check" >
              <input className="header__input" type="checkbox" id="check"  onClick={() => setIsOpen(!isOpen)}/> 
              <span className='header__button-bar header__button-bar--1'></span>
              <span className='header__button-bar header__button-bar--2'></span>
              <span className='header__button-bar header__button-bar--3'></span>
            </label>
          </div>
        </div>
        {isOpen ? 
        <div className="header__hidden-CTA animate__animated animate__fadeIn">
          <div className="header__hidden-container">
            <a rel="noreferrer" target="_blank" href="https://github.com/enriquebarco" className="header__media-links">
              <img src={Github} alt="github icon" className="header__media-icons" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/enriquebarco/" className="header__media-links">
              <img src={Linkedin} alt="linkedin icon" className="header__media-icons" />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kikebarco/" className="header__media-links">
              <img src={Instagram} alt="instagram icon" className="header__media-icons" />
            </a>
          </div>
          <Link className="header__button-link" to="/contact">
            <button className="header__button">Get in Touch</button>
          </Link>
        </div> : ""}
    </header>
    )
}

export default PageHeader;