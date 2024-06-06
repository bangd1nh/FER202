import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Product() {
    return (
        <div class="container pb-5 pt-5">
            <div class="p-2">
                <h1 class="text-uppercase fw-light">
                    new product
                </h1>
                <p class="fw-light">
                    List product description
                </p>
            </div>
            <div class="row row-cols-1 row-cols-4 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErJOjSBQA4aZrFxgTPkQsF_A4JkV-PmuCDA&s" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-light">Product</h5>
                            <div class="">
                                <p class="d-inline text-decoration-line-through me-5">100.000 vnd</p>
                                <p class="d-inline text-warning ms-5">80.000 vnd</p>
                            </div>
                            <button class="ps-2 pe-2 border border-primary-subtle border-2 bg-primary"><i class="bi bi-cart-fill"></i></button>
                            <button class="fw-light border border-primary-subtle border-2 bg-light ms-2 p-1 ps-2 pe-2">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErJOjSBQA4aZrFxgTPkQsF_A4JkV-PmuCDA&s" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-light">Product</h5>
                            <div class="">
                                <p class="d-inline text-decoration-line-through me-5">100.000 vnd</p>
                                <p class="d-inline text-warning ms-5">80.000 vnd</p>
                            </div>
                            <button class="ps-2 pe-2 border border-primary-subtle border-2 bg-primary"><i class="bi bi-cart-fill"></i></button>
                            <button class="fw-light border border-primary-subtle border-2 bg-light ms-2 p-1 ps-2 pe-2">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErJOjSBQA4aZrFxgTPkQsF_A4JkV-PmuCDA&s" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-light">Product</h5>
                            <div class="">
                                <p class="d-inline text-decoration-line-through me-5">100.000 vnd</p>
                                <p class="d-inline text-warning ms-5">80.000 vnd</p>
                            </div>
                            <button class="ps-2 pe-2 border border-primary-subtle border-2 bg-primary"><i class="bi bi-cart-fill"></i></button>
                            <button class="fw-light border border-primary-subtle border-2 bg-light ms-2 p-1 ps-2 pe-2">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErJOjSBQA4aZrFxgTPkQsF_A4JkV-PmuCDA&s" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-light">Product</h5>
                            <div class="">
                                <p class="d-inline text-decoration-line-through me-5">100.000 vnd</p>
                                <p class="d-inline text-warning ms-5">80.000 vnd</p>
                            </div>
                            <button class="ps-2 pe-2 border border-primary-subtle border-2 bg-primary"><i class="bi bi-cart-fill"></i></button>
                            <button class="fw-light border border-primary-subtle border-2 bg-light ms-2 p-1 ps-2 pe-2">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;