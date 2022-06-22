import { app } from '../firebase'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import React from "react";

function AdminAddNewProduct() {

  const storage = getStorage(app);

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(false);
  const [quantity, setQuantity] = React.useState("");
  const [preview, setPreview] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, description, image, quantity);
  };

  const handleFileUpload = (e) => {
    setImage(true)
    const files = e.target.files

    // upload each file and update the preview for file preview
    for (const file of files) {
      console.log(file);
      const imageRef = ref(storage, `/productImage/${file.name}`);
      uploadBytes(imageRef, file).then(snapshot => {
        console.log(snapshot);
        setPreview(...preview, snapshot.metadata.fullPath);
      })
    }

  };

  return (
    <>
      <main className="w-full h-full flex flex-col items-center">
        <h2 className="text-xl font-semibold">Add new product</h2>

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
        <div>
          {preview?.map(image => (
            <img src={image} alt="product" className="w-full h-64" />
          ))}
        </div>
      </main>
    </>
  );
}

export default AdminAddNewProduct;
