import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";

const Help: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-16">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                Get the Support from One of Our Officers Through Google Chat
              </h1>
              <button className="mt-16 mx-auto block bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Click Here
              </button>
            </div>
          </div>
        </FadeInTransition>
      </BodyLayout>
      <Footer/>
    </>
  );
};

export default Help;
