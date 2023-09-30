import "./App.css";
import "./theme.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Mohamed Adel");
  const [age, setage] = useState("22");
  const [count, setcount] = useState(0);
  const [Theme, setTheme] = useState("Light");

  const changeName = () => {
    setage("25");
  };

  return (
    <div className={`App ${Theme}`}>
      <button className="toggleButton"
        onClick={() => {
          setTheme((Theme == 'Light' ? "Dark" : "Light"));
        }}
      >
        Toggle Theme
      </button>




      <div className="btn-container">
  <i className="fa fa-sun-o" aria-hidden="true" />
  <label className="switch btn-color-mode-switch">
    <input onChange={() => {setTheme((Theme == 'Light' ? "Dark" : "Light"))}} type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
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
        <button
          onClick={() => {
            setTheme("Dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("Light");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setTheme("Gray");
          }}
          style={{ marginRight: "26px" }}
        >
          Gray
        </button>
        <button
          onClick={() => {
            setTheme("Pink");
          }}
          style={{ marginRight: "26px" }}
        >
          Pink
        </button>
      </div>

      <h2>My name is {person}</h2>
      <button
        onClick={() => {
          setPerson("Fisha");
        }}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {age} Years Old</h2>
      <button onClick={changeName}>Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
