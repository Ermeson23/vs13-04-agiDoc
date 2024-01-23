import logo from '../../assets/agidoclogo.png'
import './Header.css';
import NavBar from '../navBar/NavBar';

export default function Header(){
    return(
    <div className='custom-header'>
        <div className='header-container'>
        <img src={logo} className='logo-agidoc'></img>
        <div className='nav-container'>
           <NavBar></NavBar>
        </div>
        </div>
    </div>
    )
        

    
}