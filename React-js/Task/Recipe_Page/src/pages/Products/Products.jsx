import { useState } from "react"
import Recipe from "../Recipe/Recipe"
import Searchbar from "../Searchbar/Searchbar"
import './Products.css'



function Product() {
    let recipe = [
        { image: "img", title: "1 product" },
        { image: "img", title: "2 product" },
        { image: "img", title: "3 product" }
    ]

    return (
        <>
            <h1>Food Recipe Plaza <img src="https://cdn-icons-png.freepik.com/512/198/198416.png" width="40" /></h1>
            <Recipe recipeData={recipe} />
            <div id="productPage"></div>
            <Searchbar />
        </>
    )
}
export default Product