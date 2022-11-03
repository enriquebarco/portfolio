import React from 'react';
import Music from "../../assets/icons/music.png";
import FullStack from "../../assets/icons/developer.png";
import Map from "../../assets/icons/location.png";
import javascriptLogo from "../../assets/icons/javascript.png";
import reactLogo from "../../assets/icons/react.png";
import sassLogo from "../../assets/icons/Sass.png";
import axiosLogo from "../../assets/icons/axios.svg";
import nodeLogo from "../../assets/icons/node.png";
import expressLogo from "../../assets/icons/express.png";
import digitalOceanLogo from "../../assets/icons/digital-ocean.png";
import knexLogo from "../../assets/icons/knex.png";
import mysqlLogo from "../../assets/icons/mysql.png";
import reduxLogo from "../../assets/icons/redux.png";
import reduxSagaLogo from "../../assets/icons/redux-saga.png";
import checkMark from "../../assets/icons/check-mark.png";
import colombiaFlag from "../../assets/icons/colombia.png";
import unitedStatesFlag from "../../assets/icons/united-states.png";
import unitedKingdomFlag from "../../assets/icons/united-kingdom.png";
import mozambiqueFlag from "../../assets/icons/mozambique.png";
import hongKongFlag from "../../assets/icons/hong-kong.png";
import chinaFlag from "../../assets/icons/china.png";
import surfIcon from "../../assets/icons/surf-board.png";
import kiteSurfIcon from "../../assets/icons/kite.png";
import tennisIcon from "../../assets/icons/tennis.png";
import poloIcon from "../../assets/icons/polo.png";
import scubaIcon from "../../assets/icons/scuba.png"
import pianoIcon from "../../assets/icons/grand-piano.png";
import guitarIcon from "../../assets/icons/guitar.png";
import handpanIcon from "../../assets/icons/hang.png";
import cajonIcon from "../../assets/icons/cajon.png";
import ukuleleIcon from "../../assets/icons/ukulele.png";


import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="about-me">
        <div className="about-me__card">
            <img src={FullStack} alt="" className="about-me__icon" />
            <h4 className="about-me__title">Full Stack Developer</h4>
            <p className="about-me__sub-text">I like to build products that solve a problem or have an impactful use case for my users</p>
            <h5 className="about-me__subtitle">My Tech Stack</h5>
            <div className="about-me__tech-stack-container">
                <img src={javascriptLogo} alt="JS logo" className="about-me__tech-stack-icon" />
                <img src={reactLogo} alt="react logo" className="about-me__tech-stack-icon" />
                <img src={reduxLogo} alt="redux logo" className="about-me__tech-stack-icon" />
                <img src={reduxSagaLogo} alt="redux-saga logo" className="about-me__tech-stack-icon" />
                <img src={sassLogo} alt="sass logo" className="about-me__tech-stack-icon" />
                <img src={axiosLogo} alt="axios logo" className="about-me__tech-stack-icon" />
                <img src={nodeLogo} alt="node logo" className="about-me__tech-stack-icon" />
                <img src={expressLogo} alt="express logo" className="about-me__tech-stack-icon" />
                <img src={digitalOceanLogo} alt="digital ocean logo" className="about-me__tech-stack-icon" />
                <img src={knexLogo} alt="knex logo" className="about-me__tech-stack-icon" />
                <img src={mysqlLogo} alt="mysql logo" className="about-me__tech-stack-icon" />
            </div>
            <h5 className="about-me__subtitle">Areas of Interest</h5>
            <div className="about-me__favorite-space-container">
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">Tech Startups</p>
                </div>
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">Web3 DeFi</p>
                </div>
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">FinTech</p>
                </div>
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">MusicTech</p>
                </div>
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">TravelTech</p>
                </div>
                <div className="about-me__favorite-space-wrapper">
                    <img src={checkMark} alt="checkmark icon" className="about-me__checkmark-icon" />
                    <p className="about-me__favorite-space-text">Healthcare</p>
                </div>
            </div>
        </div>
        <div className="about-me__card">
            <img src={Map} alt="" className="about-me__icon" />
            <h4 className="about-me__title">My Adventurous Side</h4>
            <p className="about-me__sub-text">I've lived in 5 continents and traveled over 25% of the world. When I am not building a new product or travelling, you can find me surfing, kitesurfing, and playing competitive tennis</p>
            <h5 className="about-me__subtitle">Countries I've Lived</h5>
            <div className="about-me__flags-container">
                <img src={colombiaFlag} alt="colombia flag" className="about-me__flag" />
                <img src={unitedStatesFlag} alt="united states flag" className="about-me__flag" />
                <img src={mozambiqueFlag} alt="mozambique flag" className="about-me__flag" />
                <img src={unitedKingdomFlag} alt="united kingdom flag" className="about-me__flag" />
                <img src={hongKongFlag} alt="hong kong flag" className="about-me__flag" />
                <img src={chinaFlag} alt="china flag" className="about-me__flag" />
            </div>
            <h5 className="about-me__subtitle">My Favorite Sports</h5>
            <div className="about-me__sports-container">
                <img src={surfIcon} alt="surf icon" className="about-me__sports-icon" />
                <img src={kiteSurfIcon} alt="kitesurf icon" className="about-me__sports-icon" />
                <img src={tennisIcon} alt="tennis icon" className="about-me__sports-icon" />
                <img src={poloIcon} alt="polo icon" className="about-me__sports-icon" />
                <img src={scubaIcon} alt="scuba icon" className="about-me__sports-icon" />
            </div>
        </div>
        <div className="about-me__card about-me__card--last">
            <img src={Music} alt="" className="about-me__icon" />
            <h4 className="about-me__title">My Musical Side</h4>
            <p className="about-me__sub-text">I enjoy collecting and playing instruments, I learned piano when I was five and self-taught myself the guitar at fifteen. The most recent addition to the collection was the handpan!</p>
            <h5 className="about-me__subtitle">My Instruments</h5>
            <div className="about-me__instruments-container">
                <img src={pianoIcon} alt="piano icon" className="about-me__instrument-icon" />
                <img src={guitarIcon} alt="guitar icon" className="about-me__instrument-icon" />
                <img src={handpanIcon} alt="handpan icon" className="about-me__instrument-icon" />
                <img src={cajonIcon} alt="cajon icon" className="about-me__instrument-icon" />
                <img src={ukuleleIcon} alt="ukulele icon" className="about-me__instrument-icon" />
            </div>
        </div>
    </section>
  )
}
