import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";

function SignUp() {

    const [registerData, setRegisterData] = useState({});

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        if (registerData.password == registerData.confirmPassword) {
            createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
                .then((response) => {
                    console.log(response.user);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
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
                            <td>Confirm Password</td>
                            <td>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" style={{ width: "100%" }} >SIGN UP</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default SignUp