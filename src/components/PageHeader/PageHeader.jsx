import React, { Component } from 'react';
import Logo from "../../assets/icons/memoji.jpeg";
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
              <input type="checkbox" id="check"  onClick={this.handleClick}/> 
              <span className='header__button-bar header__button-bar--1'></span>
              <span className='header__button-bar header__button-bar--2'></span>
              <span className='header__button-bar header__button-bar--3'></span>
            </label>
          </div>
        </div>
        {this.state.isOpen ? <button>Get in Touch</button> : ""}
    </header>
    )
  }
}