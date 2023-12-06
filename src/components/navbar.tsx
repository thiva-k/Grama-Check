import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

const Navbar: React.FC = () => {
  const { state, signIn, signOut } = useAuthContext();
  return (
    <nav className="bg-white bg-opacity-25 sticky dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Grama Check
        </span>
        {state.isAuthenticated ? (
          <>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-gray-800 bg-white hover:bg-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => signOut()}
              >
                Log Out
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
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
                  <Link
                    to="/help"
                    className="self-center font-semibold whitespace-nowrap dark:text-white "
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-gray-800 bg-white hover:bg-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-4 sm:py-3 sm:px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={() => signIn()}
              >
                Sign In
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
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
                    to="/help"
                    className="self-center font-semibold whitespace-nowrap dark:text-white"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
