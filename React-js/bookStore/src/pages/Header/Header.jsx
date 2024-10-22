import { Link } from 'react-router-dom';
import './header.css'
import { PiBooksFill } from "react-icons/pi";
function Header() {

    return (
        <>
            <div className='header-wrap'>
                <div>
                    <PiBooksFill className='logo' />
                </div>
                <div className='addBook'>
                    <Link to="/addBook">Add Book</Link>
                </div>
            </div>

        </>
    )
}

export default Header;