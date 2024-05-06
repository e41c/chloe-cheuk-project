import React from "react";
import Nav from "../components/Nav";
import FooterLayout from "./FooterLayout";

function MainLayout({children}) {
  return (
    <div>
        <Nav></Nav>
        <div>{children}</div>
        <FooterLayout></FooterLayout>
    </div>
  );
}

export default MainLayout;
