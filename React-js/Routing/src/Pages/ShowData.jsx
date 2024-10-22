import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ShowData() {
    let [record, setRecord] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/data", {
            method: "get"
        }).then(async (res) => {
            let allData = await res.json();
            setRecord(allData ? allData : [])
        }).catch((err) => {
            console.log(err);
        })
    })

    let handledelete = (id) => {
        // console.log(id);
        fetch("http://localhost:3000/data/" + id, {
            method: "delete"
        }).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Link to="/">Form</Link>
            <h1>Records</h1>
            <table border={1} cellPadding={5}>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Firstname</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((v, i) => {
                        i = i + 1;
                        return (
                            <>
                                <tr>
                                    <td>{i}</td>
                                    <td>{v.firstname}</td>
                                    <td>{v.password}</td>
                                    <td>
                                        <button value="edit">
                                            <Link to={"/UpdateForm/" + v.id}>Edit</Link>
                                        </button>
                                        <button type="submit" onClick={() => handledelete(v.id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ShowData;