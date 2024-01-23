import logo from '../../assets/agidoclogo.png'
import './header.css';
import NavBar from '../navBar/NavBar';



export default function Header(){
    return(
    <div className='custom-header'>
        <img src={logo} className='logo-agidoc'></img>
        <div className='nav-container'>
           <NavBar></NavBar>
        </div>
    </div>
    )
        

    
}