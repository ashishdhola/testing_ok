import Products from "./Products/Products";
import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
    let [category, setCategory] = useState([]);
    let [product, setProduct] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            categories();
            productsData();
        }, 1000);
    }, [setCategory, setProduct])

    let categories = () => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                // console.log(res.data);
                setCategory(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let productsData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let sortProductByCategory = ((sort) => {
        if (sort == 'all') {
            productsData();
        } else {
            axios.get("https://fakestoreapi.com/products/category/" + sort)
                .then((res) => {
                    console.log("then", res.data);
                    setProduct(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })
    return (
        <>
            <h2>categories</h2>
            <div style={{ display: "flex", justifyContent: "center", margin: "50px", gap: "10px" }}>
                <button onClick={() => sortProductByCategory('all')} style={{ padding: "10px", textTransform: "capitalize", border: "none", backgroundColor: "transparent", borderStyle: "ridge", backgroundColor: "#d8c8fd" }}>Show All</button>
                {category.map((v) => {
                    return (
                        <button onClick={() => sortProductByCategory(v)} style={{ padding: "10px", textTransform: "capitalize", border: "none", backgroundColor: "transparent", borderStyle: "ridge" }}>{v}</button>
                    )
                })}
            </div>

            <Products items={product} />
        </>
    )
}

export default Category;









// function Category(props) {
//     return (
//         <>
//             <div style={{display:"flex",justifyContent:"center", margin:"50px"}}>
//                 <button onClick={() => props.sort('all')} style={{ padding: "10px", textTransform: "capitalize" }}>Show All</button>
//                 {props.productCategories.map((v) => {
//                     return (
//                         <button onClick={() => props.sort(v)} style={{ padding: "10px", textTransform: "capitalize" }}>{v}</button>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default Category;