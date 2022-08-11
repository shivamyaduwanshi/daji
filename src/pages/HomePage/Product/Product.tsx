import { Row, Col } from 'react-bootstrap';
import Card from './Card/Card';
import './Product.scss';

const Product = () => {
  return (
    <div className="product">
      <p>Products</p>
      <Row xs={1} md={4} lg={4}>
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