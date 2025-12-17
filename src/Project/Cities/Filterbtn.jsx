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

    // UNIVERSITY
    if (filters.university) {
      result = result.filter(
        (item) => item.university === filters.university
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
    <div className="d-flex flex-wrap gap-2 ms-5"style={{fontFamily:"inherit"}}>
      {/* SORT */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="light" className="rounded-pill">
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilters({ ...filters, sort: "lowToHigh" })}>
            Price (Low → High)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilters({ ...filters, sort: "highToLow" })}>
            Price (High → Low)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* UNIVERSITY */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="light" className="rounded-pill">
          University
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilters({ ...filters, university: "Oxford" })}>
            Oxford
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilters({ ...filters, university: "Cambridge" })}>
            Cambridge
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* BUDGET */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="light" className="rounded-pill">
          Budget
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
        className="btn btn-outline-secondary rounded-pill"
        onClick={() =>
          setFilters({ sort: "", university: "", budget: "" })
        }
      >
        Reset
      </button>
    </div>
  );
};


export default Filterbtn;
