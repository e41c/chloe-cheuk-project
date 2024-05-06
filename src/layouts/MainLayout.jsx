import React from "react";
import Nav from "../components/Nav";

function MainLayout({children}) {
  return (
    <div>
        <Nav></Nav>
        <div>{children}</div>
    </div>
  );
}

export default MainLayout;
