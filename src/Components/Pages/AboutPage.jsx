import React from 'react'
import Navbar from '../Navbar'
import About from '../About'
import Skills from "../Skills"
import ChatButton from '../ChatButton'


import "../../styles/About.css"

const AboutPage = () => {
  return (
    <>
        <Navbar />
        <About />
        <Skills />
        <ChatButton />
    </>
  )
}

export default AboutPage