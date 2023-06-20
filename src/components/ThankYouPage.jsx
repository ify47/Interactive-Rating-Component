import React from "react";
import illustration from "../images/illustration-thank-you.svg";

const ThankYouPage = ({ rateNumber, classAction }) => {
  return (
    <section
      className={`bg-[linear-gradient(hsl(213,19%,18%),hsl(216deg_14.91%_11.79%))] w-[min(100%_-_33px,400px)] p-[30px] rounded-[25px] text-center ${
        classAction ? "" : "hidden"
      }`}
    >
      <img className="w-6/12 m-auto" src={illustration} alt="thank-you" />
      <p className="w-6/12 bg-[hsl(216deg_17.83%_24.33%)] text-[hsl(25,97%,53%)] text-sm mt-5 mb-0 mx-auto pt-[5px] pb-[3px] px-0 rounded-[20px] mobile:w-[55%] mobile:text-[3.5vw]">
        You selected {rateNumber} out of 5
      </p>
      <p className="text-[28px] font-bold text-[white] mt-5">Thank you!</p>
      <p className="text-[15px] text-[hsl(216,12%,54%)] mt-[5px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
};

export default ThankYouPage;
