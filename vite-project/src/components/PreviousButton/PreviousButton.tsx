import { Dispatch, SetStateAction, useState } from "react";
import PreviousIcon from "../Icons/PreviousIcon/PreviousIcon";
import "./PreviousButton.css";

interface PreviousButtonProps {
    productPictures: string[];
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    style?: React.CSSProperties;
}

const PreviousButton = ({ productPictures, currentIndex, setCurrentIndex, style }: PreviousButtonProps) => {

    const [stroke, setStroke] = useState<string>("");

    const handlePreviousButtonClick = () => {
        currentIndex == 0 ? setCurrentIndex(productPictures.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    return (
        <button 
            className="previous-button"
            style={style} 
            onMouseEnter={() => setStroke("hsl(26, 100%, 55%)")} 
            onMouseLeave={() => setStroke("#1D2026")}
            onClick={handlePreviousButtonClick}>
                <PreviousIcon stroke={stroke} />
        </button>
    )
}

export default PreviousButton;