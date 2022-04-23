import { useState, useEffect } from "react";

const App = () => {
  //   const [color, setColor] = useState("red");
  //Multiple state
  //   const [car, setCar] = useState({
  //     brand: "Ford",
  //     color: "Red",
  //     model: "1920",
  //   });
  //   const updateColor = () => {
  //     setCar((previous) => {
  //       return { ...previous, color: "yellow" };
  //     });
  //   };
  const [count, setCount] = useState(0);
  const [calculateion, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   }, []);
  return (
    <>
      {/* <h1>
        This is {car.brand}, which color is {car.color} and model is {car.model}
      </h1>
      {/* Change All state */}
      {/* <button
        onClick={() =>
          setCar({ brand: "Mustag", color: "Yellow", moder: "2000" })
        }
      >
        Change Me
      </button> */}
      {/* //To change single state */}
      {/* <button onClick={updateColor}>Change me</button> */}
      {/* <h1>I have rendered {count} times</h1> */}
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation : {calculateion}</p>
    </>
  );
};
export default App;
