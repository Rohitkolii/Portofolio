import React from 'react'
import Navbar from '../Navbar'
import Projects from '../Projects'
import Project from '../Project'

import pro1 from '../../Images/shopingo.png'
import pro2 from '../../Images/shopingo.png'

const ProjectsPage = () => {

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
  },
  {
    img: pro1,
    title: 'Foodo',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  },
    {
    img: pro2,
    title: 'Shopingo',
    intro: 'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
  },
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

  return (
    <>
      <Navbar />
      <div>
        <h1 style={{textAlign: "center", textTransform: "uppercase", marginTop: 30}}>Projects</h1>
        {
          projectdata.map((elm, i)=> <Project key={i} item={elm} />)
        }
      </div>
    </>
  )
}

export default ProjectsPage