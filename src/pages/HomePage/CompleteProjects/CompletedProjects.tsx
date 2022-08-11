import { Row, Col } from 'react-bootstrap';
import './CompletedProjects.scss';
import Project from './Project/Project';

const CompleteProjects = () => {
  return (
    <div className="completed-projects">
      <p>Out Competed Projects</p>
      <Row xs={1} md={4} lg={4}>
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
      </Row>
      <button>View More</button>
    </div>
  )
}

export default CompleteProjects