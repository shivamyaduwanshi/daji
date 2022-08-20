import Card from './card/card';
import './FeaturedHomeDesign.scss';
import axiosClient from 'utils/axios-client';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const FeaturedHomeDesign = () => {
  const [homeDesigns, setHomeDesigns] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedHomeDesign, setSelectedHomeDesign] = useState<any>(null);

  const getHomeDesigns = () => {
    axiosClient('/home-designs')
      .then((response) => {
        setHomeDesigns(response.data.data);
      });
  }

  const openModal = (id: number) => {
    const homeDesign = homeDesigns.find((homeDesign: any) => homeDesign.id === id);
    setSelectedHomeDesign(homeDesign);
    setShow(true);
  }

  const downloadDoc = async (id: number) => {
    await axiosClient('/download-home-design-docs')
      .then((response) => {
             console.log(response);
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
                  <Card id={homeDesign.id} title={homeDesign.title} image={homeDesign.imageUrl} key={homeDesign.id} openModal={openModal} />
                </Col>
              )
            }
          })
        }
      </Row>
      <Modal
        show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Home Design</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='home-design-modal'>
            <h2 className="title">{selectedHomeDesign?.title}</h2>
            <div className='content'>
              <img className='image' src={selectedHomeDesign?.imageUrl} alt={selectedHomeDesign?.title} />
              <div className="details">
                <p><b>Size :</b>{selectedHomeDesign?.title}</p>
                <p><b>Type :</b>{selectedHomeDesign?.type}</p>
                <p><b>Download Docs :</b><button className="download-docs" onClick={() => downloadDoc(selectedHomeDesign?.id)}>Download here</button></p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default FeaturedHomeDesign