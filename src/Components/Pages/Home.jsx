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
        intro: 'I built a dynamic food ordering site using HTML, CSS, JavaScript, and React Context API. Features include secure login/logout and seamless API data handling, highlighting my web dev skills.',
        projectlink : 'https://myfoodo.vercel.app/'
      },
        {
        img: pro2,
        title: 'Shopingo',
        intro: 'I spearheaded a basic e-commerce site using HTML, CSS, JavaScript, and React Context API. Efficient state management enhances user experience, demonstrating core web tech skills.',
        projectlink : 'https://shopingo.vercel.app/'
      },
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