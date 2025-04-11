import '../styles/About.css'
import { Link } from "react-router-dom"

import mymain from '../Images/img.jpeg'
import mt from '../Images/mt.jpg'
import Skils from './Skills'
import Projects from './Projects'

import pro1 from '../Images/pt1.png'
import pro2 from '../Images/pt2.png'
import pro3 from '../Images/pt3.png'
import Footer from './Footer'

const About = () => {

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
        <section className="About-container">
            <div className="About-inner_Container">
                {/* <div className="About-row1">
                    <div>
                        <h1>Hey, i'm Rohit</h1>
                        <p>I'm a self-driven and passionate Frontend Developer with a strong command of HTML, CSS, JavaScript, ReactJS, and Next.js, dedicated to crafting modern, clean, and responsive web interfaces. I specialize in creating user-centric web experiences that are not only visually appealing but also functional, accessible, and performance-optimized.</p>
                        <br />
                        <p>I started my development journey with a deep curiosity for how websites work and have since evolved into a developer who enjoys bringing designs to life through interactive and meaningful digital products. I thrive in fast-paced environments, enjoy tackling challenges, and continuously seek to improve my skills by staying updated with the latest industry trends and best practices.</p>
                    </div>
                    
                    <div className='abt-img'>
                        <img src={mymain} alt="me" />
                    </div>
                </div> */}

                {/* <Skils /> */}

                <div className="About-row2">
                    {/* <Projects projectdata={projectdata} /> */}
                    
                    <div className='Drives'>
                        <div className='Drives_in'>
                            <h1>What <span style={{color:"#1b56fd"}}>Drives</span> Me!</h1>
                            <p>I genuinely enjoy the process of building—from the first line of code to the final deployment. Whether I’m collaborating with a team or working solo, my focus is always on delivering scalable, maintainable, and impactful web solutions. I believe in writing clean, readable code and designing interfaces that users love to interact with.</p>
                        </div>
                    </div>

                    <div className='lookingfor'>
                        <div>
                            <h1 className='heading'>🎯What I’m Looking For:</h1>
                            <p className='para'>I’m actively seeking opportunities where I can grow as a developer, contribute to meaningful projects, and work with teams that value creativity, collaboration, and code quality. Whether it’s a freelance project, internship, or a full-time role—I’m ready to make an impact.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </section>
    )
}

export default About;