import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { MdOutlineBathtub, MdKitchen, MdHeight } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
function RoomCard() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("selectedProperty");
    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  if (!item) return null;

  return (
    <Card className="shadow-sm border-0  mb-4" style={{ width: "66%" }}>
      
      {/* TOP SECTION */}
      <Row className="p-3">
        {/* IMAGE */}
        <Col md={3}>
          <img
            src={item.images ? item.images[0] : item.image}
            alt={item.name}
            className="img-fluid rounded"style={{height:"115%"}}
          />
        </Col>

        {/* CONTENT */}
        <Col md={9}>
          <h5 className="fw-bold">{item.name}</h5>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Badge bg="success">Available from: 27 Dec, 2025</Badge>
            <span className="text-muted">
              Starting From: <strong>£350/week</strong>
            </span>
          </div>

          <div className="d-flex flex-wrap gap-4 text-muted mb-2">
            <span><IoBedOutline /> Shared Room</span>
            <span><MdOutlineBathtub /> Shared Bathroom</span>
            <span><MdKitchen /> Shared Kitchen</span>
          </div>

          <a href="#" className="text-danger fw-semibold text-decoration-none">
            View More Details →
          </a>
        </Col>
      </Row>
      <hr />
      {/* BOTTOM */}
      <Row className="align-items-center"style={{padding:"0px 20px"}}>
        <Col md={8}>
          <div className="d-flex gap-5 text-muted">
            <div>
              <small>Duration</small>
              <p className="fw-semibold mb-0">33 weeks</p>
            </div>
            <div>
              <small>Available From</small>
              <p className="fw-semibold mb-0">27 Dec, 2025</p>
            </div>
            <div>
              <small>Move Out</small>
              <p className="fw-semibold mb-0">15 Aug, 2026</p>
            </div>
          </div>
        </Col>

        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <p className="fw-bold mb-1">£350/week</p>
          <Button className="px-4" style={{ background: "#ed3a56", border: "none" }}>
            Book
          </Button>
        </Col>
      </Row><hr/> 
      <Row className="align-items-center"style={{padding:"0px 20px",paddingBottom:"20px"}}>
        <Col md={8}>
          <div className="d-flex gap-5 text-muted">
            <div>
              <small>Duration</small>
              <p className="fw-semibold mb-0">33 weeks</p>
            </div>
            <div>
              <small>Move In</small>
              <p className="fw-semibold mb-0">12 Sep, 2025</p>
            </div>
            <div>
              <small>Move Out</small>
              <p className="fw-semibold mb-0">15 Sep, 2026</p>
            </div>
          </div>
        </Col>

        <Col md={4} className="text-md-end mt- mt-md-0">
          <p className="fw-bold mb-1">£355/week</p>
          <Button className="px-4" style={{ background: "#ed3a56", border: "none" }}>
            Book
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default RoomCard;
