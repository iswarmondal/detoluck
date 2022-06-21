import React from 'react'

function CheckoutForm(props) {
    return (
        <>
            <div className="form flex flex-col items-center border-2 p-3 w-4/5 ">
                <div className="w-4/5 flex flex-col">
                    <label>Full name</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setFullName(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>Phone number</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setPhone(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>City / Village</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setCity(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>Locality</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setLocality(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>Nearby landmark</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setNearbyLandmark(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>PIN code</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setPinCode(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>Introducer Phone Number</label>
                    <input
                        type="text"
                        className="w-full h-8 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setIntroducerPhone(e.target.value)}
                    />
                </div>
                <div className="w-4/5 flex flex-col">
                    <label>How did you get to know us? (Optional)</label>
                    <input
                        type="text"
                        className="w-full h-16 border border-slate-500 rounded-md mb-2 shadow-md px-2"
                        onChange={(e) => props.setHowDidYouKnowUs(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default CheckoutForm