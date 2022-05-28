import { useParams } from "react-router";

function Checkout() {
  const productId = useParams();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold m-3">Checkout</h1>
      <div className="form flex flex-col items-center border-2 p-3 w-screen md:w-3/4">
        <div className="w-4/5 flex flex-col">
            <label>Full name</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>Phone number</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>City / Village</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>Locality</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>Nearby landmark</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>PIN code</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>Introducer Phone Number</label>
            <input
            type="text"
            className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
        <div className="w-4/5 flex flex-col">
            <label>How did you get to know us? (Optional)</label>
            <input
            type="text"
            className="w-full h-16 border border-slate-500 rounded-md mb-2 shadow-md px-2"
            />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
