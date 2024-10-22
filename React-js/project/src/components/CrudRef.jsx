import React from "react";
import { useState, useRef } from "react";

function CrudRef() {

    let id = useRef();
    let productName = useRef();
    let price = useRef();
    let desc = useRef();
    let img = useRef();

    let [count, setCount] = useState(0);
    const [product, setproduct] = useState(
        [
            {
                id: 1,
                productName: "flower",
                price: 200,
                desc: "first product",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCyOEc0bADQWarGB2ARkzQyYg4eGfWmx65w&s",
            },
            {
                id: 2,
                productName: "watch",
                price: 2000,
                desc: "second product",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&s",
            },
        ]
    );

    function addProduct() {
        let data = {
            id: id.current.value,
            productName: productName.current.value,
            price: price.current.value,
            desc: desc.current.value,
            img: img.current.value,
        };

        setproduct([...product, data]);
        console.log(product);
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

    // deleteproduct function ???
    function deleteProduct(val) {
        // console.log(val);
        setproduct(product.filter((e) => e.id !== val.id));
    }


    return (
        <>
            <div className="container">

                <input type="text" placeholder="Product Id" ref={id} />
                <input type="text" placeholder="Product Name" ref={productName} />
                <input type="number" placeholder="Product Price" ref={price} />
                <input type="text" placeholder="Description" ref={desc} />
                <input type="text" placeholder="Image URL" ref={img} />
                <button onClick={addProduct}>Add Product</button>
                <br /> <br />
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

                                        <div style={{ display: "flex", alignItems: "center", }}>
                                            Product Quantity
                                            <button onClick={inc} style={{ border: "none" }}>+</button>
                                            <div style={{ padding: "10px" }}>{count}</div>
                                            <button onClick={dec} style={{ border: "none" }}>-</button>
                                        </div>

                                        <a href="#" class="btn btn-danger" onClick={() => { deleteProduct(val) }}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default CrudRef;