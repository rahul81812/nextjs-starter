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

    export async function getServerSideProps() {
        const response = await fetch('https://prod-30.canadacentral.logic.azure.com/workflows/5075f846fa384c44850005c13c23a509/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fJ5dTyARvk04GSxkZVkwQupGJ4k3uROadFoKS8GKbbM')
        const data = await response.json()


        return {
            props: {
                products: data,
            },
        }
    }

  