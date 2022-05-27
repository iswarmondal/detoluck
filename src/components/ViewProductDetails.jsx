import React from 'react'

function ViewProductDetails(props) {
    //console log the product info from the props
    console.log(props.productInfo)

  return (
    <div className='p-3 flex justify-center items-center flex-col md:flex-row'>
        <img src={props.productInfo.image} alt={props.productInfo.title} className="max-w-[30vw] mr-10" />
        <section className='w-[50vw]'>
            <h2>{props.productInfo.title}</h2>
            <p>${props.productInfo.price}</p>
            <p>{props.productInfo.description}</p>
        </section>
    </div>
  )
}

export default ViewProductDetails