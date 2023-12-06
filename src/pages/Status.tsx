import React from "react";
import Navbar from "../components/navbar";

const Status: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        Status: Pending / Processing / Completed
      </div>
    </>
  );
};

export default Status;
