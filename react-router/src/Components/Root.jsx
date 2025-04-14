import React from "react";
import { Outlet, useNavigation } from "react-router";
import Nav from "./Nav";
import SideBar from "./SideBar";
import "./Root.css";
const Root = () => {
  const navigation = useNavigation();
  
  return (
    <div>
      <Nav></Nav>
      <div className="flex">
        <SideBar></SideBar>
        {
          navigation.state === "loading"  && <p>Loading...</p>
        }
        <div className="content">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
