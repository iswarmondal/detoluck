import React from 'react'
import { Link } from 'react-router-dom';
import uploadImage from '../assets/pngegg.png'

function ImageUpload() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-3 full-height orange-bg">
        <div className='image-upload-box'>
            <h3>Upload the image (only the front side is required)</h3>
            <br /><br />
                <div className="custom-file d-flex flex-column align-items-center justify-content-center">
                    <input type="file" src={uploadImage} className="custom-file-input image-upload-png" />
                <Link to="/" className='btn btn-success my-4'>Pay</Link>
                </div>
        </div>
    </div>
  )
}

export default ImageUpload