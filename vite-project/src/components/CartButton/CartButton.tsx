import { useContext } from "react";
import CartIcon from "../CartIcon/CartIcon";
import "./CartButton.css";
import { CartContext } from "../../contexts/CartContex";

interface CartButtonProps {
    amount: number;
    price: number;
}

const CartButton = ({ amount, price }: CartButtonProps) => {

    const context = useContext(CartContext);

    const handleAddToCard = () => {
        if (amount > 0) {
            context?.setCartEmpty(false);
            context?.setAmount(amount);
            context?.setPrice(price);
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