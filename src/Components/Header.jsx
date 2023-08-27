import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return(
        <section className="Header-container">
            <div>
                <h1>Hey, i'm Rohit koli</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web <br /> Applications that leads to the success of the overall product.</p>
                <Link className='btn headerbtn' to='/projects'>Projects</Link>
            </div>
        </section>
    )
}

export default Header;