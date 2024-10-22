
function Home() {
    return (
        <>
            <h1>homeeee</h1>
        </>
    )
}

export default Home;





















// import axios from "axios";
// import { useEffect, useState } from "react";
// import Category from "./Category";
// import Products from "./Products";
// import Header from "./Header";

// function Home() {

//     let [category, setCategory] = useState([]);
//     let [product, setProduct] = useState([]);

//     useEffect(() => {
//         setTimeout(() => {
//             categories();
//             productsData();
//         }, 1000);
//     }, setCategory)

//     let categories = () => {
//         axios.get("https://fakestoreapi.com/products/categories")
//             .then((res) => {
//                 setCategory(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     let productsData = () => {
//         axios.get("https://fakestoreapi.com/products/")
//             .then((res) => {
//                 setProduct(res.data)
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     let sortProductByCategory = ((sort) => {
//         if (sort == 'all') {
//             productsData();
//         } else {
//             axios.get("https://fakestoreapi.com/products/category/" + sort)
//                 .then((res) => {
//                     console.log("then", res.data);
//                     setProduct(res.data)
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 })
//         }
//     })
//     return (
//         <>
//             <Header />
//             <Category productCategories={category} sort={sortProductByCategory} />
//             <Products items={product} />
//         </>
//     )
// }

// export default Home;







