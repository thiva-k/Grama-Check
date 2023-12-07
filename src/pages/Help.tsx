import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";

const Help: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-center">
            Get the Support from One of Our Officers Through Google Chat
          </h1>
          <button className="mt-16 mx-auto block bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Click Here
          </button>
        </div>
      </BodyLayout>
    </>
  );
};

export default Help;
