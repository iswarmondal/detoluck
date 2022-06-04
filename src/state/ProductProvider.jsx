import React, { createContext, useState, useEffect } from 'react'
import {app} from '../firebase'
import { getDocs, getFirestore, collection } from "firebase/firestore";
const db = getFirestore(app);
const col = collection(db, 'products');

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    // Fetch products from Database
    const getProducts = async () => {
        try {
            const productDocs = await getDocs(col);
            const productsArray = [];
            productDocs.docs.forEach(doc => productsArray.push({id: doc.id, ...doc.data()}));
            setProducts(productsArray);
        } catch (error) {
            console.log(error);
        }
    }

    // Use effect to load all the products
    useEffect(() => {
        getProducts();
    }, [])
    
    const [products, setProducts] = useState([])

    return(
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}
