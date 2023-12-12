import React from "react";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import FooterLayout from "../components/footerLayout";
import { Element } from "react-scroll";


const Help: React.FC = () => {
  // useEffect(() => {
  //   // Dynamically create script element
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.socialintents.com/api/socialintents.1.3.js#2c9fab358c55c793018c570acc490100";
  //   script.async = true;

  //   // Append script to the body
  //   document.body.appendChild(script);

  //   // Cleanup: Remove script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <>
      {/* <BodyLayout> */}
      {/* <Navbar /> */}

      {/* </BodyLayout> */}
      <Element name="section1" className="element">
        <FadeInTransition>
          <div className="p-16">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              {/* Left Col */}
              <div className="w-full md:w-3/5 py-6 text-center">
                <img
                  className="w-full md:w-4/5 z-50"
                  src="/images/help.gif"
                  alt="Hero"
                />
              </div>
              {/* Right Col */}
              <div className="text-gray-600 flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight mx-auto">
                  How This Works
                </h1>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto bg-gray-600 w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <p className="leading-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mb-4 mx-auto">
                  Register to our System By Clicking Get Started
                </p>
                <p className="leading-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mb-4 mx-auto">
                  Fill the Form in the Apply Tab
                </p>
                <p className="leading-normal text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mb-4 mx-auto">
                  Check the Status of Your Request on the Status Tab
                </p>
              </div>
            </div>
          </div>
        </FadeInTransition>
      </Element>
      <Element name="section2" className="element">
        <FadeInTransition>
          <div className="p-16">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className=" text-gray-600 my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                Get the Support from One of Our Officers Through our Chat
              </h1>
              <button className="mt-16 mx-auto block bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Click Here
              </button>
            </div>
          </div>
        </FadeInTransition>
      </Element>
      <div>
        {/* Your other component code here */}
        <Helmet>
          <script
            src="https://www.socialintents.com/api/socialintents.1.3.js#2c9fab358c55c793018c570acc490100"
            async={true}
          ></script>
        </Helmet>
      </div>
      <FooterLayout>
        <section className="container mx-auto text-center py-6 mb-12">
          {/* <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Call to Action
          </h2> */}

          <h3 className="my-4 text-3xl leading-tight">Still have Problems ?</h3>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Contact Us
          </button>
        </section>
        <Footer />
      </FooterLayout>
    </>
  );
};

export default Help;
