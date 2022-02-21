import React from 'react';
import Image from "../../assets/images/kitesurf2.jpeg";
import Decoration from "../../assets/images/desksvg.svg";
import "./LandingHero.scss";

export default function LandingHero() {
  return (
    <section className='landing-hero'>
        <h1 className="landing-hero__title">Entrepreneur, Full-Stack Developer, & Adventurer</h1>
        <h2 className="landing-hero__text"> I bring products to life, from zero to one. I don't stop until an idea becomes reality, and I love what I do</h2>
        <img className="landing-hero__image" src={Image} alt="Enrique Barco Kite Surf" />
        <img src={Decoration} alt="decoration icon" className="landing-hero__decoration-image" />
    </section>
  )
}
