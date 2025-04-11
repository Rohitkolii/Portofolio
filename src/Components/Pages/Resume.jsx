import resumepdf from "../../Images/ROHIT_Resume.pdf"
import resume from "../../Images/ROHIT_Resume.png"
import Footer from "../Footer"
import Navbar from "../Navbar"

import "../../styles/Resume.css"
const Resume = () => {
    return(
        <div className="resume">
            <Navbar />
            <div className="resume_inner">
                <a href={resumepdf} download="Rohit Resume" >Download Resume</a>
                <img style={{width:"100%"}} src={resume} alt="" />
            </div>

            <Footer />
        </div>
    )
}

export default Resume