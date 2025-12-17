import './Partnerwithus.css'
import partnercard from '../assets/partner/PartnerCard.avif'
import Listcard from '../assets/partner/ListCard.avif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Partnerwithus(){
    return(
    <div className="partner-section row1">
      <Container className='partner-container'>
        <Row className="g-4">
          <Col xs={12} md={6}>
            <div className="partner-card">

  <div className="partner-img-box">
    <img src={partnercard} className="partner-image" />
  </div>

  <div className="partner-text">
    <h4 className="fw-bold text-dark mt-3">Partner With Us</h4>
    <p className="text-secondary" style={{ fontSize: "18px" }}>
      At amber, we offer seamless booking<br/>process and a robust sales support.
    </p>
    <Button className="partner-btn  partner-btn1 mt-1">Partner With Us</Button>
  </div>

</div>     
          </Col>
          <Col xs={12} md={6}>
            <div className="partner-card">
              <div className="partner-img-box">
                <img src={Listcard} alt="list" className="partner-image" />
              </div>

              <div className="partner-text">
                <h4 className="fw-bold text-dark mt-3">List With Us</h4>
                <p className='text-secondary 'style={{fontSize:"18px"}}>List your properties efficiently with amber.</p>
                <Button className="partner-btn partner-btn1 mt-4">List Properties</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}
export default Partnerwithus;