// import { createContext, useReducer } from "react";
// const ThemeContexttt = createContext();

// const initialData = { myName: "ali hassan" };
// const reducer = (firstState, action) => {
// switch (action.type) {
//   case "CHANGE_NAME":
//     return { ...firstState, myName: action.newValue };
//   default:
//     return firstState;
// }}

// export function ThemeProvider({ children }) {
//   const [firstState, dispatch] = useReducer(reducer, initialData);
//   const changeName = (newName) => {
//     dispatch({ type: "CHANGE_NAME", newValue: newName });
//   };

//   return (
//      <ThemeContexttt.Provider value={{ ...firstState, changeName }}>
//       {children}
//      </ThemeContexttt.Provider>
//   );
// }

// export default ThemeContexttt;
