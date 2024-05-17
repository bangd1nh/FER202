import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

function Body() {
    return (
        <div class="container-fluid container-bg">
            <div class="container">
                <h1 class="text-white pt-5">Our Menu</h1>
                <div>
                    <div class="row">
                        <div class="row row-cols-4 row-cols-1">
                            <div class="col">
                                <div class="card">
                                    <div class="position-absolute sale pe-3 ps-3 text-uppercase fw-bold">sale</div>
                                    <img src={require('../asset/menu1.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text">Margherita Pizza</h4>
                                        <p class="card-text d-inline text-decoration-line-through">$40.00</p>
                                        <p class="card-text d-inline final-price fw-bold">$24.00</p>
                                        <button class="w-100 btn btn-dark mt-3">Buy</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card ">
                                    <img src={require('../asset/menu2.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text">Mushroom Pizza</h4>
                                        <p class="card-text d-inline">$20.00</p>
                                        <button class="w-100 btn btn-dark mt-3">Buy</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card ">
                                    <div class="position-absolute sale pe-3 ps-3 text-uppercase fw-bold">NEW</div>
                                    <img src={require('../asset/menu3.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text">Hawaiian Pizza</h4>
                                        <p class="card-text d-inline">$30.00</p>
                                        <button class="w-100 btn btn-dark mt-3">Buy</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="position-absolute sale pe-3 ps-3 text-uppercase fw-bold">sale</div>
                                    <img src={require('../asset/menu4.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text">Pesto Pizza</h4>
                                        <p class="card-text d-inline text-decoration-line-through">$50.00</p>
                                        <p class="card-text d-inline final-price fw-bold">$30.00</p>
                                        <button class="w-100 btn btn-dark mt-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="container">
                    <form>
                        <div class="mt-5">
                            <h1 class="text-center text-white">Book Your Table</h1>
                        </div>
                        <div class="row">
                            <input class="col form-control" placeholder="Your Name"></input>
                            <input class="col me-3 ms-3 form-control" placeholder="Your Email"></input>
                            <select class="col form-control me-4" >
                                <option>Select a Service</option>
                            </select>
                        </div>
                        <textarea class="form-control mt-5 row" rows="6" placeholder="Please write your comment"></textarea>
                        <button class="row btn btn-warning btn-send-message mt-3 ps-4 pe-4 mb-5">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Body;