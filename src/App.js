import React from "react";
// import TimerWrapper from "./timer/timer";
import Timer from "./timer/timer";
// import Button from "./button";
class App extends React.Component {
  render() {
    return (
      <div>
        <Timer initialTime="30" />
        <Timer initialTime="60" initialState="true" step="2000" />
        <Timer initialTime="100" step="5000" />
      </div>
    );
  }
}

export default App;
