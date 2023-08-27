import './Navbar.css'
import { Link }  from "react-router-dom"
import { FiMenu }  from "react-icons/fi"

const Navbar = () => {
    return(
        <nav className='Navbar-container'>
            <div className='logo_container'>
                <Link to='/'>
                    <div className='logo_image-container'>
                        <img src='./Images/logo.webp' alt="profile" />
                    </div>
                    <p>Rohit Koli</p>
                </Link>
            </div>

            <div className='nav-menu_list'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>

            <div className='nav-menu'>
                <FiMenu className='nav-menu_icon' />
            </div>
        </nav>
    )
}

export default Navbar;