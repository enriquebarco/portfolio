import React, { Component } from 'react';
import Logo from "../../assets/icons/memoji.jpeg";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";


import "./PageHeader.scss";


export class PageHeader extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    const change = !this.state.isOpen;
    this.setState({ isOpen: change })
}

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={Logo} alt="logo placeholder" />
          <div className="header__button-area">
            <label className="header__button-label" htmlFor="check" >
              <input className="header__input" type="checkbox" id="check"  onClick={this.handleClick}/> 
              <span className='header__button-bar header__button-bar--1'></span>
              <span className='header__button-bar header__button-bar--2'></span>
              <span className='header__button-bar header__button-bar--3'></span>
            </label>
          </div>
        </div>
        {this.state.isOpen ? 
        <div className="header__hidden-CTA">
          <div className="header__hidden-container">
            <a target="_blank" href="https://github.com/enriquebarco" className="header__media-links">
              <img src={Github} alt="github icon" className="header__media-icons" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/enriquebarco/" className="header__media-links">
              <img src={Linkedin} alt="linkedin icon" className="header__media-icons" />
            </a>
            <a target="_blank" href="https://www.instagram.com/kikebarco/" className="header__media-links">
              <img src={Instagram} alt="instagram icon" className="header__media-icons" />
            </a>
          </div>
          <button className="header__button">Get in Touch</button>
        </div> : ""}
    </header>
    )
  }
}