import { Link } from "react-router-dom";
import "../styles/Project.css"
import { MdKeyboardArrowRight } from "react-icons/md";


const ProjectCard = ({item}) => {
    console.log(item);
    
    return(
        <>
            <div className="ProjectCard">
                <div className="ProjectCard_inner">
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div className="para">
                        <p>{item.title}</p>
                        <p>{item.intro.substr(0,80)}...</p>
                        <Link target="_blank" to={item.projectlink}>Read more <MdKeyboardArrowRight /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;