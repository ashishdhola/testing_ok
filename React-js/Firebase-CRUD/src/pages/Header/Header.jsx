import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";
function Header() {

    let [list, setList] = useState(false);
    let [data, setdata] = useState({})
    let navigate = useNavigate();


    auth.onAuthStateChanged((user) => {
        if (user) {
            setList(true)
            setdata(user.email)
            // navigate("/");
        }
        else {
            navigate("/logIn")
        }
    })

    return (
        <>
            <div className="header">
                <Link to="/">Demo</Link>
                <Link to="/logIn">
                    <p>{list == true ? data : "login"}</p>
                </Link>
                <Link to="/signUp">Sign Up</Link>
            </div>
        </>
    )
}

export default Header;