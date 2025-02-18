import "./CounterButton.css";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContex";

const CounterButton = () => {

    const context = useContext(CartContext);

    const amount = context?.amount ?? 0;
    const setAmount = context?.setAmount ?? (() => {});
    const price = context?.price ?? 125;
    const setPrice = context?.setPrice ?? (() => {});

    const handleButtonClick = (type: string) => {

        if (type == "minus") {
            setAmount(amount > 0 ? amount - 1 : 0);
            setPrice(amount > 1 ? price - 125 : 125);
        } 

        if (type == "plus") {
            setAmount(amount + 1);
            setPrice(amount > 0 ? price + 125 : 125);
        }
    }

    return (
        <div className="counter-button-container">
            <button onClick={() => handleButtonClick("minus")}>
                <img src={minusIcon} />
            </button>
            <span>{amount}</span>
            <button onClick={() => handleButtonClick("plus")}>
                <img src={plusIcon} />
            </button>
        </div>
    )
}

export default CounterButton;