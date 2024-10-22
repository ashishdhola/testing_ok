function Recipe(props) {
    console.log(props);
    return (
        <>
            {
                props.recipeData.map((v, i) => {
                    return (
                        <div style={{ height: "300px", width: "200px", backgroundColor: 'green', color: "white", margin: "20px", float: "left" }}>
                            <h2>{v.image}</h2>
                            <h2>{v.title}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Recipe