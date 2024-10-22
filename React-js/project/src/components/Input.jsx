// import React, { useState } from "react";

// function Input() {
//     const [Input, setInput] = useState({ name: "", email: "", password: "", date: "", hobbies: [] })

//     function handle(e) {
//         // console.log(e.target.value);
//         // console.log(e.target.name);
//         setInput({ ...Input, [e.target.name]: e.target.value })
//     }

//     const handleCheckbox = (e) => {
//         if (e.target.checked === true) {
//             // console.log(e.target.value);
//             Input.hobbies.push(e.target.value);
//         }
//     }

//     function submit() {
//         console.log(Input);
//         setInput({ name: "", email: "", password: "", date: "", hobbies: [] });
//     }

//     return (
//         <>
//             <input type="text" placeholder="Firstname" onChange={handle} name="name" value={Input.name} />
//             <input type="email" placeholder="Email" onChange={handle} name="email" value={Input.email} />
//             <input type="password" placeholder="password" onChange={handle} name="password" value={Input.password} />
//             <input type="date" placeholder="Email" onChange={handle} name="date" value={Input.date} />

//             <h4>Hobbies : </h4>

//             <input type="checkbox" onChange={handleCheckbox} value="painting" id="painting" />
//             <label htmlFor="painting"> Painting </label>

//             <input type="checkbox" onChange={handleCheckbox} value="sports" id="sports" />
//             <label htmlFor="sports"> Sports </label>

//             <input type="checkbox" onChange={handleCheckbox} value="dancing" id="dancing" />
//             <label htmlFor="dancing"> Dancing </label>

//             <input type="checkbox" onChange={handleCheckbox} value="cooking" id="cooking" />
//             <label htmlFor="cooking"> Cooking </label>

//             <br />
//             <button onClick={submit}>Submit</button>
//         </>
//     )
// }
// export default Input;







// --------------------------



import React, { useState } from 'react';
const CheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    console.log(setIsChecked);
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Check me!
            </label>
        </div>
    );
};
export default CheckboxExample;



// --------------------------















// import React from "react";
// import { useState } from "react";

// function Input() {
//     const [input, setInput] = useState({ firstname: "", email: "" });

//     function handle(e) {
//         // e.preventDefault();
//         // console.log(e.target.value);
//         // setInput(
//         //     {
//         //         ...input,
//         //         firstname: e.target.value,
//         //     }
//         // )

//         setInput({ ...input, [e.target.name]: e.target.value });

//     }

//     function submit() {
//         // e.preventDefault();
//         // let data = {
//         //     name: input.name,
//         //     mail: input.email
//         // }
//         // console.log(data);

//         console.log(input);
//         setInput({ firstname: "", email: " " });

//     }

//     return (
//         <>
//             <input type="text" name="firstname" onChange={handle} placeholder="first name" value={input.firstname} />
//             <input type="email" name="email" onChange={handle} placeholder="email" value={input.email} />
//             <button onClick={submit}>submit</button>
//         </>
//     );
// }

// export default Input;