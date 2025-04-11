import React from 'react'
import Navbar from '../Navbar'
import ChatButton from '../ChatButton'

import pro1 from '../../Images/pt1.png'
import pro2 from '../../Images/pt2.png'
import pro3 from '../../Images/pt3.png'
import pro4 from '../../Images/pt4.png'
import pro5 from '../../Images/todo.png'
import pro6 from '../../Images/keep.png'
import pro7 from '../../Images/temp.png'
import pro8 from '../../Images/weather.png'

import ProjectCard from '../ProjectCard'

import "../../styles/Project.css"
import Footer from '../Footer'

const ProjectsPage = () => {

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
    intro: 'I spearheaded a basic e-commerce site using HTML, CSS, JavaScript, and React Context API. Efficient state management enhances user experience, demonstrating core web tech skills.',
    projectlink : 'https://shopingo.vercel.app/'
  },
  {
    img: pro3,
    title: 'Appsobytes',
    intro: "Appsobytes is a business website offering professional software development services. Focused on delivering modern, scalable, and user-friendly solutions, it showcases expertise in web technologies and provides clients with reliable digital products tailored to their needs.",
    projectlink : 'https://www.appsobytes.com/'
  },
  {
    img: pro4,
    title: 'Foodo',
    intro: 'I built a dynamic food ordering site using HTML, CSS, JavaScript, and React Context API. Features include secure login/logout and seamless API data handling, highlighting my web dev skills.',
    projectlink : 'https://myfoodo.vercel.app'
  },
  {
    img: pro5,
    title: 'Todo List',
    intro: `Introducing our ToDo web app, a powerful tool designed to simplify and enhance your task management experience. In today's fast-paced world, staying organized and productive is essential, and our app is here to help you achieve just that.`,
    projectlink : 'https://rohittodolist.vercel.app/'
  },
    {
    img: pro6,
    title: 'Keep Clone',
    intro: 'Introducing our Google Keep clone—an intuitive note-taking app that mirrors the simplicity and functionality you love. Stay organized and productive effortlessly.',
    projectlink : 'https://keepclonee.vercel.app/'
  },
  {
    img: pro7,
    title: 'Temprature Converter',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
    projectlink : 'https://tempratureconnvertor.vercel.app/'
  },
    {
    img: pro8,
    title: 'Weather Forecast',
    intro: 'Welcome to our Weather Web App – your go-to source for up-to-date weather forecasts and information. Get ready to stay informed and make weather-related decisions with ease.',
    projectlink : 'https://weatherforcastapp.vercel.app/'
  }
]

  return (
    <>
      <Navbar />
    <div className='main_Project'>
        <h1 className='mainproject-head heading' style={{textTransform: "capitalize", marginTop: 30, fontSize: 25}}>Projects that showcase my skills</h1>
      <div className='main_Project_grid'>
        {
          projectdata.map((elm, i)=> <ProjectCard key={i} item={elm} />)
        }
        <br />
      </div>
        <p className='para' style={{textAlign: 'center', margin : '50px', fontWeight: 500, fontSize :18}}>More Projects will be add soon!</p>
      </div>
      <Footer />
      {/* <ChatButton /> */}
    </>
  )
}

export default ProjectsPage