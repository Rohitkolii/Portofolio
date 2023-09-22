import React, { useEffect } from 'react'
import "../styles/Skills.css"

import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/javascript.png'
import react from '../Images/react.png'
import next from '../Images/next.png'
import boot from '../Images/boot.png'
import redux from '../Images/redux.webp'
import c from '../Images/c.png'
import cpp from '../Images/cpp.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Skils = () => {

  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='SkillsCon'>
      <h1>SKILLS</h1>
      <p className='skillintro'>These are the my top Skills that i have used in my variouse Projects.</p>
      <div className='innerSkills' data-aos="fade-up">
        <div className='skillarea'>
          <div className='skillsimg'>
              <img src={html} alt="html" />
              <p>HTML</p>
          </div>

          <div className='skillsimg'>
              <img src={css} alt="css" />
              <p>CSS</p>
          </div>

          <div className='skillsimg'>
              <img style={{height: 50, objectFit: 'cover'}} src={js} alt="JavaScript" />
              <p>Javascript</p>
          </div>

          <div className='skillsimg'>
              <img style={{height: 45, objectFit: 'cover'}} src={react} alt="ReactJS" />
              <p>ReactJS</p>
          </div>

          <div className='skillsimg'>
              <img src={next} alt="NextJS" />
              <p>NextJS</p>
          </div>

          <div className='skillsimg'>
              <img src={redux} alt="Redux" />
              <p>Redux</p>
          </div>

          <div className='skillsimg'>
              <img src={boot} alt="Bootstrap" />
              <p>Bootstrap</p>
          </div>

          <div className='skillsimg'>
              <img src={c} alt="c language" />
              <p>C</p>
          </div>

          <div className='skillsimg'>
              <img src={cpp} alt="c++" />
              <p>C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils