import React from "react";
import {
  Modal,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const Booknow = ({ show, handleClose, item }) => {
  if (!item) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {/* LEFT */}
          <Col md={5}>
            <Card className="border-0">
              <Card.Img src={item.images ? item.images[0] : item.image} />
              <Card.Body>
                <h6 className="fw-bold">{item.name}</h6>
                <p className="text-muted">{item.location}</p>
                <p className="fw-bold">£350 / week</p>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT */}
          <Col md={7}>
            <div className="mb-3">
              <label>Your Full Name *</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label>Your Email *</label>
              <input className="form-control" />
            </div>

            <button
              className="btn w-100 text-white"
              style={{ background: "#ed3a56" }}
            >
              Submit
            </button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Booknow;
