import React from 'react'
import "../styles/Skills.css"

const Skils = () => {
  return (
    <div className='SkillsCon'>
      <h1>SKILLS</h1>
      <p className='skillintro'>These are the my top Skills that i have used in my variouse Projects.</p>
      <div className='innerSkills'>
        <div className='skillarea'>
          <div className='skillsimg'>
              <img src="./images/html.png" alt="" />
              <p>HTML</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/css.png" alt="" />
              <p>CSS</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/javascript.png" alt="" />
              <p>JavaScript</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/react.png" alt="" />
              <p>REactJS</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/next.png" alt="" />
              <p>NextJS</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/redux.webp" alt="" />
              <p>Redux</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/boot.png" alt="" />
              <p>Bootstrap</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/c.png" alt="" />
              <p>C</p>
          </div>

          <div className='skillsimg'>
              <img src="./images/cpp.png" alt="" />
              <p>C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils