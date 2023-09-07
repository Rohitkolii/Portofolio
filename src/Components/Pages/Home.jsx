// import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Projects from '../Projects'

const Home = () => {
    return(
        <div className="Home-page">
            {/* <Navbar /> */}
            <Header />
            <ChatButton />
            <SocialLinks />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;