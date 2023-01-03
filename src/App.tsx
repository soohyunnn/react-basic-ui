import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SkeletonPage from "./pages/SkeletonPage";
import CarouselPage from "./pages/CarouselPage";

function App() {
  return (
    <div className="App">
      {/* <SkeletonPage /> */}
      <CarouselPage />
    </div>
  );
}

export default App;
