import React from "react";

import Navbar from "../components/navbar";
import Form from "../components/form";
import BodyLayout from "../components/bodyLayout";

const Apply: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
          <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center">
            To Request a Grama Sevaka Certificate, Fill the below Application
            with Correct Details and Submit.
          </h1>
        </div>
      </BodyLayout>
      <div className="p-4">
        <Form />
      </div>
    </>
  );
};

export default Apply;
