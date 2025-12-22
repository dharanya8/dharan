import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdContact } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { PiQuestionLight, PiCalendarStarThin } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { BsPersonUp } from "react-icons/bs";
import { FaHeadset, FaWhatsapp, FaRegEnvelope, FaRegHandshake } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsFilterLeft } from "react-icons/bs";

import './Filterbtn.css'
const Filterbtn = ({ data, onFilter }) => {
  const [filters, setFilters] = useState({
    sort: "",
    university: "",
    budget: "",
  });

  useEffect(() => {
    let result = [...data];

    // SORT
    if (filters.sort === "lowToHigh") {
    result.sort((a, b) => a.price - b.price);
  }
  if (filters.sort === "highToLow") {
    result.sort((a, b) => b.price - a.price);
  }

    if (filters.university) {
  result = result.filter(item =>
    item.university
      ?.toLowerCase()
      .includes(filters.university.toLowerCase())
  );
}

    // BUDGET
    if (filters.budget === "below10k") {
      result = result.filter((item) => item.price < 10000);
    }
    if (filters.budget === "above10k") {
      result = result.filter((item) => item.price >= 10000);
    }

    onFilter(result);
  }, [filters, data, onFilter]);

  return (
    <div className="d-flex flex-wrap gap-2 mt- align-items-center"style={{fontFamily:"inherit",
       position: "sticky",
         top: 65,
         zIndex:1050,
         backgroundColor: "white",
         height:55,
         
    }}>
      {/* SORT */}
      <Dropdown as={ButtonGroup} className="ms-3">
        <Dropdown.Toggle variant="light" className="rounded-pill sort ">
          <div className="d-flex align-items-center">
          <BsFilterLeft  className="fs-4 text-secondary"/>
          <span className="ms-1 fw-bold"style={{fontSize:"13px"}}>Sort</span>
       </div>
        </Dropdown.Toggle>
      
  <Dropdown.Menu className="mt-2"style={{width:"250px"}}>
     <Dropdown.Header style={{ fontSize: "15px",boxShadow:"initial"}} className="text-dark fw-bolder ">
        Sort By
     </Dropdown.Header>
    <Form.Check
      type="radio"
      label="Price (Low to High)"
      name="priceSort"
      id="lowToHigh"
      checked={filters.sort === "lowToHigh"}
      onChange={() =>
        setFilters({ ...filters, sort: "lowToHigh" })
      }
      className="px-3  ms-4"
    />
    <Form.Check
      type="radio"
      label="Price (High to Low)"
      style={{marginTop:"15px"}}
      name="priceSort"
      id="highToLow"
      checked={filters.sort === "highToLow"}
      onChange={() =>
        setFilters({ ...filters, sort: "highToLow" })
      }
      className="px-3  ms-4 "
    />
  </Dropdown.Menu>
      </Dropdown>
      {/* UNIVERSITY */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="light" className="rounded-pill sort">
         <div className="d-flex align-items-center">
          <span className="fw-bold"style={{fontSize:"13px"}}>University</span>
        </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilters({ ...filters, university: "Canvas Student Barnard Point" })}>
            Canvas Student Barnard Point, London
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilters({ ...filters, university: "Cambridge" })}>
            Cambridge
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* BUDGET */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="light" className="rounded-pill sort">
          <div className="d-flex align-items-center">
         <span className="fw-bold"style={{fontSize:"13px"}}> Budget </span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilters({ ...filters, budget: "below10k" })}>
            Below ₹10,000
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilters({ ...filters, budget: "above10k" })}>
            Above ₹10,000
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* RESET */}
      <button
        className=" rounded-pill sort"
        onClick={() =>
          setFilters({ sort: "", university: "", budget: "" })
        }
      >
        <div className="d-flex  align-items-center">
        <span className="fw-bold"style={{fontSize:"13px"}}>
        Reset</span></div>
      </button>
    </div>
  );
};


export default Filterbtn;
