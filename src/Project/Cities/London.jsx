import React, { useState,useEffect } from "react";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import Navbar2 from "../Navbar2";
function London() {
const [isLight,setIsLight]=useState(false);
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsLight(true);
      else setIsLight(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-dark"style={{height:"60px"}}>
      <Navbar2   isLight={isLight}    style={{
        backgroundColor: isLight ? "white" : "transparent",
        color: isLight ? "black" : "white",
      }}
 />
 </div>
    
  );
}
export default London;