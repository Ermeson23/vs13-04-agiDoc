import MenuItem from "../menuItem/MenuItem";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <section className="nav-sec">
                <MenuItem to='/'>Home</MenuItem>
                <MenuItem to='/login'>Login</MenuItem>
                <MenuItem to='/register'>Registro</MenuItem>
            </section>
        </>
    )
}