import Navbar from './Navbar'
import '../styles/Header.css'
const Header = () => {
    return(
        <section className="Header-container">
            <Navbar />
            {/* Header Background */}
            {/* <div className='glass'></div>
            <video autoPlay muted loop playsInline>
                <source src="images/bgtech.mp4" typeof='video/mp4' />
            </video> */}

            <div className="innercontent">


                <div className='header-image'>
                    <img src="images/me.png" alt="its me" />
                </div>

                <div className='header-content'>
                    {/* <Link className='headerbtn btn' to='/projects'>Projects</Link> */}
                    <h1>Hey, i'm Rohit koli</h1>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                </div>
            </div>
        </section>
    )
}

export default Header;