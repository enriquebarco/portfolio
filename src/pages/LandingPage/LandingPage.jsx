import React, { useState, useEffect } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe';
import Footer from '../../components/PageFooter/PageFooter';
import LandingHero from '../../components/LandingHero/LandingHero';
import MyIntroduction from '../../components/MyIntroduction/MyIntroduction';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import ProjectsIntro from '../../components/ProjectsIntro/ProjectsIntro';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import Three from '../../components/Three/Three';

const LandingPage = () => {

  const [isThree, setIsThree] = useState(false);
  useEffect(() => {
    document.title = "Enrique Barco"
  },[]);

    return (
      <>
          {
            isThree ? (
              <Three setIsThree={setIsThree}/>
            ) : (
              <div className='landing-page'>
                  <PageHeader />
                  <LandingHero setIsThree={setIsThree}/>
                  <MyIntroduction />
                  <AboutMe />
                  <ProjectsIntro />
                  <ProjectsList />
                  <Footer />
              </div>
            )
          }
      </>
    )
  }

export default LandingPage