import React from 'react';
import Header from './components/Header';
import SpecialMenu from './components/Special-Menu';
import Usestate from './components/Usestate';
import Input from './components/Input';
import CrudRef from './components/CrudRef';
import Crudusestate from './components/CruduseState';
// import SectionHeading from './components/SectionHeading';
function App() {

    // let arr = [
    //     {
    //         title: "Pizza",
    //         text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    //         price: "$55"
    //     },
    //     {
    //         title: "Rice",
    //         text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    //         price: "$50"
    //     },
    //     {
    //         title: "Green Salad",
    //         text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    //         price: "$45"
    //     },
    //     {
    //         title: "Pasta",
    //         text: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    //         price: "$35"
    //     }
    // ]

    return (
        <>
            {/* <Header /> */}
            {/* <Usestate /> */}
            
            {/* <SectionHeading /> */}
            {/* <div className="container">
                <div class="row">
                    {arr.map((val) => {
                        return <div class="col-3" style={{ width: "25%" }}>
                            <SpecialMenu title={val.title} text={val.text} price={val.price} />
                        </div>
                    })}
                </div>
            </div> */}

            {/* <SpecialMenu /> */}
            <Input />
            {/* <CrudRef /> */}
            {/* <Crudusestate/> */}


        </>
    )
}

export default App;
