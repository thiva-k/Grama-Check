import React, { useState } from "react";
// import { submitFormData } from "../api/IdCheckApi";
import { useAuthContext } from "@asgardeo/auth-react";

const Form: React.FC = () => {
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  // const [submit, setSubmit] = useState(false);
  const { getAccessToken } = useAuthContext();

  const handleSubmit = async () => {
    try {
      // Obtain the access token
      const token = await getAccessToken();
      console.log("Access Token:", token);
      // API endpoint for the POST request
      const apiUrl = "https://7902e7c7-f73b-401f-a1db-07c524deb30a-dev.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1/nicCheck";
                    //https://7902e7c7-f73b-401f-a1db-07c524deb30a-dev.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1.0/nicCheck

      // Make the API request with the obtained access token
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        body: JSON.stringify({ id, name, address }),
      });

      // Check if the API request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("API Response Post:", data);
      alert("IDCheckAPI Response: " + JSON.stringify(data));
    } catch (error:any) {
      // Handle errors
      console.error("Error:", error.message);
    }
  };

  // const handleSubmit = async () => {
  //   getAccessToken()
  //     .then((token) => {
  //       // Token is the resolved value of the promise
  //       const apiUrl = `https://7902e7c7-f73b-401f-a1db-07c524deb30a-prod.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1/checkNic/${id}`;

  //       // Make the API request with the obtained access token
  //       return fetch(apiUrl, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           accept: "application/json",
  //         },
  //       });
  //     })
  //     .then((response) => {
  //       // Check if the API request was successful
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       // Parse the JSON response
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Handle the data from the API response
  //       console.log("API Response:", data);
  //       alert("IDCheckAPI Response: " + JSON.stringify(data));
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Error:", error.message);
  //     });
  // };
  return (
    <>
      <form
        className="max-w-md mx-auto shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out p-4 rounded-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="p-8">
          <h1 className="my-4 text-xl font-semibold leading-tight">
            Please fill out all the fields
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_id"
              id="floating_id"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label
              htmlFor="floating_id"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ID Number
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_address"
              id="floating_address"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label
              htmlFor="floating_address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_number"
              id="floating_number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <label
              htmlFor="floating_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          <button
            type="submit"
            className="mt-16 mx-auto block bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
      { (
        <h1 className="my-4 text-green-400 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium leading-tight text-center">
          Your request is being proccessed. We'll get back to You Soon
        </h1>
      )}
    </>
  );
};

export default Form;
