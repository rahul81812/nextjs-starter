function Product({products}) {
    return (
    <>
    <h1> Product Page </h1>
    {products.map((prod) => {
        return (
            <div key={prod.id}>
                <p>{prod.name}</p>
            </div>
        )
    })}
    </>
    )
}
    
    export default Product

    export async function getStaticProps() {
        const response = await fetch('https://az-fn-test3344r.azurewebsites.net/api/HttpTrigger1?code=quEdRmcndxixM8DuGBVVyxipYBON8W7M6pHz9S0ETQ5lAzFuWMAl2w==')
        const data = await response.json()
        console.log(data)

        return {
            props: {
                products: data,
            },
        }
    }

  