import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";

const Profile: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-16">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                User Profile
              </h1>
              
            </div>
          </div>
        </FadeInTransition>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Profile;
