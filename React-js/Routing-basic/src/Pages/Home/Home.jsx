import Mysection from "./Mysection";
function Home() {
    return (
        <>
            <h1>home Page</h1>
            <img src={'./src/images/product1.jpeg'} />

            <div style={{ height: "200px", backgroundColor: "green" }}></div>
            <Mysection />
            <div style={{ height: "200px", backgroundColor: "green" }}></div>
        </>
    )
}

export default Home;