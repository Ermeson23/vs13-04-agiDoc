import Header from "../../components/header/Header"
import IntroSection from "../../components/homeComponents/introSection"
import AboutSection from "../../components/homeComponents/aboutSection"
import '../../App.css'
import './home.css'

export default function Home(){

    return(
      <div className="page-render home-content">
        <section className="header-section"> 
        <Header></Header>
        </section>
        <section className="main-section">
        <div className="intro-container container">
          <IntroSection></IntroSection>

        </div>
        <div className="about-container container">
          <AboutSection></AboutSection>
        </div>
        </section>
        
      </div>
    )
}