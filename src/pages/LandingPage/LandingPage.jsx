import React, { Component } from 'react'
import LandingHero from '../../components/LandingHero/LandingHero';
import MyIntroduction from '../../components/MyIntroduction/MyIntroduction';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
          <PageHeader />
          <LandingHero />
          <MyIntroduction />
          <ProjectsList />
      </div>
    )
  }
}

export default LandingPage