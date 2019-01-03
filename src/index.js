import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button type={"danger"}>Delete</Button>
      <Button type={"primary"} size={"small"}>
        Approve
      </Button>
      {/* Button Group lets user select only one value at a time */}
      {<Button.Group value={btn-group}>
        <Button value={0}>First Value</Button>
        <Button value={1}>Second Value</Button>
      </Button.Group>
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
