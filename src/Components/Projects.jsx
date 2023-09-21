import React from 'react'
import Project from './Project'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const Projects = ({projectdata}) => {

  // const mode = localStorage.getItem("mode")

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
          <Link to='/Projects' className='black-btn'>See more projects</Link>
        </div>
    </div>
  )
}

export default Projects