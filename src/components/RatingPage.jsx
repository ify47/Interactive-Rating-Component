import React, { useState } from "react";
import star from "../images/icon-star.svg";

const RatingPage = ({ rateNumber, classAction }) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = () => {
    rateNumber(inputs);
  };

  return (
    <section
      className={`bg-[linear-gradient(hsl(213,19%,18%),hsl(216deg_14.91%_11.79%))] w-[min(100%_-_33px,400px)] p-[30px] rounded-[25px] ${
        classAction ? "hidden" : ""
      }`}
    >
      <img
        className="bg-[hsl(216deg_17.83%_24.33%)] w-10 p-2.5 rounded-[50%]"
        src={star}
        alt="star-icon"
      />
      <h1 className="text-[28px] font-bold text-[white] mt-5">
        How did we do?
      </h1>
      <p className="text-[15px] text-[hsl(216,12%,54%)] mt-[5px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-5">
        <input
          type="radio"
          name="number"
          id="one"
          value="1"
          onChange={handleChange}
        />
        <label className="numberbuttons" htmlFor="one">
          1
        </label>
        <input
          type="radio"
          name="number"
          id="two"
          value="2"
          onChange={handleChange}
        />
        <label className="numberbuttons" htmlFor="two">
          2
        </label>
        <input
          type="radio"
          name="number"
          id="three"
          value="3"
          onChange={handleChange}
        />
        <label className="numberbuttons" htmlFor="three">
          3
        </label>
        <input
          type="radio"
          name="number"
          id="four"
          value="4"
          onChange={handleChange}
        />
        <label className="numberbuttons" htmlFor="four">
          4
        </label>
        <input
          type="radio"
          name="number"
          id="five"
          value="5"
          onChange={handleChange}
        />
        <label className="numberbuttons" htmlFor="five">
          5
        </label>
      </div>
      <button disabled={!inputs} onClick={handleSubmit}>
        SUBMIT
      </button>
    </section>
  );
};

export default RatingPage;
