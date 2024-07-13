import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./cards.css";

function Cards() {
    return (
        <div className="container">
            <div className="card-group vgr-cards">
                <div className="card">
                    <div className="card-img-body">
                        <img className="card-img" src={require('../assets/post-sq-6.jpg')} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">News 1</h4>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <a href="#" className="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-body">
                        <img className="card-img" src={require('../assets/post-slide-2.jpg')} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">News 2</h4>
                        <p className="card-text">
                            This card has supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <a href="#" className="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-body">
                        <img className="card-img" src={require('../assets/post-sq-8.jpg')} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">News 3</h4>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <a href="#" className="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
