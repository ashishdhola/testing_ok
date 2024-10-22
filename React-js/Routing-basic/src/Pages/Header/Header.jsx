import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <>
            <div className="demo">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    )
}

export default Header;