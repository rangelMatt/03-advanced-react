import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  const handleDecrease = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
      <button type="button" className="btn" onClick={handleDecrease}>
        decrease
      </button>
    </div>
  );
};

export default UseStateGotcha;
