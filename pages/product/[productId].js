import { useRouter } from "next/router"

function Product({ product }) {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading..</h1>
    }
  //  console.log(product)
    return (
        <>
        <h1> Product Page Internal </h1>
        { product.map((prod) => {
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


//Path
export async function getStaticPaths() {
    console.log('paths')
    return {
        paths: [
            {
                params: { productId: 'orange' }
            },
            {
                params: { productId: 'milk' }
            },
        ],
        fallback: true,
    }
}

//Props
export async function getStaticProps(context) {
    console.log('props')
    const { params } = context
    //       const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.productId)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "id": params.productId });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch("https://prod-30.canadacentral.logic.azure.com:443/workflows/5075f846fa384c44850005c13c23a509/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fJ5dTyARvk04GSxkZVkwQupGJ4k3uROadFoKS8GKbbM", requestOptions)


    const data = await response.json()

  // console.log(data)
    return {
        props: {
            product: data,
        },
    }
}