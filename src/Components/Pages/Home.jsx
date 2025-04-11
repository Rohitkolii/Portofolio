// import Navbar from '../Navbar'
import Header from '../Header'
import ChatButton from '../ChatButton'
import SocialLinks from '../SocialLinks'
import Contact from '../Contact'
import Footer from '../Footer'
import Projects from '../Projects'
import Skills from '../Skills'

import pro1 from '../../Images/pt1.png'
import pro2 from '../../Images/pt2.png'
import pro3 from '../../Images/pt3.png'
import pro4 from '../../Images/pt4.png'
import TechStack from '../TechStack'
import About from '../About'


const Home = () => {

    const projectdata = [
      {
        img: pro1,
        title: 'Rentwheels',
        intro: 'RentWheels is a full-stack web-based vehicle rental application designed to simplify the process of booking and managing rental vehicles. Built using React (Vite), Node.js, Express.js, and MongoDB, it supports three user roles: User, Vendor, and Admin. Users can register, log in, book vehicles, and leave feedback. Vendors manage their own vehicle listings, while Admins oversee users, vendors, and vehicles. RentWheels offers a smooth, secure, and responsive experience for all types of users.',
        projectlink : 'https://rentwheelss.vercel.app/'
      },
        {
        img: pro2,
        title: 'Shopingo',
        intro: "Shopingo is a dynamic e-commerce web application built with ReactJS, offering a smooth and responsive shopping experience. It features user authentication, state management with React Context API, and integrates with a third-party API to display products. Designed with usability in mind, Shopingo provides a modern UI for browsing and managing products with ease.",
        projectlink : 'https://shopingo.vercel.app/'
      },
        {
        img: pro3,
        title: 'Appsobytes',
        intro: "Appsobytes is a business website offering professional software development services. Focused on delivering modern, scalable, and user-friendly solutions, it showcases expertise in web technologies and provides clients with reliable digital products tailored to their needs.",
        projectlink : 'https://appsobytes.com/'
      },
    ]
    

    return(
        <div className="Home-page">
            {/* <Navbar /> */}
            <Header />
            {/* <TechStack /> */}
            {/* <ChatButton /> */}
            <SocialLinks />
            {/* <div style={{width: "70%", height: 1, backgroundColor: "#dddbdb", margin: "auto"}}></div> */}
            <Skills />
            {/* <div style={{width: "60%", height: 1, backgroundColor: "#dddbdb", margin: "auto"}}></div> */}
            <Projects projectdata={projectdata} />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;