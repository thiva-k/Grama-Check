import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";
import FadeInTransition from "../components/fadeInTrans";
import { useAuthContext } from "@asgardeo/auth-react";
import Help from "./Help";


const Home: React.FC = () => {
  const { signIn } = useAuthContext();
  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-16">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              {/* Left Col */}
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight">
                  Streamline Your Grama Sevaka Certificate Application Process
                </h1>
                <p className="leading-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mb-8">
                  Apply Certificate Online Today for Hassle-Free Service!
                </p>
                <button
                  onClick={() => signIn()}
                  className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Get Started
                </button>
              </div>
              {/* Right Col */}
              <div className="md:w-1/5"></div>
              <div className="w-full md:w-2/5 py-6 text-center">
                <img
                  className="w-full md:w-4/5 z-50"
                  src="/images/hero.gif"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </FadeInTransition>
      </BodyLayout>
      
        <Help />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
