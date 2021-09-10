import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="Menu-Header">
            <div className="menu">
                <div>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Link to="/signin">Signin</Link>
                </div>
                <div>
                    <Link to="/signup">Signup</Link>
                </div> 
            </div>
        </div>
    )
}

export default Header