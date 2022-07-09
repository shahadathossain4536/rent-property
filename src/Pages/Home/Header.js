import React from "react";

const Header = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-full">
          <h1 class="text-6xl font-bold">Search Your Next Home</h1>
          <p class="py-6">
            Find new & featured property located in your local city.
          </p>
          <div>
            <div class="card w-full bg-base-100 shadow-xl">
              <div class="card-body">
                <div>
                  <h2 class="card-title"></h2>
                  <div className="grid-cols-2 grid lg:grid-cols-5  justify-center items-center gap-5">
                    {/* Location start */}
                    <div class="form-control w-full max-w-xs ">
                      <label class="label">
                        <span class="label-text">Location</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Location"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    {/* Location end */}
                    {/* Date start */}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Date</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Date"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    {/* Date end */}
                    {/* Price start */}
                    <div class="form-control w-full max-w-xs ">
                      <label class="label">
                        <span class="label-text">Price</span>
                      </label>
                      <select class="select input input-bordered w-full max-w-xs">
                        <option>Apartments</option>
                        <option>Houses</option>
                        <option>Townhouse</option>
                      </select>
                    </div>
                    {/* Price end */}
                    {/* Property type start */}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Property Type </span>
                      </label>
                      <select class="select input input-bordered w-full max-w-xs">
                        <option>Apartments</option>
                        <option>Houses</option>
                        <option>Townhouse</option>
                      </select>
                    </div>
                    {/* Property type end */}
                    <input className="btn " type="submit" value="Search" />
                  </div>
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
