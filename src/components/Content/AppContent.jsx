import React from "react";
import "../Content/Content.css";
import Navbar from "../Navbar/Navbar";
const AppContent = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="main_content">
        <h1 className="h1_content_home">Project Task</h1>
      </div>
    </>
  );
};

export default AppContent;
