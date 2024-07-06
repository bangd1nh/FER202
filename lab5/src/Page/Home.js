import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Page.css';

function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/slide1.jpg" class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/slide2.jpg" class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/slide3.jpg" class="d-block w-100" alt="" />
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
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <img src="images/menu-01.jpg" class="menu" alt=""/>
                    </div>
                    <div class="col">
                        <img src="images/menu-02.jpg" class="menu" alt=""/>
                    </div>
                    <div class="col">
                        <img src="images/menu-03.jpg" class="menu" alt=""/>
                    </div>
                    <div class="col">
                        <img src="images/menu-04.jpg" class="menu" alt=""/>
                    </div>
                    <div class="col">
                        <img src="images/menu-05.jpg" class="menu" alt=""/>
                    </div>
                    <div class="col">
                        <img src="images/menu-06.jpg" class="menu" alt=""/>
                    </div>
                </div>
            </div>
            <h1 class="sign">This is Home Page</h1>
        </>
    );
}

export default Home;