import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Summary from "./Summary";
import Buttons from "./Buttons";
import Content from "./Content";
import Footer from "./Footer";
import "./index.css";
const App = (
  <div className="card">
    <Header></Header>
    <Summary></Summary>
    <Buttons></Buttons>
    <Content></Content>
    <Footer></Footer>
  </div>
);
ReactDOM.render(App, document.querySelector("#root"));
