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
import { IoMdHeart } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Review from '../assets/review.svg';
import Image from 'react-bootstrap/Image';
import './Viewcard.css';
import viewvideo from '../assets/viewvideo.mp4';
import viewimg from '../assets/viewimg.avif';
import viewimg2 from '../assets/viewimg2.avif';
import Insight2 from './../assets/insight2.svg';
import insight3 from './../assets/insight3.svg';
import { PiCalendarCheckLight } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";
import Roomcard from './Roomcard';
function Viewcard() {
     const view={
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
    const infoList = [
  {
    title: "Instant Booking",
    desc: "Instant booking allows you to quickly book the property by paying the amount.",
    icon: <PiCalendarCheckLight className="fs-4" />,
  },
  {
    title: "Lowest Price Guaranteed",
    desc: "We guarantee to match the price of your accommodation if you find an identical offer on another..",
    icon: <Image src={Insight2} style={{ width: 25 }} />,
  },
  {
    title: "Verified Properties",
    desc: "We guarantee that what you see on our website is exactly what you'll get.",
    icon: <BsShieldCheck style={{ fontSize: 23 }} fill="gray" />,
  },
  {
    title: "24x7 Personal Assistance",
    desc: "For any doubts or queries, a quick call is all it takes - we're here to assist you promptly..",
    icon: <Image src={insight3} style={{ width: 25 }} />,
  },
  {
    title:"8.8k+ Reviews",
    desc:"We've earned an excellent rating from over 8,700+ students for our outstanding services.",
    icon:<Image src={Review} 
    style={{width:30,height:30,}}/>
  }
];
const [openIndex, setOpenIndex] = useState(null);

const toggleDropdown = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

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
      <Container fluid className=" bg-light fluid"style={{fontFamily:"inherit",padding:"25px 40px"}}>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col lg={8} md={12} sm={12}>
            <Card className="border-0 shadow-sm position-relative"style={{padding:"20px 0px"}}>
                <div className="view-img">
              <Row className="mt-3">
  <Col lg={9} md={7}>
    <Carousel interval={null} className="ms-3 view-carousel">
      {(item.images || [item.image]).map((img, index) => (
        <Carousel.Item key={index}className="view-item">
          <img
            src={img}
            alt="property"
            className="d-block w-100 rounded "
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </Col>

  {/* RIGHT - VIDEO */}
  <Col lg={3} md={5} style={{cursor:"pointer"}}>
    <div className="video-box">
      <video
        src={viewvideo}
        controls
        poster={item.image}  
        className="video-player "
        style={{width:"90%",borderRadius:"10px",}}
      />
    </div>
    <div>
      <Image src={viewimg} className="mt-3 view-image" style={{width:"90%",height:"50%",borderRadius:"10px"}}></Image>
    </div>
           <div>
           <Image src={viewimg2}className="mt-3 view-image"style={{width:"90%",height:"50%",borderRadius:"10px"}}></Image>
            </div>
            </Col>
             </Row>

              </div>
              {/* <Badge bg="success" className="position-absolute m-3 px-3 py-2">
                <FaStar /> 5.0
              </Badge> */}
              <div className="ms-3 mt-3"style={{cursor:"pointer"}}>
            <h3 className="fw-bold ">{item.name}</h3>
            <p className="text-muted">{item.location}</p>
            <p className="text-muted">
            <IoLocationOutline /> {view.distance}
            </p>
             </div>
             <div className="d-flex gap-2 mt-2 ms-3"style={{cursor:"pointer"}}>
              (
             <span>
              <LiaBusAltSolid className="text-muted"/> {view.travel.bus}
              </span>
              <span>
              <PiTrainLight className="text-muted" /> {view.travel.train}
              </span>
              <span>
              <LiaWalkingSolid className="text-muted"/> {view.travel.walk}
            </span>)
            </div>
            <div className="d-flex flex-wrap gap-3 mt-3 ms-3 "style={{cursor:"pointer"}}>
            {Object.entries(view.features).map(([text, icon], index) => (
            <span key={index} className="border rounded-pill px-3 py-1 view-border">
            {React.cloneElement(icon, {
            color: "#ed3a56",
            size: 19,
            })}
            <span className="ms-2">{text}</span>
            </span>
            ))}
            </div>
            </Card>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4} md={12} sm={12} className=""> 
          <div className="sticky-wrapper">
          <Card className="shadow-sm border-0 p-3"> 
            <div className="d-flex justify-content-between align-items-center"> 
            <h5 className="fw-bold mb-0 view-h5"> {item.name} </h5>
            <div
              className="wishlist-heart view-delete  position-absolute  d-flex justify-content-center align-items-center"
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
            {/* <Button className="mt-3 py-2" style={{ backgroundColor: "#ed3a56", border: "none" }} > View Rooms </Button>  */}
            <Button  className="mt-2 py-2 enquiry"style={{border:"2px solid #ed3a56",color:"#ed3a56"}} > Enquire Now </Button>
            <div className="bg-light rounded-pill mt-3">
              <Carousel indicators={false}className="">
            <Carousel.Item className="mt-2 ms-3 carousel-text">
            <IoMdHeart className="text-primary"style={{fontSize:"16px"
            }}/> 558 students shortlisted this property in last 30 days
              </Carousel.Item>
            <Carousel.Item style={{fontSize:"13px",height:"30px"}}className="mt-2 ms-3 carousel-text">
             <FaPhoneAlt className="text-primary"style={{fontSize:"16px"}}/> 11 students enquired about this property in last 15 days
            </Carousel.Item>
              </Carousel>
             </div>
             </Card>
                 <Card className="shadow-sm border-0 p-3 mt-3 ">

                  {infoList.map((item, index) => (
                  <div key={index} className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
        <div className="d-flex align-items-center mt-1">
          <div className="Droplist">
          <div className="">{item.icon}</div></div>
          <p className="ms-2 mb-0" style={{ fontSize: "15px" }}>
            {item.title}
          </p>
        </div>
        <span>
        {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
            {openIndex === index && (
              <p className="text-muted mt-2 ms-5" style={{ fontSize: "14px" }}>
              {item.desc}
               </p>
                )}
                </div>
                 ))}
                </Card>
                </div>
                 </Col>
        </Row>
        {/* <div className="mt-4">
          <Roomcard />
        </div> */}
      </Container>
    </>
  );
}

export default Viewcard;
