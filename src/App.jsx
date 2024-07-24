import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import { Items, TopResturent } from "./Data/Header-images";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero Header_Data={Items} TopResturent={TopResturent} />
    </div>
  );
}

export default App;
