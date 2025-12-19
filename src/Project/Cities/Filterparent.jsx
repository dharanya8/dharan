import React, { useState } from "react";
import Filterbtn from "./Filterbtn";

const properties = [
  { id: 1, price: 8000, university: "Oxford" },
  { id: 2, price: 12000, university: "Cambridge" },
  { id: 3, price: 6000, university: "Oxford" },
  { id: 1, price: 8000, university: "Oxford" },
  { id: 2, price: 12000, university: "Cambridge" },
  { id: 3, price: 6000, university: "Oxford" },
  { id: 1, price: 8000, university: "Oxford" },
  { id: 2, price: 12000, university: "Cambridge" },
  { id: 3, price: 6000, university: "Oxford" },
  { id: 1, price: 8000, university: "Oxford" },
  { id: 2, price: 12000, university: "Cambridge" },
  { id: 3, price: 6000, university: "Oxford" },
  { id: 1, price: 8000, university: "Oxford" },
  { id: 2, price: 12000, university: "Cambridge" },
  { id: 3, price: 6000, university: "Oxford" },
];

const Filterparent = () => {
  const [filteredData, setFilteredData] = useState(properties);

  return (
    <>
      <Filterbtn data={properties} onFilter={setFilteredData} />

      {filteredData.map((item) => (
        <div key={item.id} className="card p-2 mt-2">
          {item.university} – ₹{item.price}
        </div>
      ))}
    </>
  );
};

export default Filterparent;
