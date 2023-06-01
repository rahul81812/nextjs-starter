import { useRouter } from 'next/router'

function ProductDetail({products}) {
    const router = useRouter()
    const productname = router.query.productname
    return (
    <>
    <h1> Product Inside Page for {productname} </h1>
   
    </>
    )
}
    
    export default ProductDetail
