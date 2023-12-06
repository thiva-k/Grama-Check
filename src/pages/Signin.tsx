import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in...", { email, password });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen h-14 bg-gradient-to-b hover:bg-gradient-to-r from-cyan-500 to-blue-500"
      // style={{ backgroundImage: 'url("/src/assets/back.jpg")' }}
    >
      <div className="w-full max-w-md ">
        <form
          className="bg-white p-8 rounded-large shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="peer w-full border rounded-md py-2 px-3"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 rounded-full mb-4"
          >
            Sign In
          </button>
          <div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 rounded-full mb-4">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Sign In with Facebook
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 rounded-full mb-4">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign In with Google
            </button>
            <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 rounded-full mb-4">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              Sign In with LinkedIn
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
