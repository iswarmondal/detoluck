import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ViewProductDetails from "../components/ViewProductDetails";

function ProductViewPage() {
  const [productInfo, setproductInfo] = useState({});

  let params = useParams();

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const data = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );

        setproductInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductInfo();
  }, [params.productId]);

  return (
    <div>
      {productInfo.id ? (
        <>
          <ViewProductDetails
            productInfo={productInfo}
            productId={params.productId}
          />
          <div className="px-3">
            <h3 className="text-lg from-stone-700 font-semibold">
              Description -
            </h3>
            <p>{productInfo.description}</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default ProductViewPage;
