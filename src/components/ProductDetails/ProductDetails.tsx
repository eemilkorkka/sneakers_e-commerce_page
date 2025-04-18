import { useState } from "react";
import "./ProductDetails.css";
import CounterButton from "../CounterButton/CounterButton";
import CartButton from "../CartButton/CartButton";

const ProductDetails = () => {

    const [amount, setAmount] = useState<number>(0);
    const [price, setPrice] = useState<number>(125);

    return (
        <div className="product-details">
            <div className="product-details-top">
                <p>SNEAKER COMPANY</p>
                <h1>Fall Limited Edition <br /> Sneakers</h1>
            </div>
            <div className="paragraph">
                <p>
                    These low profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>
            </div>
            <div className="price-container">
                <div className="price">
                    <h2>${price}.00</h2>
                    <div className="discount-container">
                        <p className="discount">50%</p>
                    </div>
                </div>
                <div className="old-price-container">
                    <span className="old-price">${price * 2}.00</span>
                </div>
            </div>
            <div className="buttons">
                <CounterButton amount={amount} setAmount={setAmount} price={price} setPrice={setPrice} />
                <CartButton amount={amount} price={price} />
            </div>
        </div>
    )
}

export default ProductDetails;