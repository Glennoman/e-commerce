import { useState } from "react";
import "./index.css";
import Hero from "./components/Hero";
import LayoutWrapper from "./default layout/LayoutWrapper";

function App() {
  return (
    <>
      <LayoutWrapper>
        <Hero />
      </LayoutWrapper>
    </>
  );
}

export default App;
