import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Firstsection.css';
import { FaHeadset,} from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { GrCurrency } from "react-icons/gr";
import Search from './Search';
import { GoChevronRight } from "react-icons/go";
import Navbar2 from "./Navbar2";
import { Container } from "react-bootstrap";

function Firstsection1() {
     const [recent, setRecent] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches"));
    if (saved && saved.length > 0) {
      setRecent(saved);
    } else {
     
      setRecent(defaultSearches);
      localStorage.setItem("recentSearches", JSON.stringify(defaultSearches));
    }
  }, []);

  const handleSearch = (term) => {
    const updated = [term, ...recent.filter((item) => item !== term)];
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  return (
    <div className="Nav">
     <Navbar2 />
     <Container>
      <div className="header text-center px-2">
        <h2 className=" " style={{ fontSize: "clamp(28px, 6vw, 56px)", color: "white",fontWeight:"bold" }}>
          Home away from home
        </h2>
        <div className="Student">
          <h2 className="text-light"style={{fontSize:"clamp(13px, 3vw, 20px)"}}>
            Book student accommodations near top universities and cities across the globe
          </h2>
        </div>
      </div>
      <div className="container ">
       <div className="row text-light justify-content-center text-center mt-3">

  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex g-0 justify-content-center">
    <div className="d-flex bg justify-content-center align-items-center lg-ms-4 px-3 py-2 rounded">
      <GoCheckCircle className="mt-1 me-2 fs-5" /> Verified Properties
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex g-2 justify-content-center">
    <div className="d-flex bg justify-content-center align-items-center  px-3 py-2 rounded">
      <FaHeadset className="mt-1 me-2 fs-5" /> 24x7 Assistance
    </div>
  </div>

  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex g-2 justify-content-center">
    <div className="d-flex bg justify-content-center align-items-center lg-ms-4 px-3 py-2 rounded">
      <GrCurrency className="mt-1 me-2 fs-5" /> Lowest Price Guarantee
    </div>
  </div>
      {/* </div> */}
      <div>
        </div></div>
        <Search />
      </div>
      <div className="d-flex  text-light  justify-content-center mt-3"
      > 
      <div className="d-flex  recent">
             <div style={{fontSize:"14px",whiteSpace: "nowrap", }}className=""> Recent Searches</div>
        {recent.length === 0 ? (
          <p className="text-light ms-2">No recent searches</p>
        ) : (
          recent.slice(0, itemsToShow).map((item, i) => (
            <a
              key={i}
              href={`/search.html`}
              onClick={() => handleSearch(item)}
              style={{ textDecoration: "none" }}
            >
              <button
                className="country ms-2 rounded-pill px-3 py-2"
                style={{
                  padding: "10px 15px",
                  borderRadius: "50px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                 whiteSpace: "nowrap",         

                }}
              >
                {item} <GoChevronRight />
              </button>
            </a>
          ))
        )}
      </div>
      </div>
      </Container>
      </div>
      
  );
}

export default Firstsection1;