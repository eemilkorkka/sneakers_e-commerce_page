import { useContext } from "react";
import CartIcon from "../CartIcon/CartIcon";
import "./CartButton.css";
import { CartContext } from "../../contexts/CartContex";

const CartButton = () => {

    const context = useContext(CartContext);

    const amount = context?.amount ?? 0;
    const isCartEmpty = context?.isCartEmpty ?? true;
    const setCartEmpty = context?.setCartEmpty ?? (() => {});

    const handleAddToCard = () => {
        if (amount > 0 && isCartEmpty) {
            setCartEmpty(false);
        }
    }

    return (
        <div className="cart-button-container">
            <button onClick={handleAddToCard}>
                <CartIcon fill="hsl(220, 13%, 13%)" />
                Add to cart
            </button>
        </div>
    )
}

export default CartButton;