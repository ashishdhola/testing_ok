import axios from "axios";
import { useEffect, useState } from "react";
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";

function Cart() {

    let [cartDetails, setCartDetails] = useState([]);

    let cartLength = useSelector((state) => state.cartRoot.cartRecord)

    useEffect(() => {
        setTimeout(() => {
            getUserData();
        }, 1000);
    }, [])

    let getUserData = async () => {
        let loginUserData = JSON.parse(localStorage.getItem("user"));  //getting the login user data
        let cartData = await axios.get("http://localhost:3000/cartData?userId=" + loginUserData.id);

        let newarray = []
        cartData.data.map((v, i) => {
            newarray.push(v.productId);
        })

        let allcartproductsData = newarray.map((id) =>
            axios.get("https://fakestoreapi.com/products/" + id)
        )

        let response = await Promise.all(allcartproductsData);

        let result = response.map((res) => res.data);

        let cartTotal = 0

        result.map((v, i) => {
            v.cartQuantity = cartData.data[i].quantity,
                v.cartId = cartData.data[i].id,
                cartTotal += parseFloat(v.cartQuantity) * parseFloat(v.cartId);

        })
        console.log(result);
        setCartDetails(result)
    }

    return (
        <>
            <h1>cart</h1>
            <table border={1} cellPadding={5} cellSpacing={5} align="center">
                <tr>
                    <td>
                        {
                            cartDetails.map((v, i) => {
                                return (
                                    <>
                                        <Card className="cart_card">
                                            <Card.Img variant="top" src={v.image} style={{ width: "100px" }} />
                                            <Card.Body>
                                                <Card.Title>{v.title}</Card.Title>
                                                <Card.Text>
                                                    ${v.price}
                                                </Card.Text>
                                                <Card.Text>
                                                    Quantity :
                                                    {v.cartQuantity}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </td>

                    <th>
                        <h4>Price Details ({cartLength.length} items)</h4>
                        {
                            cartDetails.map((v, i) => {
                                return (
                                    <>
                                        {/* <Card className="cart_card">
                                            <Card.Img variant="top" src={v.image} style={{ width: "100px" }} />
                                            <Card.Body>
                                                <Card.Title>{v.title}</Card.Title>
                                                <Card.Text>
                                                    ${v.price}
                                                </Card.Text>
                                                <Card.Text>
                                                    Quantity :
                                                    {v.cartQuantity}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card> */}
                                    </>
                                )
                            })
                        }
                    </th>
                </tr>
            </table>


        </>
    )
}

export default Cart;