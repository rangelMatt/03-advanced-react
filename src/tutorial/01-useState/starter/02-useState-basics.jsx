import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count + 1);
    // console.log(setCount);
  };
  return (
    <div>
      <h4>You Clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
