import React, {  useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Fooder from "../../Fooder/Fooder";
import Navbar from "../../Navbar/Navbar";
import Loading from "../../Loading/Loading";
import { LoaderContext } from "../../../Context/ContextProvider/ContextProvider";
import  { Toaster } from 'react-hot-toast';

const Root = () => {
  const { loading } = useContext(LoaderContext);
  const { setLoading } = useContext(LoaderContext);
  const location = useLocation();
  useEffect(() => {
   setLoading(true);
   setTimeout(() => {
    setLoading(false)
   }, 200);
  }, [location, setLoading]);


  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="minHeight">
          <Outlet></Outlet>
        </div>
      )}
      <Fooder></Fooder>
    </div>
  );
};

export default Root;
