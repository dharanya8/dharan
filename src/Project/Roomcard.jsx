import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub, MdKitchen } from "react-icons/md";
import "./Roomcard.css";
import Booknow from "./Booknow";

function RoomCard() {
  const rooms = [
    {
      id: 1,
      duration: "33 weeks",
      moveIn: "27 Dec, 2025",
      moveOut: "15 Aug, 2026",
      price: "£350/week",
    },
    {
      id: 2,
      duration: "33 weeks",
      moveIn: "12 Sep, 2025",
      moveOut: "15 Sep, 2026",
      price: "£355/week",
    },
  ];

  const [item, setItem] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookNow, setShowBookNow] = useState(false);

  const handleOpen = (room) => {
    setSelectedRoom(room);
    setShowBookNow(true);
  };

  const handleClose = () => {
    setShowBookNow(false);
    setSelectedRoom(null);
  };

  useEffect(() => {
    const data = localStorage.getItem("selectedProperty");
    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  if (!item) return null;

  return (
    <>
      <Card className="shadow-sm border-0 Roomcard mb-4" style={{ width: "66%" }}>
        {/* TOP */}
        <Row className="p-3">
          <Col md={3}>
            <img
              src={item.images?.[0] || item.image}
              alt={item.name}
              className="img-fluid rounded"
            />
          </Col>

          <Col md={9}>
            <h5 className="fw-bold">{item.name}</h5>
            <Badge bg="success" className="mb-2">
              Available
            </Badge>

            <div className="d-flex gap-4 text-muted mb-2">
              <span><IoBedOutline /> Shared Room</span>
              <span><MdOutlineBathtub /> Shared Bathroom</span>
              <span><MdKitchen /> Shared Kitchen</span>
            </div>
          </Col>
        </Row>

        <hr />

        {/* ROOMS LIST */}
        {rooms.map((room) => (
          <React.Fragment key={room.id}>
            <Row className="px-4 align-items-center">
              <Col md={8}>
                <div className="d-flex gap-5 text-muted">
                  <div>
                    <small>Duration</small>
                    <p className="fw-semibold mb-0">{room.duration}</p>
                  </div>
                  <div>
                    <small>Move In</small>
                    <p className="fw-semibold mb-0">{room.moveIn}</p>
                  </div>
                  <div>
                    <small>Move Out</small>
                    <p className="fw-semibold mb-0">{room.moveOut}</p>
                  </div>
                </div>
              </Col>

              <Col md={4} className="text-md-end">
                <p className="fw-bold mb-1">{room.price}</p>
                <Button
                  style={{ background: "#ed3a56", border: "none" }}
                  onClick={() => handleOpen(room)}
                >
                  Book
                </Button>
              </Col>
            </Row>
            <hr />
          </React.Fragment>
        ))}
      </Card>

      {/* BOOK NOW MODAL */}
      <Booknow
        show={showBookNow}
        handleClose={handleClose}
        item={item}
        room={selectedRoom}
      />
    </>
  );
}

export default RoomCard;
