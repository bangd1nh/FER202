import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function navbar() {
    return (
        <nav class='navbar navbar-dark bg-dark navbar-expand'>
            <div class='container'>
                <ul class="navbar-nav">
                    <li class="navbar-brand ">Pizza House</li>
                    <li class="nav-item pe-2 ps-2 ms-2">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item pe-2 ps-2 ms-2">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item pe-2 ps-2 ms-2">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex w-25  " role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-danger" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
    );
}
export default navbar;