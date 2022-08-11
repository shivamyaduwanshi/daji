import AmbujaCement from 'assets/images/ambuja-cement.png';
import './Card.scss';

const Card = () => {
    return (
        <div className="expert-card">
            <div className="user-image">
                 <img src={AmbujaCement} alt="Ambuja Cement" />
            </div>
            <p className="title">Roman Reign</p>
            <p className="rating">*****</p>
            <table className="expert-details">
                <tr>
                    <td>City</td>
                    <td>Indore</td>
                </tr>
                <tr>
                    <td>Profession</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>Expression</td>
                    <td>5 Year+</td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>M.P</td>
                </tr>
            </table>
        </div>
    )
}

export default Card