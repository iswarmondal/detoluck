function SingleProductBox(props) {
  return (
    <div className="border border-slate-500/40 rounded-md m-6 p-2 flex flex-col items-center justify-center max-w-md shadow-md w-[400px] h-[250px] overflow-hidden">
        <img src={props.product.images} alt={props.product.name} className="max-w-[8rem] max-h-[8rem]" />
        {console.log(props.product.images)}
        <h1 className="font-semibold px-6 py-2 text-lg">{props.product.title}</h1>
        <h2 className="text-sm font-light bg-green-200 p-1 rounded-sm">Rs. {props.product.price}</h2>
    </div>
  )
}

export default SingleProductBox