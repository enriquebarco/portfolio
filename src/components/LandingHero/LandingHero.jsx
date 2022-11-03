import React from 'react';
import { Link } from "react-router-dom";
import Image from "../../assets/images/kitesurf2.jpeg";
import Decoration from "../../assets/images/desk.webp";
import 'animate.css';
import "./LandingHero.scss";

export default function LandingHero() {
  return (
    <section className='landing-hero animate__animated animate__fadeInUpBig'>
        <h1 className="landing-hero__title">Entrepreneur, Full-Stack Developer & Adventurer</h1>
        <h2 className="landing-hero__text "> I bring products to life, from zero to one. I don't stop until an idea becomes reality, and I love what I do</h2>
        <Link className="landing-hero__link" to="/contact">Get in touch</Link>
        <img className="landing-hero__image " src={Image} alt="Enrique Barco Kite Surf" />
        <img src={Decoration} alt="decoration icon" className="landing-hero__decoration-image" />
    </section>
  )
}
