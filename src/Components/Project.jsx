import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Project.css'



import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = ({item}) => {

  // const mode = localStorage.getItem("mode")

  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])

  return (
    <div key={item.title} className='Project-cont' data-aos="zoom-in">
        <div className='inner_Project-cont'>
            <div className='img-con'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className='intro-con'>
                <h2>{item.title}</h2>
                <p>{item.intro}</p>
                <Link to={item.projectlink} target="_blank" className='btn'>Know More</Link>
            </div>
        </div>
    </div>
  )
}

export default Project