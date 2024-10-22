import './home.css'
import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
    const getUserData = collection(db, "user");
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

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

    // let updateData = async (userId) => {
    //     let up = await getDoc(doc(getUserData, userId));
    //     console.log(up.data());
    // }

    return (
        <>
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
                                    <Link to={"/form/" + v.id} >
                                        Update
                                    </Link>
                                    {/* <th><button onClick={() => updateData(v.id)}></button></th> */}
                                    <th><button type="submit">Delete</button></th>
                                </tr>
                            </>
                        )
                    })
                    }
                </thead>
            </table>
        </>
    )
}

export default Home
