import icon from "../icon.png"
import "../component/navBar.css"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <Link to="/"><img src={icon} alt="" /></Link>
            <h1>Budget App</h1>
            <button>
            <Link to="/new"><h1>New Transaction</h1></Link>
            </button>
        </div>
    )
}

export default NavBar;