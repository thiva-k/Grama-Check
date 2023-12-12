import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuthContext } from "@asgardeo/auth-react";
import { Avatar } from "flowbite-react";

const Navbar: React.FC = () => {
  const { state, signIn, signOut } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="bg-white bg-opacity-25 sticky dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Grama Check
          </span>
          {state.isAuthenticated ? (
            <>
              <div className="flex items-center md:hidden lg:hidden xl:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              {isMenuOpen && (
                <div className="mt-2 p-2 w-24 bg-white opacity-70 rounded-lg shadow-lg top-20 content-center z-50 absolute">
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link to="/" className="block text-gray-800 py-2">
                      Home
                    </Link>
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link to="/apply" className="block text-gray-800 py-2">
                      Apply
                    </Link>
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link to="/status" className="block text-gray-800 py-2">
                      Status
                    </Link>
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link to="/help" className="block text-gray-800 py-2"> */}
                    <ScrollLink
                      to="section1"
                      smooth={true}
                      duration={500}
                      className="block text-gray-800 py-2 cursor-pointer"
                    >
                      Help
                    </ScrollLink>
                    {/* </Link> */}
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link to="/help" className="block text-gray-800 py-2"> */}
                    <ScrollLink
                      to="section2"
                      smooth={true}
                      duration={500}
                      className="block text-gray-800 py-2 cursor-pointer"
                    >
                      Contact
                    </ScrollLink>
                    {/* </Link> */}
                  </div>
                </div>
              )}
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <Link to="/profile">
                  <Avatar
                    img="/images/profile.png"
                    alt="avatar of Jese"
                    rounded
                    className="mr-4 lg:mr-8 xl:mr-8"
                    status="online"
                    bordered
                    color="success"
                  />
                </Link>
                <button
                  type="button"
                  className="text-gray-800 bg-white hover:bg-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => signOut()}
                >
                  Log Out
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link
                      to="/"
                      className="self-center font-semibold whitespace-nowrap dark:text-white "
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link
                      to="/apply"
                      className="self-center font-semibold whitespace-nowrap dark:text-white "
                    >
                      Apply
                    </Link>
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link
                      to="/status"
                      className="self-center font-semibold whitespace-nowrap dark:text-white "
                    >
                      Status
                    </Link>
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <ScrollLink
                      to="section1"
                      smooth={true}
                      duration={500}
                      className="self-center font-semibold whitespace-nowrap dark:text-white cursor-pointer"
                    >
                      <Link
                        to="/"
                      >
                        Help
                      </Link>
                    </ScrollLink>
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <ScrollLink
                      to="section2"
                      smooth={true}
                      duration={500}
                      className="self-center font-semibold whitespace-nowrap dark:text-white cursor-pointer"
                    >
                      <Link to="/">Contact</Link>
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center md:hidden lg:hidden xl:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              {isMenuOpen && (
                <div className="mt-2 p-2 w-24 bg-white opacity-70 rounded-lg shadow-lg top-20 content-center z-50 absolute">
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link to="/" className="block text-gray-800 py-2">
                      Home
                    </Link>
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link to="help" className="block text-gray-800 py-2"> */}
                    <ScrollLink
                      to="section1"
                      smooth={true}
                      duration={500}
                      className="block text-gray-800 py-2 cursor-pointer"
                    >
                      Help
                    </ScrollLink>
                    {/* </Link> */}
                  </div>
                  <div className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link to="help" className="block text-gray-800 py-2"> */}
                    <ScrollLink
                      to="section2"
                      smooth={true}
                      duration={500}
                      className="block text-gray-800 py-2 cursor-pointer"
                    >
                      Contact
                    </ScrollLink>
                    {/* </Link> */}
                  </div>
                </div>
              )}
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="text-gray-800 bg-white hover:bg-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  // className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-4 sm:py-3 sm:px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    <Link
                      to="/"
                      className="self-center font-semibold whitespace-nowrap dark:text-white "
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link
                      to="/help"
                      className="self-center font-semibold whitespace-nowrap dark:text-white"
                    > */}
                    <ScrollLink
                      to="section1"
                      smooth={true}
                      duration={500}
                      className="self-center font-semibold whitespace-nowrap dark:text-white cursor-pointer"
                    >
                      Help
                    </ScrollLink>
                    {/* </Link> */}
                  </li>
                  <li className="hover:scale-105 transform transition duration-300 ease-in-out">
                    {/* <Link
                      to="/help"
                      className="self-center font-semibold whitespace-nowrap dark:text-white"
                    > */}
                    <ScrollLink
                      to="section2"
                      smooth={true}
                      duration={500}
                      className="self-center font-semibold whitespace-nowrap dark:text-white cursor-pointer"
                    >
                      Contact
                    </ScrollLink>
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
