import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSidepannel from "../components/CheckoutSidepannel";
import { app } from '../firebase';
import { doc, getDoc, getFirestore, } from "firebase/firestore";

function Checkout() {
  const productId = useParams();
  const [product, setProduct] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState()
  const [city, setCity] = useState()
  const [locality, setLocality] = useState()
  const [nearbyLandmark, setNearbyLandmark] = useState()
  const [pinCode, setPinCode] = useState()
  const [introducerPhone, setIntroducerPhone] = useState()
  const [howDidYouKnowUs, setHowDidYouKnowUs] = useState()
  const [paymentMethod, setPaymentMethod] = useState("")

  const fetchDoc = async () => {
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "products", productId.productId);
      const productDoc = await getDoc(docRef);
      if (productDoc.exists()) {
        const productData = productDoc.data();
        setProduct(productData);
        setProductPrice(productData.price);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDoc();
  }, [])


  console.log(`the payment method is ${paymentMethod}`)

  return (
    <>
      <div className="flex flex-col items-center justify-evenly min-w-full">
        <h1 className="text-lg font-semibold m-3">Checkout</h1>
        <div className="flex w-screen">
          <CheckoutForm setCity setFullName setHowDidYouKnowUs setIntroducerPhone setLocality setNearbyLandmark setPhone setPinCode />
          <CheckoutSidepannel setPaymentMethod={setPaymentMethod}>{productPrice? productPrice: "Loading..."}</CheckoutSidepannel>
        </div>
      </div>
    </>
  );
}

export default Checkout;
