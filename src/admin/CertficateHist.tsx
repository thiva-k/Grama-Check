import React from "react";
import StatusTable from "../components/table";
import BodyLayout from "../components/bodyLayout";
import Navbar from "../components/navbar";
import FadeInTransition from "../components/fadeInTrans";

const Certificate: React.FC = () => {
  const entries = [
    {
      name: "John Doe",
      address: "123 Main St",
      nicNumber: "123456789",
      certificateNo: "ABC123",
      status: "Active",
    },
    {
      name: "Jane Doe",
      address: "456 Oak St",
      nicNumber: "987654321",
      certificateNo: "XYZ789",
      status: "Inactive",
    },
    {
      name: "Bob Smith",
      address: "789 Pine St",
      nicNumber: "456789123",
      certificateNo: "PQR456",
      status: "Pending",
    },
  ];

  return (
    <div>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-4">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                Access all the requested Certificates Here
              </h1>
            </div>
          </div>
        </FadeInTransition>
      </BodyLayout>
      <FadeInTransition>
        <StatusTable entries={entries} />
      </FadeInTransition>
    </div>
  );
};

export default Certificate;
