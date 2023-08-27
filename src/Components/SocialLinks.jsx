import './SocialLinks.css'
import { Link } from "react-router-dom"
import {AiFillLinkedin, AiOutlineTwitter, AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import {IoBook} from 'react-icons/io5'

const SocialLinks = () => {
    return(
        <div className="SocialLinks">
            <ul>
                <li><a href="https://www.linkedin.com/" target='blank'><AiFillLinkedin className='social-icons' /></a></li>
                <li><a href="https://twitter.com/" target='blank'><AiOutlineTwitter className='social-icons' /></a></li>
                <li><a href="https://www.youtube.com/" target='blank'><AiFillYoutube className='social-icons' /></a></li>
                <li><a href="https://github.com/" target='blank'><AiFillGithub className='social-icons' /></a></li>
                <li><Link to="/projects"><IoBook className='social-icons' /></Link></li>
            </ul>
        </div>
    )
}

export default SocialLinks;