import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

// IMP --> every component is just a simple function
// components are basically functions that i import from other files so can also locally create any funciton like A and B and i can use it inside my jsx just like any other component

// useEffect runs after rendering the component

function App() {
  const [showComponent, setShowComponent] = useState(false);
  let A = () => <div>showComponent: A</div>;
  let B = () => <div>showComponent: B</div>;
  return (
    <div className="App" onClick={() => setShowComponent(!showComponent)}>
      {showComponent ? <A /> : <B />}
      <Todos />
    </div>
  );
}

export default App;
