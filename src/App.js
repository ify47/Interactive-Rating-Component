import React, { useState, useRef } from "react";
import RatingPage from "./components/RatingPage";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const rateValueRef = useRef();
  const [classNameAction, setClassNameAction] = useState(false);

  const getRateValue = (child) => {
    rateValueRef.current = child;
    setClassNameAction(true);
  };

  return (
    <main
      className="font-Overpass bg-[hsl(216,12%,8%)]
     flex flex-col justify-center
      items-center min-h-screen"
    >
      <RatingPage rateNumber={getRateValue} classAction={classNameAction} />
      <ThankYouPage
        rateNumber={rateValueRef.current}
        classAction={classNameAction}
      />
    </main>
  );
}

export default App;
