import { Row, Col } from 'react-bootstrap';
import Card from './Card/Card';
import './JoinMember.scss';

const JoinMember = () => {
  return (
    <div className="join-member">
      <p>Who can join Daji & Engineers</p>
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
      <button>View More</button>
    </div>
  )
}

export default JoinMember