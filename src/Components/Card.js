import React from "react";

const Card = () => {
    return (
        <div className="container">
            <div className="card">
                <img src="/../../public/assets/oranges-carrots.png" />
                <div className="imgBx">
                    <img src="/../../public/assets/orange-drink-bottle.png" />
                </div>
                <div className = "contentBx">
                    <h2>Sublime Orange Carrot</h2>
                    <div class="size">
                        <h3>Size : </h3>
                        <span>8 oz</span>
                        <span>12 oz</span>
                        <span>16 oz</span>
                    </div>
                    <p>$4.99</p>
                    <a href = "#">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;