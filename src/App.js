import React, { useState } from "react";
import RatingPage from "./components/RatingPage";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const [rateValue, SetRateValue] = useState("");
  const [classNameAction, setClassNameAction] = useState(false);

  const getRateValue = (childName) => {
    SetRateValue(childName);
    setClassNameAction(true);
  };

  return (
    <main
      className="font-Overpass bg-[hsl(216,12%,8%)]
     flex flex-col justify-center
      items-center min-h-screen"
    >
      <RatingPage rateNumber={getRateValue} classAction={classNameAction} />
      <ThankYouPage rateNumber={rateValue} classAction={classNameAction} />
    </main>
  );
}

export default App;
