
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

function Demo() {
    const getUserData = collection(db, "user");
    const [newUser, setNewUser] = useState({});
    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState(null);

    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
        }
        else {
            window.location = "/logIn"
        }
    })

    useEffect(() => {
        getuser();
    }, [])

    let getuser = async () => {
        let data = await getDocs(getUserData)
        let allRecord = [];

        data.docs.map((val) => {
            let obj = { ...val.data(), id: val.id }
            allRecord.push(obj);
        })
        setUserData(allRecord)
    }

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    })

    let submitData = async (e) => {
        e.preventDefault();

        if (userId) {
            let updateData = await updateDoc(doc(getUserData, userId), newUser)
        } else {
            if (newUser.name && newUser.email) {
                await addDoc(getUserData, userData)
            }
            else {
                toast.error("Please Fill All The Fields")
            }
        }
        getuser();
    }

    let updateData = async (id) => {
        if (id) {
            setUserId(id);
            let up = await getDoc(doc(getUserData, id));
            console.log(up.data());
            setNewUser(up.data())

        } else {
            console.error("No user ID found");
        }
    }

    let deleteData = async (id) => {
        console.log(id);
        await deleteDoc(doc(getUserData, id))
        getuser();
    }

    let logoutUser = () => {
        signOut(auth).then(() => {
            console.log("success");
            window.location = "/logIn"

        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" placeholder="Name" value={newUser.name ? newUser.name : ""} onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Email</td>
                            <td>
                                <input type="email" name="email" placeholder="Email" value={newUser.email ? newUser.email : ""} onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" style={{ width: "100%" }} >{userId == null ? "submit" : "edit"}</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>


            <table border={1} align="center" cellPadding={7}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th colSpan={2}>Actions</th>
                    </tr>

                    {userData.map((v, i) => {
                        return (
                            <>
                                <tr>
                                    <th>{v.name}</th>
                                    <th>{v.email}</th>
                                    <th><button onClick={() => updateData(v.id)}>Update</button></th>
                                    <th><button type="submit" onClick={() => deleteData(v.id)}>Delete</button></th>
                                </tr>
                            </>
                        )
                    })
                    }
                </thead>
            </table>

            <button onClick={() => logoutUser()}>logout</button>
            <ToastContainer />
        </>
    )
}

export default Demo;
