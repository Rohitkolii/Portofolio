import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'

const Home = () => {
    return(
        <div className="Home-page">
            <Navbar />
            <Header />
            <ChatButton />
            <SocialLinks />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;