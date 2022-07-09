import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropertyData from "./PropertyData";

const Property = () => {
  const [propertys, setPropertys] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPropertys(data));
  }, []);
  return (
    <div className="flex justify-center items-center bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {propertys.map((property) => (
          <PropertyData key={property._id} property={property}></PropertyData>
        ))}
      </div>
    </div>
  );
};

export default Property;
