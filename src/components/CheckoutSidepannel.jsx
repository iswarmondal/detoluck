import React, { useRef } from 'react'

function CheckoutSidepannel(props) {

    const paytmMethodRef = useRef(null);
    const cashOnDeliveryRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target == cashOnDeliveryRef.current) {
            props.setPaymentMethod("cashOnDelivery");
        }else if(e.target == paytmMethodRef.current) {
            props.setPaymentMethod("paytm");
        }
    }

    return (
        <>
            <aside className="flex flex-col items-center justify-evenly w-2/5 h-[85vh] border">
                <div>
                    <h2 className='text-xl font-semibold text-gray-700'>Select your payment method</h2>
                    <p className='font-light text-gray-700 mt-2'>Select a payment option that you like. <br /> All the payment gateways are secure</p>
                </div>
                <div>
                    <h1>Subtotal (including all taxes)</h1>
                    <h1 className='text-xl font-bold text-green-700'>Rs.{props.children}</h1>
                </div>
                <div className='flex flex-col'>
                    <button ref={paytmMethodRef} className='border-md bg-blue-500 p-2 my-1 rounded-md text-white' onClick={handleClick}>Paytm payment gateway</button>
                    <button ref={cashOnDeliveryRef} className='border-md bg-yellow-500 p-2 rounded-md text-white' onClick={handleClick}>Cash on delivery</button>
                </div>
            </aside>
        </>
    )
}

export default CheckoutSidepannel