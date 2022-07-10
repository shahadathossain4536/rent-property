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
        </div>
      </div>
    </div>
  );
};

export default Header;
