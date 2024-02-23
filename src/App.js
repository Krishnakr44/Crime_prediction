import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/ss" component={Header} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
