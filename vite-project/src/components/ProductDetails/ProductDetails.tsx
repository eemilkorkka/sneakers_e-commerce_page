import "./ProductDetails.css";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";

const ProductDetails = () => {
    return (
        <div style={{flex: 1.5}}>
            <div className="product-details">
                <div className="product-details-top">
                    <p>SNEAKER COMPANY</p>
                    <h1>Fall Limited Edition <br /> Sneakers</h1>
                </div>
                <div className="paragraph">
                    <p>
                        These low profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole, they'll
                        withstand everything the weather can offer.
                    </p>
                </div>
                <div className="price">
                    <h2>$125.00</h2>
                    <div>
                        <p className="discount">50%</p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="amount-button">
                        <button>
                            <img src={plusIcon} />
                        </button>
                        <span>0</span>
                        <button>
                            <img src={minusIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;