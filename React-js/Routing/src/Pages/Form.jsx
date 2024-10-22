import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Form() {

    let [formData, setFormData] = useState({});
    let nav = useNavigate();

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    })

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("http://localhost:3000/data", {
            method: "post",
            body: JSON.stringify(formData)
        }).then((response) => {
            toast.success("submitted");
            setTimeout(() => {
                nav("/ShowData")
            }, 1000);
        }).catch((err) => {
            toast.error("error")
        })
    }

    return (
        <>
            <Link to='/ShowData'>Show Data</Link>
            <h1>Form</h1>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="firstname" placeholder="firstname" onChange={handleChange} />
                <input type="password" name="password" placeholder="password" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            <ToastContainer position="top-center" />
        </>
    )
}

export default Form;



































// import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate, useParams } from "react-router-dom";

// function Form() {
//     // Using the useParams hook access the URL and hence the params from the URL.
//     let position = useParams();

//     let [updateData, setUpdateData] = useState({});
//     // console.log(position); {index: '129e'}

//     let nav = useNavigate();

//     useEffect(() => {
//         fetch("http://localhost:3000/data/" + position.index, {
//             method: "get"
//         }).then(async (response) => {
//             let allData = await response.json();
//             setUpdateData(allData);
//             console.log(allData);
//             // console.log(allData); {id: '7694', firstname: 'dhvanichhajed', password: '1234567890'}
//         })
//     }, setUpdateData)

//     let handleChange = (e) => {
//         let { name, value } = e.target;
//         setUpdateData({ ...updateData, [name]: value });
//     }

//     let handleSubmit = async (e) => {
//         e.preventDefault();
//         let userData = await fetch("http://localhost:3000/" + position.index, {
//             method: "put",
//             body: JSON.stringify(updateData)
//         }).then((response) => {
//             if (response) {
//                 toast.success("success");
//                 setTimeout(() => {
//                     nav("/ShowData")
//                 }, 2000);
//             }
//         }).catch((err) => {
//             toast.error("failed to submit data");
//         })
//     }

//     return (
//         <>
//             <Link to="/ShowData">Show Data</Link>
//             <h1>Form</h1>
//             <form method="post" onSubmit={handleSubmit}>
//                 <input type="text" name="firstname" placeholder="firstname" onChange={handleChange} value={updateData.firstname ? updateData.firstname : []} />
//                 <input type="password" name="password" placeholder="password" onChange={handleChange} value={updateData.password ? updateData.password : []} />
//                 <button type="submit">Submit</button>
//             </form>

//             <ToastContainer position="top-center" />
//         </>
//     )
// }

// export default Form;
