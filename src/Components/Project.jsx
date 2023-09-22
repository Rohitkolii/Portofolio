import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Project.css'

const Project = ({item}) => {

  // const mode = localStorage.getItem("mode")


  return (
    <div key={item.title} className='Project-cont'>
        <div className='inner_Project-cont'>
            <div className='img-con'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className='intro-con'>
                <h2>{item.title}</h2>
                <p>{item.intro}</p>
                <Link href='/' className='btn'>Know More</Link>
            </div>
        </div>
    </div>
  )
}

export default Project