import React from "react";

const Card = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src="/../../public/assets/orange-drink-bottle.png" />
                </div>
                <div className = "contentBx">
                    <h2>Sublime Orange Carrot</h2>
                    <p>12 oz</p>
                    <p>$4.99</p>
                    <a href = "#">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;