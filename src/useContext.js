// Props drilling
import { useState, useContext, createContext } from "react";
// const Component1 = () => {
//   const [user, setUser] = useState("Sourav");
//   return (
//     <>
//       <h1>Hello {user}</h1>
//       <Component2 user={user} />
//     </>
//   );
// };
// export const Component2 = ({ user }) => {
//   return (
//     <>
//       <h1>Component2</h1>
//       <Component3 user={user} />
//     </>
//   );
// };
// export const Component3 = ({ user }) => {
//   return (
//     <>
//       <h1>Componenet3</h1>
//       <Component4 user={user} />
//     </>
//   );
// };
// export const Component4 = ({ user }) => {
//   return (
//     <>
//       <h1>Again {user}</h1>
//     </>
//   );
// };

// Now using prop drilling is very annoying but we can use useContext hook to remove this problem
const UserContext = createContext();
const Component1 = () => {
  const [user, setUser] = useState("Sourav");
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Hello {user}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  );
};
const Component2 = () => {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
};
const Component3 = () => {
  return (
    <>
      <h1>Componenet3</h1>
      <Component4 />
    </>
  );
};
const Component4 = () => {
  const val = useContext(UserContext);
  return (
    <>
      <h1>Again {val}</h1>
    </>
  );
};

export default Component1;
