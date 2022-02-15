import React, { Component } from 'react'
import LandingHero from '../../components/LandingHero/LandingHero';
import { PageHeader } from '../../components/PageHeader/PageHeader';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
          <PageHeader />
          <LandingHero />
      </div>
    )
  }
}

export default LandingPage