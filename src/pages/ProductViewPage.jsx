import { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from "axios";
import ViewProductDetails from "../components/ViewProductDetails";


function ProductViewPage() {
    const [productInfo, setproductInfo] = useState({})

    let params = useParams();
    
    
    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const data = await axios.get(`https://fakestoreapi.com/products/${params.productId}`);

                setproductInfo(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductInfo();
    }, [params.productId])

    return (
        <div>
            <ViewProductDetails productInfo={productInfo} />
        </div>
    )
}

export default ProductViewPage