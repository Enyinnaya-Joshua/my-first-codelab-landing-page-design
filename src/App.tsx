import React from "react";
import Header from "./MainPage/Header";
import Footer from "./MainPage/Footer";
import AllRouter from "./AllRouter/AllRouter";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AllRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
