import React from 'react';
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="about-me">
        <div className="about-me__card">
            <img src="" alt="" className="about-me__icon" />
            <h4 className="about-me__title">Full Stack Developer</h4>
            <p className="about-me__sub-text">I like to build products that solve a problem or have an impactful use case for my users</p>
            <h5 className="about-me__subtitle">My Tech Stack</h5>
            <div className="about-me__tech-stack-container">
                <img src="" alt="" className="about-me__tech-stack-icon" />
                <img src="" alt="" className="about-me__tech-stack-icon" />
                <img src="" alt="" className="about-me__tech-stack-icon" />
                <img src="" alt="" className="about-me__tech-stack-icon" />
                <img src="" alt="" className="about-me__tech-stack-icon" />
            </div>
            <h5 className="about-me__subtitle">Favorite Spaces</h5>
                <p className="about-me__text">High Growth Tech Startups, Subscription & SaaS Business Models, E-Commerce, FinTech, Music, Travel Tech, Healthcare</p> 
        </div>
        <div className="about-me__card">
            <img src="" alt="" className="about-me__icon" />
            <h4 className="about-me__title">My Adventurous Side</h4>
            <p className="about-me__sub-text">I have lived in 5 different continents and traveled over 25% of the world. When I am not building a new product, you can find me surfing, kitesurfing, or playing competitive tennis</p>
            <h5 className="about-me__subtitle">Countries I have Lived</h5>
            <div className="about-me__flags-container">
                <img src="" alt="" className="about-me__flag" />
                <img src="" alt="" className="about-me__flag" />
                <img src="" alt="" className="about-me__flag" />
                <img src="" alt="" className="about-me__flag" />
                <img src="" alt="" className="about-me__flag" />
            </div>
            <h5 className="about-me__subtitle">Favorite Sports</h5>
            <div className="about-me__sports-container">
                <img src="" alt="" className="about-me__sports-icon" />
                <img src="" alt="" className="about-me__sports-icon" />
                <img src="" alt="" className="about-me__sports-icon" />
            </div>
        </div>
        <div className="about-me__card">
            <img src="" alt="" className="about-me__icon" />
            <h4 className="about-me__title">My Musical Side</h4>
            <p className="about-me__sub-text">I enjoy collecting and playing instruments, I learned piano when I was five and self-taught myself the guitar at fifteen. The most recent addition to the collection was the handpan!</p>
            <h5 className="about-me__subtitle">My Instruments</h5>
            <div className="about-me__flags-container">
                <img src="" alt="" className="about-me__Instrument" />
                <img src="" alt="" className="about-me__Instrument" />
                <img src="" alt="" className="about-me__Instrument" />
                <img src="" alt="" className="about-me__Instrument" />
                <img src="" alt="" className="about-me__Instrument" />
            </div>
            <h5 className="about-me__subtitle">Favorite Sports</h5>
            <div className="about-me__sports-container">
                <img src="" alt="" className="about-me__sports-icon" />
                <img src="" alt="" className="about-me__sports-icon" />
                <img src="" alt="" className="about-me__sports-icon" />
            </div>
        </div>
    </section>
  )
}
