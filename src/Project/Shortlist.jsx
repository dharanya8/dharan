import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FiHeart } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import "./Shortlist.css";
import Navbar1 from "../Project/Cities/Navbar1";
import Empty from '../assets/shortlist-empty-state.svg';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import Footer from '../Project/Footer';
import { IoIosArrowForward } from "react-icons/io";

function Shortlist() {
  const [items, setItems] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shortlist")) || [];
    setItems(data);
  }, []);

  const removeItem = (name) => {
    const updated = items.filter(item => item.name !== name);
    setItems(updated);
    localStorage.setItem("shortlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("shortlistUpdated"));
  };

  return (
    <div style={{fontFamily:"inherit"}}>
      <Navbar1/>
      <div className="short" style={{backgroundColor:"#f3f4f6",padding:"40px 40px",}}>
    <div className="container containe ">
         <div className="pt-2 fw-bold fs-4  list"style={{marginLeft:"115px",}}>Shortlist</div>
      <div className="mx-auto mt-3  banner"style={{backgroundColor:"#fff",width:"80%",border:"1px solid #e5e7eb",padding:"40px"}}>
      {items.length === 0 ? (
      /* EMPTY STATE */
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <Image src={Empty}
          alt="No shortlist"
          style={{ width: "280px" }}
        />
        <p className="mt-3 text-dark"style={{fontSize:"16px"}}>
          No property shortlisted
        </p>
        <button className="explore-btn mt-2"
        onClick={()=>navigate("/")}>
          Explore properties
        </button>
      </div>
    ) : (
      /* SHORTLIST ITEMS */
      <>
        <h5 className="fw-bold mb-4 pt-4 ms-4">
          {items.length} properties shortlisted
        </h5>

      {items.map((item, index) => (
        <div key={index} className="shortlist-card flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-xs-column flex-column mb-4 d-flex mx-auto">

          {/* IMAGE */}
          <div className="shortlist-img">
            <Carousel interval={null} >
              {(item.images || [item.image]).map((img, i) => (
                <Carousel.Item key={i}>
                  <img src={img} alt={item.name} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* CONTENT */}
          <div className="shortlist-content position-relative">

            {/* HEART */}
            <div
              className="wishlist-remove"
              onClick={() => removeItem(item.name)}
            >
              <FiHeart color="white" size={18} />
            </div>
            <div style={{cursor:"pointer"}}>
            <h3 className="fw-bold London"style={{fontSize:"18px"}}>{item.name}</h3>
            <p className="text-muted London mb-2"style={{fontWeight:"inherit",fontSize:"100%"}}>{item.location}</p>

            {/* FEATURES */}
            <div className="features  mb-3">
              <span className="London"><BsLightningCharge style={{color:"#ed3a56",fontSize:"18px"}}/> Instant Booking</span>
              <span className="London"><FaRegCircleCheck style={{color:"#ed3a56",fontSize:"18px"}}/> Study Area</span>
              <span className="London"><FaRegCircleCheck style={{color:"#ed3a56",fontSize:"18px"}}/> Laundry Facility</span>
            </div>

            {/* PRICE + BUTTON */}
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">
                From <strong>£{item.price}</strong> / week
              </p>
              <button className="view-btn">View <IoIosArrowForward style={{fontSize:"16px"}}/></button>
            </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )}
      </div>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default Shortlist; 