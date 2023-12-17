export const performPoliceCheck = async (
  token: string,
  nic: string,
  name: string,
  address: string
) => {


  const policeCheckApiUrl =
    "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/gich/policecheckapi-pvm/endpoint-9090-803/v1/check_status";

  try {
    const policeCheckResponse = await fetch(policeCheckApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ nic, name, address }),
    });

    if (!policeCheckResponse.ok) {
      throw new Error(`HTTP error! Status: ${policeCheckResponse.status}`);
    }

    const policeCheckData = await policeCheckResponse.json();
    console.log("decoupledapi", policeCheckData);
    return policeCheckData;
  } catch (error) {
    console.error("Error in police check:", error);
    throw error;
  }
};
