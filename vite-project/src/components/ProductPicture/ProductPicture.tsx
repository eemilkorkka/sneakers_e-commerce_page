import { Dispatch, SetStateAction, useState } from "react";
import "./ProductPicture.css";
import ThumbnailRow from "../ThumbnailRow/ThumbnailRow";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import getWindowSize from "../../hooks/GetWindowSize";

interface ProductPictureProps {
    setProductPictureViewOpen: Dispatch<SetStateAction<boolean>>;
    productPictures: string[];
}

const ProductPicture = ({ setProductPictureViewOpen, productPictures }: ProductPictureProps) => {

    const size = getWindowSize();
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="product-picture-container">
            <div className="big-picture">
                <img src={productPictures[currentIndex]} alt="product image" onClick={() => setProductPictureViewOpen(true)} />
                { size.width && size.width <= 990 &&
                    <>
                        <NextButton 
                        productPictures={productPictures} 
                        currentIndex={currentIndex} 
                        setCurrentIndex={setCurrentIndex} 
                        style={{right: "25px"}} />
                        <PreviousButton 
                        productPictures={productPictures} 
                        currentIndex={currentIndex} 
                        setCurrentIndex={setCurrentIndex} 
                        style={{left: "25px"}}/>
                    </> 
                }
            </div>
            <ThumbnailRow currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    )
}

export default ProductPicture;