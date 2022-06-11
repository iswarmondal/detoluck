import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ViewProductDetails from "../components/ViewProductDetails";
import {ProductContext} from '../state/ProductProvider'

function ProductViewPage() {
  const [productInfo, setproductInfo] = useState({});

  let params = useParams();
  let productId = params.productId;

  const productState = useContext(ProductContext)
  const productList = productState[0]

  useEffect(() => {
    let thisProduct = productList.find((e)=>e.id===productId);
    if(thisProduct)
      setproductInfo(thisProduct)
  }, [productList]);

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
