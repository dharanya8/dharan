import React, { useState } from "react";
import Filterbtn from "./Filterbtn";
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { IoLocationOutline } from "react-icons/io5";

const properties = [
  { 
    id: 1,    
    title: "Canvas Student Barnard Point, London",
    address: "N End Rd, Wembley, HA9 0UU",
    distance: "8.8 mi from City Center",
    travel: {
      bus: "33m",
      train: "46m",
      walk: "2h 55m",
 },
  roomOptions: 21,
    offers: 8,
    instantBooking: true,
    features: [
      "Pay In Instalment",
      "No Visa No Pay",
      "Gym",
      "Laundry Facility",
      "Study Area",
      "Study Spaces",
    ],
    images: ["/images/London3.avif", "/images/London2.avif"],
  },
  { id: 2, price: 12000, university: "Cambridge", images: ["/images/London1.avif", "/images/London2.avif"] },
  { id: 3, price: 6000, university: "Oxford", images: ["/images/London31.avif", "/images/London21.avif"] },
  { id: 4, price: 2000, university: "Cambridge", images: ["/images/Barcelona1.avif", "/images/Barcelona11.avif"] },
];

const Filterparent = () => {
  const [filteredData, setFilteredData] = useState(properties);

  return (
    <>
    <Container fluid>
      <Filterbtn data={properties} onFilter={setFilteredData} />

      {filteredData.map((item) => (
  <div key={item.id} className="card  mt-3 ms-4"style={{width:"73%"}}>

    <Row className="g-3 align-items-start">

      {/* IMAGE COLUMN */}
      <Col xs={12} md={4} lg={3}>
        {item.images && (
          <Carousel interval={null} indicators={false}>
            {item.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img}
                  alt={item.title}
                  className="w-100 "
                  style={{
                    height: "230px",
                    objectFit: "cover",
                    borderBottomLeftRadius:"5px",
                    bordertopLeftRadius:"5px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Col>

      {/* CONTENT COLUMN */}
      <Col xs={12} md={8} lg={9}>
        <h5 className="mb-1 fw-bold">{item.title}</h5>
        <p className="mb-2 text-dark"style={{fontSize:"14px"}}>{item.address}</p>

        {/* DISTANCE + TRAVEL */}
        <div className="d-flex flex-wrap gap-2 text-dark small mb-2">
          
          {item.distance && <span><IoLocationOutline/> {item.distance}</span>}
          <span>(</span>
          {item.travel?.bus && <span>🚌 {item.travel.bus}</span>}
          {item.travel?.train && <span>🚆 {item.travel.train}</span>}
          {item.travel?.walk && <span>🚶 {item.travel.walk}</span>}
          <span>)</span>
        </div>

        {/* ROOM / OFFER */}
        <div className="d-flex flex-wrap gap-2 mb-2">
          {item.roomOptions && (
            <span className="badge rounded-pill border text-dark">
              🛏 {item.roomOptions} Room Options
            </span>
          )}
          {item.offers && (
            <span className="badge rounded-pill border text-dark">
              🏷 {item.offers} Offers
            </span>
          )}
          {item.instantBooking && (
            <span className="badge rounded-pill border text-danger">
              ⚡ Instant Booking
            </span>
          )}
        </div>

        {/* FEATURES */}
        <div className="d-flex flex-wrap gap-2">
          {item.features?.map((feature, i) => (
            <span
              key={i}
              className="badge rounded-pill bg-light text-dark border"
            >
              {feature}
            </span>
          ))}
        </div>
      </Col>

    </Row>
  </div>
))}
</Container>
    </>
  );
};

export default Filterparent;
