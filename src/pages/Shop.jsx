import { Link } from 'react-router-dom';
import SingleProductBox from '../components/SingleProductBox';
import {ProductContext} from '../state/ProductProvider'
import {useContext} from 'react';

function Shop() {

    const products = useContext(ProductContext);

  return (
    <>
        {/* Shop items */}
            <div className="flex flex-wrap justify-center items-center">
                {
                    products[0]?.map((product, idx) => (
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