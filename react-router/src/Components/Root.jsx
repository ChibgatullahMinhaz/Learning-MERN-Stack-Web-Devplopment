import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";
import SideBar from "./SideBar";
import "./Root.css";
const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="flex">
        <SideBar></SideBar>
        <div className="content">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
