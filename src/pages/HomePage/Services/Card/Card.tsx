import FloorImage from 'assets/images/floor-plan.png';
import './Card.scss';


const Card = () => {
    return (
        <div className="service-card">
            <img src={FloorImage} alt="Floor" />
        </div>
    )
}

export default Card