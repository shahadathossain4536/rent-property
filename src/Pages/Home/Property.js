import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropertyData from "./PropertyData";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const Property = () => {
  const [propertys, setPropertys] = useState([]);
  const [searchPropertys, setSearchPropertys] = useState([]);
  const [city, setCity] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [propertyPrice, setPropertyPrice] = useState([]);
  const [bookingDate, setBookingDate] = useState();

  const [startDate, setStartDate] = useState(new Date());

  const formattedDate = format(startDate, "PP");
  // const formattedDate2 = toString(formattedDate);
  // setBookingDate(formattedDate2);

  useEffect(() => {
    const propertyData = [
      {
        _id: 1,
        addressLine1: "22-12 119th Street, College Point, NY 11356",
        city: "new york",
        state: "TX",
        zipCode: "78244",
        county: "America",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Palam Habor",
        propertyType: "Apartments",
        propertyPrice: "3000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/q7rVMTP/01-min.jpg",
      },
      {
        _id: 2,
        addressLine1: "104-32 204th St, Saint Albans, NY 11412",
        city: "new york",
        state: "TX",
        zipCode: "78244",
        county: "America",
        bedrooms: 4,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Alex Home",
        propertyType: "Houses",
        propertyPrice: "5000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/rHFHc81/04-min.jpg",
      },
      {
        _id: 3,
        addressLine1: "15435 Triple Creek, San Antonio, TX 78247",
        city: "San Antonio",
        state: "TX",
        zipCode: "78244",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Venado Crossing",
        propertyType: "Apartments",
        propertyPrice: "3000",
        bookingDate: "Jul 15, 2022",
        img: "https://i.ibb.co/y5Jmf9W/11-min.jpg",
      },
      {
        _id: 4,
        addressLine1: "2459 Applewhite Meadows San Antonio, TX 78224",
        city: "San Antonio",
        state: "TX",
        zipCode: "78244",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Applewhite Meadows",
        propertyType: "Townhouse",
        propertyPrice: "3000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/mJrMZX3/02-min.jpg",
      },
      {
        _id: 5,
        addressLine1: "2339 Elysian Trail San Antonio, TX 78253",
        city: "San Antonio",
        state: "TX",
        zipCode: "78244",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Bison Ridge 50",
        propertyType: "Apartments",
        propertyPrice: "2000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/gygKXHk/03-min.jpg",
      },
      {
        _id: 6,
        addressLine1: "New York, NY 10001",
        city: "New York",
        state: "TX",
        zipCode: "78244",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Maverick Chelsea",
        propertyType: "Townhous",
        propertyPrice: "2500",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/H4pDMcx/05-min.jpg",
      },
      {
        _id: 7,
        addressLine1: "Brooklyn, NY 11201",
        city: "New York",
        state: "TX",
        zipCode: "78244",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "One Clinton",
        propertyType: "Townhous",
        propertyPrice: "1000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/GVYwbvg/06-min.jpg",
      },
      {
        _id: 8,
        addressLine1: "12705 SW 232nd St. Miami",
        city: "miami",
        state: "TX",
        zipCode: "33170",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Sedona Estates",
        propertyType: "Houses",
        propertyPrice: "1500",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/bPCsytv/07-min.jpg",
      },
      {
        _id: 9,
        addressLine1: "Wiles Rd & Coral Ridge Drive Miami",
        city: "miami",
        state: "TX",
        zipCode: "33170",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Sunset Trails",
        propertyType: "Houses",
        propertyPrice: "2000",
        bookingDate: "Jul 14, 2022",
        img: "https://i.ibb.co/4Z2nr1m/08-min.jpg",
      },
      {
        _id: 10,
        addressLine1: "12705 SW 232nd St. Miami",
        city: "miami",
        state: "TX",
        zipCode: "33170",
        county: "Bexar",
        bedrooms: 3,
        bathrooms: 2,
        yearBuilt: 1973,
        propertyName: "Siena Reserve",
        propertyType: "Houses",
        propertyPrice: "1000",
        bookingDate: "Jul 13, 2022",
        img: "https://i.ibb.co/q1Vq5nL/09-min.jpg",
      },
    ];
    setPropertys(propertyData);
    setSearchPropertys(propertyData);
  }, []);
  // city, propertyType, propertyPrice, formattedDate
  // const newPropertys = propertys.filter((x) => console.log(x.city));
  // console.log(newPropertys);
  const handleSearch = (event) => {
    event.preventDefault();

    const newPropertys = propertys
      .filter((x) => x.city == (city == "" ? x.city : city))
      .filter(
        (y) =>
          y.propertyType == (propertyType == "" ? y.propertyType : propertyType)
      )
      .filter(
        (price) =>
          price.propertyPrice ==
          (propertyPrice == "" ? price.propertyPrice : propertyPrice)
      )
      .filter((d) =>
        (d.bookingDate == formattedDate) == "" ? d.bookingDate : formattedDate
      );

    setSearchPropertys(newPropertys);
  };
  return (
    <div className="flex justify-center items-center bg-base-200">
      <div className="">
        <div className="mb-10  mx-10">
          <div class="p-10 rounded-md bg-base-100 shadow-xl ">
            <div class="">
              <div>
                <h2 class="card-title"></h2>
                <form className="grid-cols-2 grid lg:grid-cols-5  justify-center items-center gap-5">
                  {/* Location start */}
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="location"
                      class="input input-bordered w-full max-w-xs"
                      onChange={(event) =>
                        setCity(event.target.value.toLowerCase())
                      }
                    />
                  </div>
                  {/* Location end */}
                  {/* Date start */}
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Date</span>
                    </label>
                    <DatePicker
                      class="input input-bordered w-full max-w-xs "
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  {/* Date end */}
                  {/* Price start */}
                  <div class="form-control w-full max-w-xs ">
                    <label class="label">
                      <span class="label-text">Price</span>
                    </label>

                    <select
                      name="price"
                      class="select input input-bordered w-full max-w-xs"
                      onChange={(event) => setPropertyPrice(event.target.value)}
                    >
                      <option value="">Price Range</option>
                      <option value="1000">$1000</option>
                      <option value="1500">$1500</option>
                      <option value="2000">$2000</option>
                      <option value="2500">$2500</option>
                      <option value="3000">$3000</option>
                    </select>
                  </div>
                  {/* Price end */}
                  {/* Property type start */}
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Property Type </span>
                    </label>
                    <select
                      name="property"
                      class="select input input-bordered w-full max-w-xs"
                      onChange={(event) => setPropertyType(event.target.value)}
                    >
                      <option value="">Select Home</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Houses">Houses</option>
                      <option value="Townhouse">Townhouse</option>
                    </select>
                  </div>
                  {/* Property type end */}
                  <input
                    className="btn w-full max-w-xs mt-9"
                    type="submit"
                    value="Search"
                    onClick={handleSearch}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {searchPropertys && searchPropertys.length > 0
            ? searchPropertys.map((property) => (
                <PropertyData
                  key={property._id}
                  property={property}
                ></PropertyData>
              ))
            : "No Data"}
        </div>
      </div>
    </div>
  );
};

export default Property;
