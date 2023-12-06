import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";

const Help: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <div className="text-center">Slack Messaging</div>
      </BodyLayout>
    </>
  );
};

export default Help;
