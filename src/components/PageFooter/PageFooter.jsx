import React from 'react'
import memojiIcon from "../../assets/icons/memoji-humble.png";
import reactLogo from "../../assets/icons/react.png";
import sassLogo from "../../assets/icons/Sass.png";
import "./PageFooter.scss";

export default function 
() {
  return (
    <footer className="footer">
        <img src={memojiIcon} alt="" className="footer__icon" />
        <p className="footer__text">Living, learning, & leveling up one day at a time</p>
        <p className="footer__subtext">Created by yours truly with  </p>
        <div className="footer__wrapper">
            <img className="footer__tech-icon" src={reactLogo} alt="react logo" img />
            <img className="footer__tech-icon" src={sassLogo} alt="sass logo" img />
        </div>
    </footer>
  )
}
