import React from "react";
import bed from "../../assets/bed-solid.svg";
import toilet from "../../assets/toilet-solid.svg";
import size from "../../assets/ruler-solid.svg";
const PropertyData = ({ property }) => {
  const {
    addressLine1,
    city,
    state,
    zipCode,
    county,
    bedrooms,
    bathrooms,
    yearBuilt,
    propertyName,
    propertyType,
    propertyPrice,
    img,
  } = property;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[400px] h-[225px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {propertyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="">
          <p className="text-3xl">
            ${propertyPrice}
            <span className="text-xs text-gray-400">/Month</span>{" "}
          </p>
          <p className="text-sm text-gray-400 pt-3">{addressLine1}</p>
        </div>
        <div className="divider my-0"></div>
        <div className="flex justify-evenly">
          <div className="flex justify-start ">
            <img
              style={{ color: "emerald-600" }}
              className="w-5 text-emerald-600"
              src={bed}
              alt=""
            />
            <p className="pl-2">{bedrooms}bedrooms</p>
          </div>
          <div className="flex justify-start ">
            <img
              style={{ color: "emerald-600" }}
              className="w-4 text-emerald-600"
              src={toilet}
              alt=""
            />
            <p className="pl-2">{bathrooms}bathrooms</p>
          </div>
        </div>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </div>

    // <div className="artboard artboard-horizontal phone-2">667×375</div>
  );
};

export default PropertyData;
