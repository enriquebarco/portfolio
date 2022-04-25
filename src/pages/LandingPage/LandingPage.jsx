import React, { Component } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe';
import Footer from '../../components/PageFooter/PageFooter';
import LandingHero from '../../components/LandingHero/LandingHero';
import MyIntroduction from '../../components/MyIntroduction/MyIntroduction';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import ProjectsIntro from '../../components/ProjectsIntro/ProjectsIntro';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

export class LandingPage extends Component {

componentDidMount() {
  document.title = "Enrique Barco"
}

  render() {
    return (
      <div className='landing-page'>
          <PageHeader />
          <LandingHero />
          <MyIntroduction />
          <AboutMe />
          <ProjectsIntro />
          <ProjectsList />
          <Footer />
      </div>
    )
  }
}

export default LandingPage