import React from "react";
import { useState } from "react";
function Input() {

    const [input, setInput] = useState();
    const [mail, setMail] = useState();
    const [password, setPass] = useState();
    function handle(e) {
        // console.log(e.target.value);
        setInput(e.target.value);
    }

    function handle1(e) {
        setMail(e.target.value);
    }

    function handle1(e) {
        setMail(e.target.value);
    }

    function handle2(e) {
        setPass(e.target.value);
    }

    function submit(e) {
        e.preventDefault();
        let data = {
            name: input,
            mail: mail,
            password: password
        }
        console.log(data);
        setInput("");
        setMail("");
        setPass("");
    }

    return (
        <>
            <form action="">
                <input type="text" onChange={handle} value={input} placeholder="name" />
                <input type="email" onChange={handle1} value={mail} placeholder="email" />
                <input type="password" onChange={handle2} value={password} placeholder="password" />

                <button onClick={submit}>Submit</button>
            </form>
        </>
    )

}


export default Input;

// import React from "react";
// import { useState } from "react";

// function Input() {
//     const [formData, setFormData] = useState({
//         name: "",
//         mail: "",
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target; // Destructure event target for name and value

//         // Update formData based on input name
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(formData); // Log the entire formData object
//         setFormData({ name: "", mail: "" }); // Reset form data
//     };

//     return (
//         <>
//             <form action="">
//                 <input
//                     type="text"
//                     onChange={handleChange}
//                     value={formData.name} // Use formData.name for controlled input
//                     placeholder="name"
//                     name="name" // Set name attribute for clear identification
//                 />
//                 <input
//                     type="email"
//                     onChange={handleChange}
//                     value={formData.mail} // Use formData.mail for controlled input
//                     placeholder="email"
//                     name="mail" // Set name attribute for clear identification
//                 />
//                 <button onClick={handleSubmit}>Submit</button>
//             </form>
//         </>
//     );
// }

// export default Input;
