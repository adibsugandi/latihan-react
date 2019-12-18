import React from "react";
import Counter from "./component/counter/counter";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/a">
          <h1>A</h1>
        </Route>
        <Route path="/b">
          <h1>B</h1>
        </Route>
        <Route path="/">
          <h1>Error</h1>
        </Route>
      </Switch>
    </div>

    // <Counter />
    // <Counter />
  );
}

// function Paijo(props) {
//   return (
//     <div></div>
//     // <h1>
//     //   Paijo Sedang {props.children} sedang menggunakan baju {props.baju}
//     // </h1>
//   );
// }

export default App;
