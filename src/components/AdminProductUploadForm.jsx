import React from 'react'

function AdminProductUploadForm({ setName, setPrice, setDescription, setQuantity, handleFileUpload, handleSubmit, image }) {
    return (
        <>
            <form className="w-full p-3">
                <div>
                    <label className="text-sm font-semibold" htmlFor="name">
                        Title
                    </label>
                    <input
                        className="w-full p-2 border-2 rounded-md border-slate-400"
                        type="text"
                        id="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full p-2 border-2 rounded-md border-slate-400"
                        type="number"
                        id="price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="w-full p-2 border-2 rounded-md border-slate-400 h-48"
                        id="description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="w-full p-2 border-2 rounded-md border-slate-400"
                        type="file"
                        id="image"
                        multiple
                        required
                        onChange={handleFileUpload}
                        disabled={image ? true : false}
                    />
                </div>
                <div>
                    <label
                        className="text-sm font-semibold"
                        htmlFor="inventoryQuantity"
                    >
                        Quantity
                    </label>
                    <input
                        className="w-full p-2 border-2 rounded-md border-slate-400"
                        type="number"
                        id="inventoryQuantity"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="p-2 my-4 rounded border-2 bg-yellow-500 text-white hover:bg-yellow-700"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminProductUploadForm