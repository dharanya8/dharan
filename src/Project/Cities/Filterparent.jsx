import React, { useState } from "react";
import Filterbtn from "./Filterbtn";
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { IoLocationOutline } from "react-icons/io5";
import { LiaBusAltSolid } from "react-icons/lia";
import { PiTrainLight } from "react-icons/pi";
import { LiaWalkingSolid } from "react-icons/lia";
import { TbBed } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiBlackBook } from "react-icons/gi";

import './Filterparent.css'
const properties = [
  { 
    id: 1,    
    title: "Canvas Student Barnard Point, London",
      university: "Canvas Student Barnard Point",
    address: "N End Rd, Wembley, HA9 0UU",
    distance: "8.8 mi from City Center",
    travel: {
      bus: "33m",
      train: "46m.",
      walk: "2h 55m",
 },
  roomOptions: 21,
    offers: 8,
    instantBooking: true,
    features: {
     "Pay In Instalment":<FaRegCircleCheck/>,
      "No Visa No Pay":<FaRegCircleCheck/>,
      "Gym":<CgGym/>,
      "Laundry Facility":<CgSmartHomeWashMachine/>,
      "Study Area":< GiBlackBook/>,
      "Study Spaces":<GiBlackBook/>,
    },
    images: ["/images/London3.avif", "/images/London2.avif"],
  },
  { 
    id: 2,    
    title: "Axo Waterloo, London",
    address: "Secker St,London,SE1 8UF",
    distance: "0.9 mi from City Center",
    travel: {
      bus: "9m",
      train: "15m.",
      walk: "22m",
 },
  roomOptions: 15,
    offers: 6,
    instantBooking: true,
    features: {
     "Pay In Instalment":<FaRegCircleCheck/>,
      "No Visa No Pay":<FaRegCircleCheck/>,
      "Gym":<CgGym/>,
      "Laundry Facility":<CgSmartHomeWashMachine/>,
      "Study Area":< GiBlackBook/>,
      "Study Spaces":<GiBlackBook/>,
    },
    images: ["/images/London1.avif", "/images/London21.avif"],
  },
  { 
    id: 3,    
    title: "Wellington Lodge, London",
    address: "Waterloo Rd,London, SE1 8RQ",
    distance: "1.2 mi from City Center",
    travel: {
      bus: "11m",
      train: "18m.",
      walk: "29m",
 },
  roomOptions: 6,
    offers: 8,
    instantBooking: true,
    features: {
     "Pay In Instalment":<FaRegCircleCheck/>,
      "No Visa No Pay":<FaRegCircleCheck/>,
      "Gym":<CgGym/>,
      "Laundry Facility":<CgSmartHomeWashMachine/>,
      "Study Area":< GiBlackBook/>,
      "Study Spaces":<GiBlackBook/>,
    },
    images: ["/images/London4.avif", "/images/London31.avif"],
  },
  { 
    id: 4,    
    title: "iQ Paris Gardens, London",
    address: "Paris Garden,London,SE1 8ND",
    distance: "1.2 mi from City Center",
    travel: {
      bus: "11m",
      train: "16m.",
      walk: "24m",
 },
  roomOptions: 21,
    offers: 8,
    instantBooking: true,
    features: {
     "Pay In Instalment":<FaRegCircleCheck/>,
      "No Visa No Pay":<FaRegCircleCheck/>,
      "Gym":<CgGym/>,
      "Laundry Facility":<CgSmartHomeWashMachine/>,
      "Study Area":< GiBlackBook/>,
      "Study Spaces":<GiBlackBook/>,
    },
    images: ["/images/London5.avif", "/images/London51.avif"],
  },
];

const Filterparent = () => {
  const [filteredData, setFilteredData] = useState(properties);

  return (
    <>
    <Container fluid >
      <Filterbtn data={properties} onFilter={setFilteredData} />

      {filteredData.map((item) => (
  <div key={item.id} className="card  mt-3 ms-4 fluid"style={{width:"73%",cursor:"pointer"}}>

    <Row className="g-3 align-items-start ">

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
      <div className="w-md-50"style={{width:"55%"}}>
      <Col xs={12} md={8} lg={9}className="mt-3">
        <h5 className="mb-1 fw-bold">{item.title}</h5>
        <p className="mb-2 text-dark"style={{fontSize:"14px"}}>{item.address}</p>

        {/* DISTANCE + TRAVEL */}
        <div className="d-flex flex-wrap gap-2 text-dark small mb-2">
          
          {item.distance && <span><IoLocationOutline/> {item.distance}</span>}
          <span>(</span>
          {item.travel?.bus && <span><LiaBusAltSolid className="text-secondary"/> {item.travel.bus}</span>}
          {item.travel?.train && <span><PiTrainLight className="text-secondary"/> {item.travel.train}</span>}
          {item.travel?.walk && <span><LiaWalkingSolid className="text-secondary" style={{fontSize:"17px"}}/> {item.travel.walk}</span>}
          <span>)</span>
        </div>

        {/* ROOM / OFFER */}
        <div className="d-flex flex-wrap gap-2 mb-2">
          {item.roomOptions && (
            <span className=" rounded-pill border2 text-dark">
              <TbBed style={{fontSize:"16px",color:"#ed3a56"}}/> {item.roomOptions} Room Options
            </span>
          )}
          {item.offers && (
            <span className=" rounded-pill border2 text-dark">
              <MdOutlineLocalOffer style={{fontSize:"16px",color:"#ed3a56"}}/> {item.offers} Offers
            </span>
          )}
          {item.instantBooking && (
            <span className=" rounded-pill border2 text-dark">
            <BsLightningCharge style={{fontSize:"16px",color:"#ed3a56"}}/> Instant Booking
            </span>
          )}
        </div>

        {/* FEATURES */}
        <div className="d-flex flex-wrap gap-3">
          {item.features &&
          Object.entries(item.features).map(([text,icon], i) => (
            <span
              key={i}
              className=" rounded-pill  text-dark border2 "
            >
              {React.cloneElement(icon, {
              color: "#ed3a56",
              size: 16,
              
             })}
             <span className="ms-2">
             {text}
             </span>
            </span>
          ))}
        </div>
      </Col>
</div>
    </Row>
  </div>
))}
</Container>
    </>
  );
};

export default Filterparent;
