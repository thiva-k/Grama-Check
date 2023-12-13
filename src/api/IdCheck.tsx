export const performIdCheck = async (
  token: string,
  nic: string,
) => {
  const idCheckApiUrl =
    "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/gich/gramacheckidentitycheck/endpoint-10636-12e/v1.1/nicCheck";

  try {
    const idCheckResponse = await fetch(idCheckApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ nic }),
    });

    if (!idCheckResponse.ok) {
      throw new Error(`HTTP error! Status: ${idCheckResponse.status}`);
    }

    const idCheckData = await idCheckResponse.json();
    console.log("decoupledidapi", idCheckData);
    return idCheckData;
  } catch (error) {
    console.error("Error in id check:", error);
    throw error;
  }
};
