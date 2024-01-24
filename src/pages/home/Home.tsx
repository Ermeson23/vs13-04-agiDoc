import Header from "../../components/header/Header"
import IntroSection from "../../components/homeComponents/introSection"
import AboutSection from "../../components/homeComponents/aboutSection"
import '../../App.css'
import './home.css'
import OurServices from "../../components/homeComponents/OurServices"

export default function Home(){

    return(
      <div className="home-content">
        <section className="header-section"> 
        <Header></Header>
        </section>
        <section className="main-section">
        <div className="intro-container">
          <IntroSection></IntroSection>
        </div>
        <div className="service-container">
          <div className="container">
          <OurServices></OurServices>
          </div>
        </div>
        <div className="about-container" id="about">
          <div className="container">
          <AboutSection></AboutSection>
          </div>
        </div>
        </section>
        
      </div>
    )
}