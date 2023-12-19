import React from "react";

import Navbar from "../components/navbar";
import Form from "../components/form";
import BodyLayout from "../layouts/bodyLayout";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";

const Apply: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
            <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center">
              To Request a Grama Sevaka Certificate, Fill the below Application
              with Correct Details and Submit.
            </h1>
          </div>
        </FadeInTransition>
      </BodyLayout>
      <FadeInTransition>
        <div className="p-4">
          <Form />
        </div>
      </FadeInTransition>
      <Footer />
    </>
  );
};

export default Apply;
