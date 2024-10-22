import { Button, Heading } from "./Atoms/Elements";

function SpecialMenu() {

    let arr = [
        {
            title: "Pizza",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
            price: "$55"
        },
        {
            title: "Rice",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
            price: "$50"
        },
        {
            title: "Green Salad",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
            price: "$45"
        },
        {
            title: "Pasta",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
            price: "$35"
        }
    ]
    return (
        <>
            <div className="container">
                {/* <div class="section-heading">
                    <h2>{title}</h2>
                </div> */}
                <Heading content="Special Menu" classes="section-heading" />
                <div class="row">
                    {arr.map((val) => {
                        return <div class="col-3" style={{ width: "25%" }}>
                            < div class="menu-box" >
                                <div class="menu-img">
                                    {/* <img src="./src/images/pizza.jpg"/> */}
                                </div>
                                <div class="menu-content">
                                    <h4><a href="#">{val.title}</a></h4>
                                    <p>{val.text}</p>
                                    <h5>{val.price}
                                    </h5>
                                    {/* <a href="#" class="menu-box-btn">Add To Cart</a> */}
                                    <Button content="Add To Cart" classes="menu-box-btn"/>
                                </div>
                            </div >
                            {/* <SpecialMenu title={val.title} text={val.text} price={val.price} /> */}
                        </div>
                    })}
                </div>
            </div>




            {/* < div class="menu-box" >
                <div class="menu-img">
                    {/* <img src="./src/images/pizza.jpg"/> */}
            {/* </div >
            <div class="menu-content">
                <h4><a href="#">{title}</a></h4>
                <p>{text}</p>
                <h5>{price}
                </h5>
                <a href="#" class="menu-box-btn">Add To Cart</a>
            </div>
            </div > * /} */}
        </>
    )
}

export default SpecialMenu;