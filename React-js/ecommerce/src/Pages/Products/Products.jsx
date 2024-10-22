import './Products.css'
import { Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Products(props) {
    let [addToWishlist, setAddToWishlist] = useState([]);

    let demo = (index) => {
        setAddToWishlist([...addToWishlist, index]);
    }
    // console.log(addToWishlist);

    return (
        <>
            <Container>
                <Row>
                    {props.items.map((v, i) => {
                        return (
                            <Link to={'/productdetails/' + v.id}>
                                <div className='productbox'>
                                    {/* <div className='wishlist'>
                                                <IoMdHeart onClick={() => demo(i)}
                                                    style={addToWishlist[i] === i ? { color: "red" } : { color: "grey" }} />
                                            </div> */}
                                    <div className='productImage'>
                                        <img src={v.image} width={200} height={200} />
                                    </div>
                                    <div>
                                        <h6>{v.title}</h6>
                                        <p>{v.description.substring(0, 20)}...</p>
                                        <h6>${v.price}</h6>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }
                </Row>
            </Container >
        </>
    )
}

export default Products;



{/* <Container>
<Row style={{ justifyContent: "center" }}>
    {
        props.items.map((v, i) => {
            return (
                <Col style={{ width: "25%" }}>
                    <Link to={'/productdetails/' + v.id} style={{ textDecoration: "none" }}>
                        <Card className='card-shadow'>
                            <div className='wishlist'>
                                <IoMdHeart onClick={() => demo(i)}
                                    style={addToWishlist[i] === i ? { color: "red" } : { color: "grey" }} />
                            </div>
                            <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img src={v.image} width={200} height={200} />
                            </div>
                            <Card.Body>
                                <Card.Title>{v.title}</Card.Title>
                                <h4>${v.price}</h4>
                                <p>{v.description.substring(0, 25)}.....</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )
        })
    }
</Row>
</Container > */}