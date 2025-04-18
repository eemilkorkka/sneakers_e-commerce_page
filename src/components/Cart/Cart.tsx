import { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContex";

interface CartProps {
    cartOpen: boolean;
}

const Cart = ({ cartOpen }: CartProps) => {
    
    const context = useContext(CartContext);

    if (!cartOpen) return null;

    return (
        <div className="cart-container">
            <h4 style={{ padding: "20px" }}>Cart</h4>
            <div className="cart-contents">
                {context?.isCartEmpty ? (
                    <span>Your cart is empty.</span>
                ) : (
                    <>
                        <CartItem />
                        <button className="checkout-button">Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
