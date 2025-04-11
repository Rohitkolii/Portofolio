import Navbar from './Navbar'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import headimg from '../Images/imgg.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Header = () => {

    // const mode = localStorage.getItem("mode")

    useEffect(()=>{
        AOS.init({duration: 2000})
      }, [])
    
    return(
        <section className= "Header-container">
            <Navbar />

            <div className="innercontent" data-aos="fade-down">

                <div className='header-image'>
                    <img src={headimg} alt="its-me" />
                </div>

                <div className='header-content'>
                    {/* <Link className='headerbtn btn' to='/projects'>Projects</Link> */}
                    <h1>Hey, i'm Rohit koli</h1>
                    <p className='domain'>Frontend Developer</p>
                    <p className='headpara'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                    <div className='head-btns'>
                        <Link to="/contact">Contact</Link>
                        <Link to="/Projects">See Projects</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;