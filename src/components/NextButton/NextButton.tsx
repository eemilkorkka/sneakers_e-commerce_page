import { Dispatch, SetStateAction, useState } from "react";
import NextIcon from "../Icons/NextIcon/NextIcon"
import "./NextButton.css";

interface NextButtonProps {
    productPictures: string[];
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    style?: React.CSSProperties;
}

const NextButton = ({ productPictures, currentIndex, setCurrentIndex, style }: NextButtonProps) => {

    const [stroke, setStroke] = useState<string>("");

    const handleNextButtonClick = () => {
        currentIndex == productPictures.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    return (
        <button 
            className="next-button" 
            style={style}
            onMouseEnter={() => setStroke("hsl(26, 100%, 55%)")} 
            onMouseLeave={() => setStroke("#1D2026")}
            onClick={handleNextButtonClick}>
                <NextIcon stroke={stroke} />
        </button>
    )
}

export default NextButton;