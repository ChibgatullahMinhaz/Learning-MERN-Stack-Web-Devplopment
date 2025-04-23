import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { LawyerData } from "../../../Context/ContextProvider/ContextProvider";
import toast from "react-hot-toast";

const LawyerDetails = () => {
  const { id } = useParams();

  const { lawyers } = useContext(LawyerData);

  const singleLawyer = lawyers.find(lawyer => lawyer.registration_number === id);
  const navigate = useNavigate()

const handleAppointment =()=> {
    toast.success('appointment Booked')
    setTimeout(() => {

        navigate('/My-Bookings')
    }, 200);
}

  return <div>
    {singleLawyer?.name}

    <button className="btn btn-primary" onClick={handleAppointment}>Appointment</button>
  </div>;
};

export default LawyerDetails;
