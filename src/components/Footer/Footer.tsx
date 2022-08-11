import './Footer.scss';
import FooterLogo from 'assets/logo/footer-logo.png';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Row xs={1} md={5} lg={5}>
          <Col>
            <div className="footer-item">
              <img src={FooterLogo} alt="Footer Logo" className="footer-logo" />
            </div>
          </Col>
          <Col>
            <div className="footer-item">
              <h5>DAJI Franchise</h5>
              <ul>
                <li>Indore</li>
                <li>Bhopal</li>
                <li>Neemach</li>
                <li>Ratlam</li>
                <li>Gawaliar</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-item">
              <h5>Information</h5>
              <ul>
                <li>About us</li>
                <li>Terms and Conditions</li>
                <li>Intellectual property</li>
                <li>Privacy policy</li>
                <li>Conplaint and Suggestions</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-item">
              <h5>Other</h5>
              <ul>
                <li>FAQ</li>
                <li>Contact us</li>
                <li>Careet</li>
                <li>Our Team</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-item contact-us">
              <h5>Contact us</h5>
              <p>80/12 Patanipura Indore, Madhaya Pradesh
                - 452011</p>
              <p>+91 9876543210</p>
              <p>info@daji.com</p>
            </div>
          </Col>
        </Row>
        <div className="copy-write">copyrigh@2022 Dagi & Engineers</div>
      </div>
    </>
  )
}

export default Footer;