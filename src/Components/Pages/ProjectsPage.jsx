import React from 'react'
import Navbar from '../Navbar'
import ChatButton from '../ChatButton'
import Project from '../Project'

import pro1 from '../../Images/foodo.png'
import pro2 from '../../Images/shopingo.png'
import pro3 from '../../Images/todo.png'
import pro4 from '../../Images/keep.png'
import pro5 from '../../Images/temp.png'
import pro6 from '../../Images/weather.png'

const ProjectsPage = () => {

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
  {
    img: pro3,
    title: 'Todo List',
    intro: `Introducing our ToDo web app, a powerful tool designed to simplify and enhance your task management experience. In today's fast-paced world, staying organized and productive is essential, and our app is here to help you achieve just that.`,
    projectlink : 'https://rohittodolist.vercel.app/'
  },
    {
    img: pro4,
    title: 'Keep Clone',
    intro: 'Introducing our Google Keep clone—an intuitive note-taking app that mirrors the simplicity and functionality you love. Stay organized and productive effortlessly.',
    projectlink : 'https://keepclonee.vercel.app/'
  },
  {
    img: pro5,
    title: 'Temprature Converter',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
    projectlink : 'https://tempratureconnvertor.vercel.app/'
  },
    {
    img: pro6,
    title: 'Weather Forecast',
    intro: 'Welcome to our Weather Web App – your go-to source for up-to-date weather forecasts and information. Get ready to stay informed and make weather-related decisions with ease.',
    projectlink : 'https://weatherforcastapp.vercel.app/'
  }
]

  return (
    <>
      <Navbar />
      <div>
        <h1 className='mainproject-head' style={{textAlign: "center", textTransform: "uppercase", marginTop: 30}}>Projects</h1>
        {
          projectdata.map((elm, i)=> <Project key={i} item={elm} />)
        }
        <br />
        <p style={{textAlign: 'center', marginBottom : '50px', fontWeight: 500, fontSize :18}}>More Projects will be add soon!</p>
      </div>
      <ChatButton />
    </>
  )
}

export default ProjectsPage