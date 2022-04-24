import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-3 full-height orange-bg">
            <form action='/payment' className="container-xs register-box">
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
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Select amound</span>
                    </div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected value="50">50</option>
                            <option value="20">20</option>
                            <option value="100">100</option>
                            <option value="1">1</option>
                        </select>
                </div>
                <div class="container mb-3">
                    <h4>Select image (Only the front page)</h4>
                        <input type="file" class="" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="container input-group input-group-sm mb-3">
                    <button type='submit' className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Welcome