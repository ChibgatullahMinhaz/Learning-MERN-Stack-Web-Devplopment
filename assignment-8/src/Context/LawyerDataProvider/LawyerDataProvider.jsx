import React, { useContext, useEffect, useState } from "react";
import { LawyerData, LoaderContext } from "../ContextProvider/ContextProvider";
import Loading from "../../components/Loading/Loading";

const LawyerDataProvider = ({ children }) => {
  const { loading } = useContext(LoaderContext);
  const { setLoading } = useContext(LoaderContext);
  const [lawyers, setLawyers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/Componetsdata.json");
        const Data = await res.json();
        setLawyers(Data);
      } catch (error) {
        setError(error.message);
      } finally {
        setError("");
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  if (loading) {
    <Loading></Loading>;
  }
  return (
    <LawyerData.Provider
      value={{ setLoading, setLawyers, error, setError, lawyers, loading }}
    >
      {children}
    </LawyerData.Provider>
  );
};

export default LawyerDataProvider;
