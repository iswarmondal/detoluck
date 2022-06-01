import {app} from '../firebase'
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductBox from '../components/SingleProductBox';
// const axios = require('axios').default;

const db = getFirestore(app);
const col = collection(db, 'products');

function Shop() {
    const [products, setProducts] = useState([]);

    // Fetch products from API
    const getProducts = async () => {
        try {
            const productDocs = await getDocs(col);
            const productsArray = [];
            productDocs.docs.forEach(doc => productsArray.push({id: doc.id, ...doc.data()}));
            setProducts(productsArray);
            console.log(productsArray[1]);
        } catch (error) {
            console.log(error);
        }
    }

    // Use effect to load all the products
    useEffect(() => {
        getProducts();
    }, [])

  return (
    <>
        {/* Shop items */}
            <div className="flex flex-wrap justify-center items-center">
                {
                    products?.map((product, idx) => (
                        <Link to={"product/" + product.id} key={idx}>
                            <SingleProductBox product={product} />
                        </Link>
                    ))
                }
            </div>
    </>
  )
}

export default Shop