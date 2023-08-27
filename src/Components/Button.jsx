import { Children } from "react"
import { Link } from "react-router-dom"

const Button = () => {
    return(
            <Link to='/'>{Children}</Link>
    )
}

export default Button;