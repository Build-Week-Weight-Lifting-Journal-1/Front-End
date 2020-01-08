import React from "react";
import FormikLogIn from "./log-in";
import { Route, BrowserRouter } from "react-router-dom";
import "./fonts.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/log-in" component={FormikLogIn} />
      </BrowserRouter>
    </>
  );
}

export default App;
