import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge,Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaStar, FaHeart } from "react-icons/fa";
import Navbar1 from "../Project/Cities/Navbar1";
import { MdVerified } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
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
import Filterbtn from "./Cities/Filterbtn";
import { IoMdHeart } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Review from '../assets/review.svg';
import Image from 'react-bootstrap/Image';
import './Viewcard.css';
function Viewcard() {
     const view={title: "Canvas Student Barnard Point, London",
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
    }
  const [item, setItem] = useState(null);
      const handleAddToWishlist = (item) => {
      const existing = JSON.parse(localStorage.getItem("shortlist")) || [];
    
      const alreadyAdded = existing.some(
        (p) => p.name === item.name
      );
    
      let updatedList;
    
      if (alreadyAdded) {
        // remove (optional toggle)
        updatedList = existing.filter(p => p.name !== item.name);
      } else {
        // add
        updatedList = [...existing, item];
      }
    
      localStorage.setItem("shortlist", JSON.stringify(updatedList));
      setWishlist(updatedList);
       window.dispatchEvent(new Event("shortlistUpdated"));
    };
    
    const [wishlist, setWishlist] = useState(
      JSON.parse(localStorage.getItem("shortlist")) || []
    );
    
  useEffect(() => {
    const savedItem = localStorage.getItem("selectedProperty");
    if (savedItem) {
      setItem(JSON.parse(savedItem));
    }
  }, []);

  if (!item) {
    return (
      <>
        <Navbar1 />
        <p className="text-center mt-5">No property data found</p>
      </>
    );
  }


  return (
    <>
    
      <Navbar1 />

      <Container fluid className="px-5 py-4 bg-light">
        <Row>
          {/* LEFT SIDE */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm position-relative">
                <div className="view-img">
              <Carousel className="view-carousel ms-3 mt-5" interval={null} indicators={true}>
                {(item.images || [item.image]).map((img, index) => (
                  <Carousel.Item key={index} className="view-item ">
                    <img
                      src={img}
                      alt={item.name}
                      className="d-block rounded"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
              {/* <Badge bg="success" className="position-absolute m-3 px-3 py-2">
                <FaStar /> 5.0
              </Badge> */}
              <div className="ms-3">
            <h3 className="fw-bold mt-4">{item.name}</h3>
            <p className="text-muted">{item.location}</p>
            
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
            </div>
            </Card>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4} className="h-50"> <Card className="shadow-sm border-0 p-3"> 
            <div className="d-flex justify-content-between align-items-center"> 
            <h5 className="fw-bold mb-0"> {item.name} </h5>
         
            <div
              className="wishlist-heart  position-absolute  d-flex justify-content-center align-items-center"
              onClick={() => handleAddToWishlist(item)}
              style={{
                backgroundColor: wishlist.some(p => p.name === item.name)
                    ? "red"
                    : "white"
              }}
            >
              <RiDeleteBinLine
                className="fs-5"
                style={{
                  color: wishlist.some(p => p.name === item.name)
                    ? "white"
                    : "#555",
                }}
              />
            </div>
            </div> 
            <Button className="mt-3 py-2" style={{ backgroundColor: "#ed3a56", border: "none" }} > View Rooms </Button> 
            <Button  className="mt-2 py-2 enquiry"style={{border:"2px solid #ed3a56",color:"#ed3a56"}} > Enquire Now </Button>
            <div className="bg-light rounded-pill mt-3">
              <Carousel indicators={false}className="">
            <Carousel.Item style={{fontSize:"13px",height:"30px"}}className="mt-2 ms-3">
            <IoMdHeart className="text-primary"style={{fontSize:"16px"
            }}/> 558 students shortlisted this property in last 30 days
              </Carousel.Item>
            <Carousel.Item style={{fontSize:"13px",height:"30px"}}className="mt-2 ms-3">
             <FaPhoneAlt className="text-primary"style={{fontSize:"16px"}}/> 11 students enquired about this property in last 15 days
            </Carousel.Item>
              </Carousel>
             </div>
             </Card>
                 <Card className="shadow-sm border-0 p-3 mt-3">
                  <div>
            <p className="fw-semibold">Instant Booking</p> 
            <p className="fw-semibold">Lowest Price Guaranteed</p>
             <p className="fw-semibold">Verified Properties </p> 
            <p className="fw-semibold">24x7 Personal Assistance</p>
            <div className="d-flex">
            <div className="Droplist">
              <Image src={Review} style={{width:"70%",height:"70%"}}className="ms-1"></Image>
              </div>
              <p className="fw-semibold">
            8.7K+ Reviews</p>
            </div>
             <hr /> 
            <h5 className="fw-bold"> From <span className="text-danger">£429</span> </h5> 
            <p className="text-muted">per week</p>
            </div>
                 </Card>
               
                 </Col>
        </Row>
      </Container>
    </>
  );
}

export default Viewcard;
