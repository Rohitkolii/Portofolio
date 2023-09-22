// import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import Contact from '../Contact'
import Footer from '../Footer'
import Projects from '../Projects'
import Skills from '../Skills'

import pro1 from '../../Images/foodo.png'
import pro2 from '../../Images/shopingo.png'


const Home = () => {

    const projectdata = [
        {
        img: pro1,
        title: 'Foodo',
        intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
      },
        {
        img: pro2,
        title: 'Shopingo',
        intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
      }
    ]
    

    return(
        <div className="Home-page">
            {/* <Navbar /> */}
            <Header />
            <ChatButton />
            <SocialLinks />
            <div style={{width: "70%", height: 1, backgroundColor: "#dddbdb", margin: "auto"}}></div>
            <Skills />
            <div style={{width: "60%", height: 1, backgroundColor: "#dddbdb", margin: "auto"}}></div>
            <Projects projectdata={projectdata} />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;