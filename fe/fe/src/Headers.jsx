import { Link } from "react-router-dom"
export default function NavBar()
{
    return (
        <div>
            <h2>Social media </h2>
        <Link to ="./Signup">
        <button>SignUp</button>
        </Link>
         <Link to ="./Signin">
        <button>Signin</button>
        </Link>
        </div>
    )
}