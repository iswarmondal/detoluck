import React from "react";
import { app } from '../firebase'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage'
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
import AdminProductUploadForm from './AdminProductUploadForm';

function AdminAddNewProduct() {

  const storage = getStorage(app);

  const db = getFirestore(app);

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(false);
  const [quantity, setQuantity] = React.useState("");
  const [preview, setPreview] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, description, image, quantity);
    try {
      const docRef = addDoc(collection(db, "products"), {
        name,
        price,
        description,
        preview,
        quantity
      })
      console.log(`Document ${docRef.id} created successfully.`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileUpload = async (e) => {
    setImage(true)
    const files = e.target.files

    // upload each file and update the preview for file preview
    for (const file of files) {
      const fileName = `${Date.now()}_${file.name}`
      const imageRef = ref(storage, `/productImage/${fileName}`);
      await uploadBytes(imageRef, file)

      const url = await getDownloadURL(imageRef)
      setPreview([...preview, url]);
    }

  };

  return (
    <>
      <main className="w-full h-full flex flex-col items-center">
        <h2 className="text-xl font-semibold">Add new product</h2>

        <AdminProductUploadForm
          setDescription={setDescription}
          setName={setName}
          setPrice={setPrice}
          setQuantity={setQuantity}
          setImage={setImage}
          handleFileUpload={handleFileUpload}
          handleSubmit={handleSubmit}
          image={image}
        />
        <div className='flex w-full h-auto'>
          {
            preview.length > 0 ?
              preview.map((image, i) => (
                <img src={image} alt="product" className="w-40 h-auto" key={i} />
              )) : null
          }
        </div>
      </main>
    </>
  );
}

export default AdminAddNewProduct;
