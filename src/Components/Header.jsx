import Navbar from './Navbar'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import headimg from '../Images/cut.jpeg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import resume from '../Images/ROHIT_Resume.pdf'

const Header = () => {

    // const mode = localStorage.getItem("mode")

    useEffect(()=>{
        AOS.init({duration: 2000})
      }, [])
    
    return(
        <section className= "Header-container">
            <Navbar />

            <div className="innercontent" data-aos="fade-down">


                <div className='header-content'>
                    <p className='domain'>Website Developer</p>
                    {/* <Link className='headerbtn btn' to='/projects'>Projects</Link> */}
                    <h1>Hey, i'm Rohit</h1>
                    {/* <p className='headpara'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p> */}
                    <p className='headpara'>Passionate Website Developer skilled in HTML, CSS, JavaScript, React, and Next.js. Focused on creating responsive, user-friendly websites. Familiar with Node.js, Express.js, and MongoDB for full-stack collaboration. Let’s build something amazing! 🚀</p>
                        <div className='head-btns'>
                        <a href={resume} download="Rohit Resume">Download Resume</a>
                        <Link to="/Projects">Projects</Link>
                    </div>
                </div>
                
                <div className='header-image'>
                    <div></div>
                    <img src={headimg} alt="its-me" />
                </div>

            </div>
        </section>
    )
}

export default Header;