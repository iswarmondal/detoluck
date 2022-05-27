import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductBox from '../components/SingleProductBox';
const axios = require('axios').default;


function Shop() {
    const [products, setProducts] = useState([]);

    // Fetch products from API
    const getProducts = async () => {
        try {
            const products = await axios.get('https://fakestoreapi.com/products');
            setProducts(products.data);
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
                    products?.map(product => (
                        <Link to={"product/" + product.id} key={product.id}>
                            <SingleProductBox product={product} />
                        </Link>
                    ))
                }
            </div>
    </>
  )
}

export default Shop