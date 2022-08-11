import { Row, Col } from 'react-bootstrap';
import Card from './Card/Card';
import './Expert.scss';

const Product = () => {
  return (
    <div className="expert">
      <p>Expert servicemen around you</p>
      <Row xs={1} md={5} lg={5}>
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

export default Product