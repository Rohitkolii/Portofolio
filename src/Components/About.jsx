import './About.css'
import { Link } from "react-router-dom"

const About = () => {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Material Ui",
        "Next JS",
    ]

    return(
        <section className="About-container">
            <div className="About-inner_Container">
                <div className="About-row1">
                    <h1>About Me</h1>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>

                <div className="About-row2">
                    <div className="About-row2_col1">
                        <h3>Get to Know me!</h3>
                        <p>I'm a <span> Frontend Web Developer </span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span> Projects </span> section.</p>
                        <p>I also like sharing content related to the stuff that I have learned over the years in <span> Web Development </span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='yellow_text' href="www.google.com"> Linkedin </a> where I post useful content related to Web Development and Programming</p>
                        <p>I'm open to <span> Job </span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span> contact </span> me.</p>
                        <Link className="btn about-section_btn" to='contact'>Contact</Link>
                    </div>
                    <div className="About-row2_col2">
                        <div>
                        <h3>My Skills</h3>
                            <ul>
                            {
                                skills.map((tag) => {
                                    return (
                                            <li className="skills-tag">
                                                {tag}
                                            </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;