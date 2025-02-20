import { useState } from "react";
import "./ProductPicture.css";
import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";

const ProductPicture = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const productPictures = [
        image1,
        image2,
        image3,
        image4
    ]
  
    const productThumbnails = [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4
    ]

    return (
        <div className="product-picture-container">
            <div className="big-picture">
                <img src={productPictures[currentIndex]} alt="product image" />
            </div>
            <div className="thumbnails">
                {productThumbnails.map((productThumbnail, index) => {
                    return (
                        <div className={currentIndex === index ? "thumbnail-active" : "thumbnail"}>
                            <img 
                                src={productThumbnail}
                                style={{width: "100%"}}
                                onClick={() => setCurrentIndex(index)}
                            />
                        </div>
                    )
                })}
            </div>  
        </div>
    )
}

export default ProductPicture;