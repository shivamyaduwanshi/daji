import './ClientFeedback.scss';
import UserImage from 'assets/images/user-image.jpg';

const ClientFeedback = () => {
  return (
    <div className="client-feedback">
      <p className="title">What our clients are says</p>
      <p className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab beatae nihil atque maxime? Vel doloremque quibusdam velit magnam, mollitia eum cum a placeat magni maxime blanditiis repellendus molestias dolor.</p>
      <img src={UserImage} alt="user" />
    </div>
  )
}

export default ClientFeedback;