export const performAddressCheck = async (token: string, nic: string, address:string) => {
  const addressCheckApiUrl =
    "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/gich/address-check/endpoint-3000-197/v1.0/addressCheck";

  try {
    const addressCheckResponse = await fetch(addressCheckApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ nic, address }),
    });

    if (!addressCheckResponse.ok) {
      throw new Error(`HTTP error! Status: ${addressCheckResponse.status}`);
    }

    const addressCheckData = await addressCheckResponse.json();
    console.log("decoupledaddressapi", addressCheckData);
    return addressCheckData;
  } catch (error) {
    console.error("Error in address check:", error);
    throw error;
  }
};
