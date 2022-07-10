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
  // const [propertys, setPropertys] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formattedDate = format(startDate, "PP");
  const onSubmit = (data) => {
    console.log(data.location.toLowerCase());
    console.log(formattedDate);
  };

  const {
    data: propertys,
    isLoading,
    refetch,
  } = useQuery("propertys", () =>
    fetch(`http://localhost:5000/property`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/property`)
  //     .then((res) => res.json())
  //     .then((data) => setPropertys(data));
  // }, []);
  return (
    <div className="flex justify-center items-center bg-base-200">
      <div className="">
        <div className="mb-10  mx-10">
          <div class="p-10 rounded-md bg-base-100 shadow-xl ">
            <div class="">
              <div>
                <h2 class="card-title"></h2>
                <form
                  className="grid-cols-2 grid lg:grid-cols-5  justify-center items-center gap-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* Location start */}

                  <div class="form-control w-full max-w-xs ">
                    <label class="label">
                      <span class="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      class="input input-bordered w-full max-w-xs"
                      {...register("location")}
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
                      {...register("price")}
                    >
                      <option>No Min</option>
                      <option>$1000</option>
                      <option>$1500</option>
                      <option>$2000</option>
                      <option>$2500</option>
                      <option>$3000</option>
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
                      {...register("property")}
                    >
                      <option>Apartments</option>
                      <option>Houses</option>
                      <option>Townhouse</option>
                    </select>
                  </div>
                  {/* Property type end */}
                  <input
                    className="btn w-full max-w-xs mt-9"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {propertys.slice(0, 9).map((property) => (
            <PropertyData key={property._id} property={property}></PropertyData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Property;
