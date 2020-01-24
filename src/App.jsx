import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/PortfolioPage/PortfolioPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <img id="background-image" src="./images/CodeBackground.png" alt="" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
