import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // setPerson("shakeAndBake");
    // setPerson({ name: "Susan" });
    setPerson({ ...person, name: "susan" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
