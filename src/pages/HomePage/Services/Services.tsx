import { Row, Col } from 'react-bootstrap';
import Card from './Card/Card';
import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <p>Featured Services</p>
        <Row xs={1} md={6} lg={6}>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
    </div>
  )
}

export default Services;