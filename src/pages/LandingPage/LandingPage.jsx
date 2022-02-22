import React, { Component } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe';
import LandingHero from '../../components/LandingHero/LandingHero';
import MyIntroduction from '../../components/MyIntroduction/MyIntroduction';
import { PageHeader } from '../../components/PageHeader/PageHeader';
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
          <ProjectsList />
      </div>
    )
  }
}

export default LandingPage