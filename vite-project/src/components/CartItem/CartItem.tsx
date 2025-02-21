import { useContext } from "react";
import deleteIcon from "../../images/icon-delete.svg";
import thumbnail from "../../images/image-product-1-thumbnail.jpg";
import { CartContext } from "../../contexts/CartContex";
import "./CartItem.css";

const CartItem = () => {

    const context = useContext(CartContext);

    const price = context?.price ?? 125;
    const amount = context?.amount ?? 0;

    return (
        <div className="cart-item">
            <img src={thumbnail} className="thumbnail-icon" />
            <div className="cart-product-details">
                <span>Fall Limited Edition Sneakers</span>
                <span>$125.00 x {amount} <span style={{fontWeight: 700, color: "hsl(220, 13%, 13%)"}}>${price}.00</span></span>
            </div>
            <img src={deleteIcon} className="delete-icon" onClick={() => context?.setCartEmpty(true)} />
        </div>
    )
}

export default CartItem;