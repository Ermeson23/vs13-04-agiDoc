import Header from "../../components/header/Header"
import IntroSection from "../../components/homeComponents/introSection"
import '../../App.css'
import './home.css'

export default function Home(){

    return(
      <div className="page-render home-content">
        <section className="header-section"> 
        <Header></Header>
        </section>
        <section className="main-section">
        <div className="intro-container">
          <IntroSection></IntroSection>

        </div>
        </section>
        
      </div>
    )
}