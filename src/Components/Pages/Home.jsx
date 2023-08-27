import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import About from '../About'

const Home = () => {
    return(
        <div className="Home-page">
            <Navbar />
            <Header />
            <ChatButton />
            <SocialLinks />
            <About />
        </div>
    )
}

export default Home;