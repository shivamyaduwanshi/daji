import AmbujaCement from 'assets/images/ambuja-cement.png';
import './Card.scss';

const Card = () => {
    return (
        <div className="product-card">
            <img src={AmbujaCement} alt="Ambuja Cement" />
            <div className="product-details">
                <p className="title">Ambuja CC Cement</p>
                <div className="price">
                    <span>MRP: ₹ 300.00</span>
                    <span>₹200.00/Bag</span>
                </div>
                <button>Call to order</button>
            </div>
        </div>
    )
}

export default Card