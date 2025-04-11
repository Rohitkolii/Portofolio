import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const Projects = ({projectdata}) => {

  // const mode = localStorage.getItem("mode")

  

  return (
    <div className='Projects_main-con'>
      <div className='Projects_main-coninn'>
          <div className='project-head'>
            <h1 className='heading'>Projects that i've done</h1>
            <p className='para'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
          </div>
          <div className='project_grid'>
            {
              projectdata && projectdata.map((item, i)=> <ProjectCard key={i} item={item} />)
            }
          </div>
          <div style={{textAlign: 'center', margin: '80px 0 30px 0'}}>
            <Link to='/Projects' className='black-btn'>See more projects</Link>
          </div>
          </div>
    </div>
  )
}

export default Projects