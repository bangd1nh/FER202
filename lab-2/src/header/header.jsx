import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './navbar';

function Header() {
    return (
        <>
            <Navbar></Navbar>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('../asset/pizza1.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Neapolitan Pizza</h5>
                            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../asset/pizza2.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Neapolitan Pizza</h5>
                            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../asset/pizza3.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Neapolitan Pizza</h5>
                            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../asset/pizza4.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Neapolitan Pizza</h5>
                            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../asset/pizza5.jpg')} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Neapolitan Pizza</h5>
                            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>

    );
}
export default Header;