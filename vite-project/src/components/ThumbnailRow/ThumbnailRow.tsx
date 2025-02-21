import { Dispatch, SetStateAction } from "react";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import "./ThumbnailRow.css";

interface ThumbnailRowProps {
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    style?: React.CSSProperties;
}

const ThumbnailRow = ({ currentIndex, setCurrentIndex, style }: ThumbnailRowProps) => {

    const productThumbnails = [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4
    ]

    return (
        <div className="thumbnails">
            {productThumbnails.map((productThumbnail, index) => {
                return (
                    <div className={currentIndex === index ? "thumbnail-active" : "thumbnail"}>
                        <img 
                            src={productThumbnail}
                            onClick={() => setCurrentIndex(index)}
                            style={style}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ThumbnailRow;