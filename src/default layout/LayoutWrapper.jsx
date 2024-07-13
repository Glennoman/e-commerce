// src/LayoutWrapper.jsx
import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="layout-wrapper w-[1440px] h-[900px] max-w-full max-h-full mx-auto">
      {children}
    </div>
  );
};

export default LayoutWrapper;
