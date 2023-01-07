import React from "react";
import Header from "./Components/Header";
import "./index.css";
function App() {
  // const x = 5;
  // let text = "Hello";
  // if (x > 5) {
  //   text = "Goodbye";
  // }
  // const myEl = (
  //   <ul>
  //     <li>React</li>
  //     <li>JS</li>
  //   </ul>
  // );

  const myEl = React.createElement("h1", {}, "I dont want to use JSX");

  return (
    <div className="App">
      <Header title="Task Tracker" />
    </div>
  );
}

export default App;
