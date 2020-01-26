import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/PortfolioPage/PortfolioPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <img id="background-image" src="./images/CodeBackground.png" alt="" />
      <div className="main-content">
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
