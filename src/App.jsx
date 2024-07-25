import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import { Items, TopResturent, TopResturent2 } from "./Data/Header-images";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero
        Header_Data={Items}
        TopResturent={TopResturent}
        TopResturent2={TopResturent2}
      />

      <Footer />
    </div>
  );
}

export default App;
