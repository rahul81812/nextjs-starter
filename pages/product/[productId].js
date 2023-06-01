

function Product({ product }) {
    console.log(product)
    return (
    <>
    <h1> Product Inside Page for {product.id} </h1>
   
    </>
    )
}
    export default Product

    export async function getStaticPaths() {
        return {
            paths: [
                {
                    params : { productId: '1'}
                },
                {
                    params : { productId: '2'}
                },
            ],
            fallback: false,
        }
    }

    export async function getStaticProps(context) {
        const { params } = context
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.productId)
        const data = await response.json()
        console.log(data)
        return {
            props: {
                product: data,
            },
        }
    }