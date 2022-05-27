import React from "react";

function ViewProductDetails(props) {
  return (
    <>
      <div className="p-2 flex justify-center items-center flex-col md:flex-row">
        <img
          src={props.productInfo.image}
          alt={props.productInfo.title}
          className="max-w-[30vw] mr-10"
        />
        <div className="w-screen md:w-[50vw] min-h-min max-h-[50vh] mt-20 px-2 flex flex-col justify-evenly">
          <h2 className="text-2xl font-semibold text-zinc-700">
            {props.productInfo.title}
          </h2>
          <div className="flex overflow-y-auto mt-5">
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
            <img
              src={props.productInfo.image}
              alt={props.productInfo.title}
              className="w-[10vw] shadow-sm m-2 cursor-pointer mr-3 mt-2"
            />
          </div>
          <div className="flex justify-center items-start flex-col">
            <p className="text-green-600 font-light text-lg mt-4">
              Rs.{props.productInfo.price}
            </p>
            <button className="w-[50vw] md:w-[10vw] my-2 bg-yellow-400 p-2 rounded-md font-medium">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProductDetails;
