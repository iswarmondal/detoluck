import React from 'react';
import {Link} from 'react-router-dom'

function AdminProducts() {
    return (
        <>
            <main className='w-full h-full flex flex-col items-center'>
                <h1 className='font-semibold text-xl'>All Products</h1>
                <div className="my-3 w-full px-4 flex justify-evenly">
                    <Link to="add-new-product">
                        <button className='border-md p-2 rounded-md bg-green-500 text-white hover:bg-green-600'>
                            New Product
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default AdminProducts