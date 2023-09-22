import '../styles/Navbar.css'
import { Link }  from "react-router-dom"
import { FiMenu }  from "react-icons/fi"
import { MdDarkMode , MdLightMode }  from "react-icons/md"
import { useState } from 'react'

import logo from '../Images/logo.webp'

const Navbar = () => {

    const [menu, setmenu] = useState(false);
    const [mode, setmode] = useState(localStorage.getItem("mode"));

    const SetDarkMode = () => {
        if(mode === false){
            localStorage.setItem("theme", "dark")
            localStorage.setItem("mode", true)
            setmode(true)
        } else{
            localStorage.setItem("theme", "light")
            localStorage.setItem("mode", false)
            setmode(false)
        }
    }

    return(
        <nav className={'Navbar-container'}>
            <div className='logo_container'>
                <Link to='/'>
                    <div className='logo_image-container'>
                        <img src={logo} alt="profile" />
                    </div>
                    <p>Rohit Koli</p>
                </Link>
            </div>

            {/* <div className='nav-menu_list res'> */}
            <div className={menu ? 'res_nav-menu_list' : 'nav-menu_list'}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    {
                        mode
                        ?
                        <li onClick={()=> SetDarkMode()}><Link><MdLightMode className='mode' /></Link></li>
                        :
                        <li onClick={()=> SetDarkMode()}><Link><MdDarkMode className='mode' /></Link></li>
                    }
                </ul>
            </div>

            <div onClick={()=> setmenu(!menu)} className='nav-menu'>
                <FiMenu className='nav-menu_icon' />
            </div>
        </nav>
    )
}

export default Navbar;