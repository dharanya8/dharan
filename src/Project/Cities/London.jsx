import React, { useState,useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import Navbar1 from "./Navbar1";
import Filterbtn from "./Filterbtn";
import Filterparent from "./Filterparent";
import './London.css'
function London() {
return(
  <div>
  <div className="sticky">
    <Navbar1/>
    <Filterparent/>
  </div>
  </div>    
  );
}
export default London;