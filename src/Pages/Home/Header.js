import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formattedDate = format(startDate, "PP");
  const onSubmit = (data) => {
    console.log(data);
    console.log(formattedDate);
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-full">
          <h1 class="text-6xl font-bold">Search Your Next Home</h1>
          <p class="py-6">
            Find new & featured property located in your local city.
          </p>
          <div>
            <div class="p-10 rounded-md bg-base-100 shadow-xl">
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
                      className="btn w-full max-w-xs"
                      type="submit"
                      value="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
