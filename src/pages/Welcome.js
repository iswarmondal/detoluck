import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-3 full-height orange-bg">
            <div className="container register-box">
                <div class="container input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Full name</span>
                    </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="container input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Account number</span>
                    </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="container input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">IFSC code</span>
                    </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="container input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Phone Number</span>
                    </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="container input-group input-group-sm mb-3">
                    <Link to="/image-upload" className="btn btn-success">Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome