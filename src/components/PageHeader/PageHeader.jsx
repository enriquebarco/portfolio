import React, { Component } from 'react';
import Logo from "../../assets/icons/bitmoji.png";
import "./PageHeader.scss";


export class PageHeader extends Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={Logo} alt="logo placeholder" />
        <div className="header__button">
          <div className="header__button-burger"></div>
        </div>
    </header>
    )
  }
}