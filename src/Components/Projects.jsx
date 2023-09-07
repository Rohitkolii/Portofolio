import React from 'react'
import Project from './Project'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const Projects = () => {

  const projectdata = [
    {
    img: '../images/foodo.png',
    title: 'Foodo',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  },
    {
    img: '../images/shopingo.png',
    title: 'Shopingo',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  },
  //   {
  //   img: 'images/foodo.png',
  //   title: 'Foodo',
  //   intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  // },
  //   {
  //   img: 'images/shopingo.png',
  //   title: 'Shopingo',
  //   intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  // },
]

  return (
    <div className='Projects_main-con'>
        <div className='project-head'>
          <h1>Projects</h1>
          <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>
        <div>
          {
            projectdata.map((item, i)=> <Project key={i} item={item} />)
          }
        </div>
        <div style={{textAlign: 'center', margin: '100px 0 50px 0'}}>
          <Link className='btn'>See more projects</Link>
        </div>
    </div>
  )
}

export default Projects