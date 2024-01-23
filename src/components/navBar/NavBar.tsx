import MenuItem from "../menuItem/MenuItem";

export default function NavBar() {
    return (
      <section>
        <MenuItem to='/'>Home</MenuItem>
        <MenuItem to='/login'>Login</MenuItem>
        <MenuItem to='/register'>Registro</MenuItem>
      </section>
    );
  }