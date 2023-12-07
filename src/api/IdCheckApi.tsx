import { useAuthContext } from "@asgardeo/auth-react";

export const handleIdCheck = async (
  nic: string,
  name: string,
  address: string
) => {
  try {
    const { getAccessToken } = useAuthContext();
    const token = await getAccessToken();

    const apiUrl =
      "https://7902e7c7-f73b-401f-a1db-07c524deb30a-dev.e1-us-east-azure.choreoapis.dev/rkjj/id-check/endpoint-9090-803/v1/nicCheck";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ nic, name, address }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response Post:", data);

    // Print the response in the console
    return data;
  } catch (error) {
    console.error("Error:", (error as Error).message);
    throw error;
  }
};
