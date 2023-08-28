import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import About from '../About'
import Contact from '../Contact'

const Home = () => {
    return(
        <div className="Home-page">
            <Navbar />
            <Header />
            <ChatButton />
            <SocialLinks />
            <About />
            <Contact />
        </div>
    )
}

export default Home;