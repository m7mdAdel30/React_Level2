import "./App.css";
import "./theme.css";
// import { useState } from "react";
// import { useReducer } from "react";
import {Link} from 'react-router-dom';
import {useContext } from "react";
import ThemeContext from "./context/dataCont";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.setValue };
//     case "CHANGE_AGE":
//       return { ...state, age: action.setValue };
//     case "CHANGE_COUNT":
//       return { ...state, startCount: action.setValue };
//     case "CHANGE-MODE":
//       return { ...state, mode: action.setValue };
//     default:
//       return state;
//   }
// };

function App() {
  const {name} = useContext(ThemeContext);
  // const initialData = {
  //   name: "Mohamed Adel",
  //   age: 22,
  //   startCount: 0,
  //   mode: "Light",
  // };
  // const [person, setPerson] = useState("Mohamed Adel");
  // const [age, setage] = useState("22");
  // const [count, setcount] = useState(0);
  // const [Theme, setTheme] = useState("Light");

  // const changeName = () => {
  //   setage("25");
  // };

  // const [Data, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App`}>
      <Link to='/Page2' >Go To PAGE2</Link>


      {/* <button onClick={() => {
        dispatch({ type: "CHANGE-MODE", setValue: Data.mode == 'Light' ? 'Dark' : 'Light' });
      }} className="toggleButton">Toggle Theme</button>

      <div className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
          onChange={() => {
            dispatch({ type: "CHANGE-MODE", setValue: Data.mode == 'Light' ? 'Dark' : 'Light' });
          }} 
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button onClick={() => {
          dispatch({ type: "CHANGE-MODE", setValue: 'Dark' });
        }} style={{ marginRight: "26px" }}>Dark</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE-MODE", setValue: 'Light' });
        }}  style={{ marginRight: "26px" }}>Light</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE-MODE", setValue: 'Gray' });
        }}  style={{ marginRight: "26px" }}>Gray</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE-MODE", setValue: 'Pink' });
        }}  style={{ marginRight: "26px" }}>Pink</button>
      </div> */}

      <h2>My name is {name} </h2>
      <button 
      // onClick={() => {
        // dispatch({ type: "CHANGE_NAME", setValue: 'Mido Fisha' });
      // }} 
      >Change name</button>
      <br />
      <br />

      {/* <h2>My Age is {Data.age} Years Old</h2>
      <button onClick={() => {
        dispatch({ type: "CHANGE_AGE", setValue: '27' });
      }}>Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={() => {
        dispatch({ type: "CHANGE_COUNT", setValue: Data.startCount+1 });
      }} >count is {Data.startCount} </button> */}
    </div>
  );
}

export default App;
