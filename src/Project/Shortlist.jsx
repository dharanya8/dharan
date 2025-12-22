import React, { useEffect, useState } from "react";
import Navbar1 from "../Project/Cities/Navbar1";

function Shortlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shortlist")) || [];
    setItems(saved);
  }, []);

  return (
    <div>
      <Navbar1 />
      <h2 className="text-center mt-4">My Shortlist</h2>

      {items.length === 0 ? (
        <p className="text-center mt-5">No properties shortlisted ❤️</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {items.map((item, index) => (
            <div key={index} className="card p-3" style={{ width: "300px" }}>
              <img
                src={item.images ? item.images[0] : item.image}
                alt={item.name}
                className="img-fluid"
              />
              <h5 className="mt-2">{item.name}</h5>
              <p>{item.location}</p>
              <p className="fw-bold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shortlist;
