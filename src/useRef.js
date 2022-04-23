import { useState, useRef, useEffect } from "react";

const InputValue = () => {
  const [count, setCount] = useState("");
  const cnt = useRef(0);

  useEffect(() => {
    cnt.current = cnt.current + 1;
  });
  return (
    <>
      <input
        value={count}
        type="text"
        onChange={(e) => setCount(e.target.value)}
      />
      <h1>This is rendered {cnt.current} times</h1>
    </>
  );
};
export default InputValue;
