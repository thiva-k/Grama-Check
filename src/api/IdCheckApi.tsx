import { useAuthContext } from "@asgardeo/auth-react";

export const submitFormData = async (id: string) => {
  const { getAccessToken } = useAuthContext();
  getAccessToken()
    .then((token) => {
      // Token is the resolved value of the promise
      const apiUrl = `https://7902e7c7-f73b-401f-a1db-07c524deb30a-prod.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1/checkNic/${id}`;

      // Make the API request with the obtained access token
      return fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
    })
    .then((response) => {
      // Check if the API request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the data from the API response
      console.log("API Response:", data);
      alert("IDCheckAPI Response: " + JSON.stringify(data));
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error.message);
    });
};
