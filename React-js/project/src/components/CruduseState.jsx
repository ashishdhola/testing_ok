import React, { useState } from "react";

function Crudusestate() {

    // let id, productName, price, desc, img;
    let [input, setinput] = useState({});
    let [count, setCount] = useState(0);
    const [product, setproduct] = useState([
        {
            id: 1,
            productName: "flower",
            price: 200,
            desc: "first product",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCyOEc0bADQWarGB2ARkzQyYg4eGfWmx65w&s",
        },
        {
            id: 2,
            productName: "flower 2",
            price: 2000,
            desc: "second product",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&s",
        }
    ]);

    function handle(e) {
        setinput({ ...input, [e.target.name]: e.target.value })
    }

    function addProduct() {
        // setproduct({ ...product, [e.target.name]: e.target.value })
        console.log(product);
        setproduct([...product, input])
    }

    function inc() {
        setCount(
            count + 1
        )
    }

    function dec() {
        setCount(
            count - 1
        )
    }

    function deleteproduct(id) {
        console.log(id);
        setproduct(product.filter((val) => val.id !== id))
    }

    return (
        <>
            <div className="container">
                <input type="text" placeholder="Product Id" name="id" onChange={handle} />
                <input type="text" placeholder="Product Name" name="productName" onChange={handle} />
                <input type="number" placeholder="Product Price" name="price" onChange={handle} />
                <input type="text" placeholder="Description" name="desc" onChange={handle} />
                <input type="text" placeholder="Image URL" name="img" onChange={handle} />
                <button onClick={addProduct}>Add Product</button>

                <div className="row">
                    {product.map((val) => {
                        return (
                            <div className="col-3">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={val.img} class="card-img-top" style={{ width: "290px", height: "190px" }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{val.id}</h5>
                                        <h5 class="card-title" style={{ textTransform: "uppercase" }}>{val.productName}</h5>
                                        <p class="card-text" style={{ marginBottom: "0px" }}>{val.price}</p>
                                        <p class="card-text" style={{ textTransform: "capitalize", margin: "0px" }}>{val.desc}</p>

                                        {/* product quantity */}
                                        <div style={{ display: "flex", alignItems: "center", }}>
                                            Product Quantity
                                            <button onClick={() => { inc(val.id) }} style={{ border: "none" }}>+</button>
                                            <div style={{ padding: "10px" }}>{count}</div>
                                            <button onClick={dec} style={{ border: "none" }}>-</button>
                                        </div>

                                        {/* delete button */}
                                        <a href="#" class="btn btn-danger" onClick={() => { deleteproduct(val.id) }}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Crudusestate;




















// import React, { useState } from "react";

// function Crudusestate() {

//     const [product, setproduct] = useState({ id: "", productName: "", price: "", desc: "", img: "" });

//     function handle(e) {
//         setproduct({ ...product, [e.target.name]: e.target.value })
//     }

//     function addProduct(e) {
//         setproduct({ ...product, [e.target.name]: e.target.value })
//         console.log(product);
//     }

//     return (
//         <>
//             <div className="container">
//                 <input type="text" placeholder="Product Id" name="id" onChange={handle} />
//                 <input type="text" placeholder="Product Name" name="productName" onChange={handle} />
//                 <input type="number" placeholder="Product Price" name="price" onChange={handle} />
//                 <input type="text" placeholder="Description" name="desc" onChange={handle} />
//                 <input type="text" placeholder="Image URL" name="img" onChange={handle} />
//                 <button onClick={addProduct}>Add Product</button>

//                 <div className="row">
//                     {product.map(() => {
//                         return (
//                             <div className="col-3">
//                                 <div class="card" style={{ width: "18rem" }}>
//                                     <img src="" class="card-img-top" style={{ width: "290px", height: "190px" }} />
//                                     <div class="card-body">
//                                         <h5 class="card-title">{product.id}</h5>
//                                         <h5 class="card-title" style={{ textTransform: "uppercase" }}>{product.price}</h5>
//                                         <p class="card-text" style={{ marginBottom: "0px" }}></p>
//                                         <p class="card-text" style={{ textTransform: "capitalize", margin: "0px" }}></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Crudusestate;


// {/* <div className="row">
//                     {
//                         product.map((val) => {
//                             return (
//                                 <div className="col-3">
//                                     <div class="card" style={{ width: "18rem" }}>
//                                         <img src={val.img} class="card-img-top" style={{ width: "290px", height: "190px" }} />
//                                         <div class="card-body">
//                                             <h5 class="card-title">{val.id}</h5>
//                                             <h5 class="card-title" style={{ textTransform: "uppercase" }}>{val.productName}</h5>
//                                             <p class="card-text" style={{ marginBottom: "0px" }}>{val.price}</p>
//                                             <p class="card-text" style={{ textTransform: "capitalize", margin: "0px" }}>{val.desc}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }

//                 </div> */}
