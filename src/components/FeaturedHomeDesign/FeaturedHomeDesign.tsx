import Card from './card/card';
import './FeaturedHomeDesign.scss';
import axiosClient from 'utils/axios-client';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const FeaturedHomeDesign = () => {
  const [homeDesigns, setHomeDesigns] = useState([]);

  const getHomeDesigns = () => {
    axiosClient('/home-designs')
      .then((response) => {
        setHomeDesigns(response.data.data);
      });
  }

  useEffect(() => {
    getHomeDesigns();
  }, []);

  return (
    <div className="featured-home-design">
      <p>Featured Home Design</p>
      <Row xs={1} md={4} lg={4}>
        {
          homeDesigns.map((homeDesign: any, index) => {
            if (index < 4) {
              return (
                <Col key={homeDesign.id}>
                  <Card title={homeDesign.title} image={homeDesign.imageUrl} key={homeDesign.id} />
                </Col>
              )
            }
          })
        }
      </Row>
    </div>
  )
}

export default FeaturedHomeDesign