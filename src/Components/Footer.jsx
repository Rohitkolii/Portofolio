import React from 'react'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

import { FaHeart } from "react-icons/fa";



const Footer = () => {

  // const mode = localStorage.getItem("mode")


  return (
    <div className='footer'>
        <div>
            {/* <div className='Social-footer'>
                <Link target='blank' href='https://www.instagram.com/rohit__koli_/'><AiOutlineInstagram /></Link>
                <Link href='/'><AiOutlineFacebook /></Link>
                <Link target='blank' href='https://github.com/Rohitkolii'><AiOutlineGithub /></Link>
            </div> */}
            <div className='copyright'>
                <p>Made with <FaHeart /> by <Link href='/'>Rohitkoli</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer