import { Dispatch, SetStateAction, useState } from "react";
import "./ProductPictureView.css";
import ThumbnailRow from "../ThumbnailRow/ThumbnailRow";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";

interface ProductPictureViewProps {
    productPictures: string[];
    setProductPictureViewOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductPictureView = ({ productPictures, setProductPictureViewOpen }: ProductPictureViewProps) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [fill, setFill] = useState<string>("");

    return (
        <div className="product-picture-view-container">
            <div className="close-icon-container" onClick={() => setProductPictureViewOpen(false)}>
                <CloseIcon fill={fill} setFill={setFill} />
            </div>
            <div className="image-container">
                <img src={productPictures[currentIndex]} />
                <NextButton 
                    productPictures={productPictures} 
                    currentIndex={currentIndex} 
                    setCurrentIndex={setCurrentIndex} 
                    style={{right: "-25px"}} />
                <PreviousButton 
                productPictures={productPictures} 
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex} 
                style={{left: "-25px"}} />
            </div>
            <ThumbnailRow currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} style={{width: "100px", height: "100%"}} />
        </div>
    )
}

export default ProductPictureView;