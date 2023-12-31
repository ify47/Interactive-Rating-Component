import React, { useState } from "react";
import star from "../images/icon-star.svg";

const RatingPage = ({ rateNumber, classAction }) => {
  //props from parent component (app.js)
  const [inputs, setInputs] = useState("");
  const rates = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = () => {
    rateNumber(inputs); // passing the inputs value as a child to parent component
  };

  return (
    <section
      className={`bg-[linear-gradient(hsl(213,19%,18%),hsl(216deg_14.91%_11.79%))] w-[min(100%_-_33px,400px)] p-[30px] rounded-[25px] ${
        classAction ? "hidden" : ""
      }`} //adds the hidden class conditionally
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
        {rates.map((rate) => (
          <React.Fragment key={rate}>
            <input
              type="radio"
              name="number"
              id={rate}
              value={rate}
              onChange={handleChange}
            />
            <label className="numberbuttons" htmlFor={rate}>
              {rate}
            </label>
          </React.Fragment>
        ))}
      </div>
      <button className="uppercase" disabled={!inputs} onClick={handleSubmit}>
        submit
      </button>
    </section>
  );
};

export default RatingPage;
