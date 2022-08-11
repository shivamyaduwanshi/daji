import Logo from 'assets/logo/logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
       <img src={Logo} alt="logo" />
       <div className="search-input">
          <input type="text" placeholder="Search"/>
       </div>
       <ul>
         <li>Home</li>
         <li>Portal</li>
         <li>Contact Us</li>
         <li>About Us</li>
         <li>Login</li>
         <li>Whatsapp</li>
       </ul>
    </div>
  )
}

export default Navbar