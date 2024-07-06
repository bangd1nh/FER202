import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Page.css';
import React, { useState } from 'react';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';

function Contact() {
    return (
        <form class="needs-validation" novalidate>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="firstName" required />
                    </div>
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
                    </div>
                    <div class="col">
                        <label for="exampleFormControlInput1" class="form-label">Username</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroup-sizing-sm">@</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
                        </div>

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-6">
                        <label for="exampleFormControlInput1" class="form-label">City</label>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">State</label>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">Zip</label>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
                    </div>
                </div>
                <div class="mt-3 form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                    <label class="form-check-label" for="flexCheckDefault">
                        Agree to terms and conditions
                    </label>
                    
                </div>
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
}

export default Contact;