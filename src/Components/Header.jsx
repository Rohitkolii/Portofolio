import Navbar from './Navbar'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
const Header = () => {

    // const mode = localStorage.getItem("mode")

    return(
        <section className= "Header-container">
            <Navbar />
            {/* Header Background */}
            {/* <div className='glass'></div>
            <video autoPlay muted loop playsInline>
                <source src="images/bgtech.mp4" typeof='video/mp4' />
            </video> */}

            <div className="innercontent">

                <div className='header-image'>
                    <img src="../images/imgg.png" alt="its-me" />
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