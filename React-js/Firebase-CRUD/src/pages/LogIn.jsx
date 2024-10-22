import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'

function LogIn() {

    const [loginData, setLoginData] = useState({});
    let navigate = useNavigate();

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((response) => {
                console.log(response.user.email);
                localStorage.setItem("user", JSON.stringify(response.user.uid))
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    let handleClick = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
                console.log(response.user);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);

            })
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Password</td>
                            <td>
                                <input type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" style={{ width: "100%" }} >LOG IN</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>

            {/* <button onClick={() => handleClick()}>goooo</button> */}
            <GoogleButton onClick={() => handleClick()} />
        </>
    )
}

export default LogIn