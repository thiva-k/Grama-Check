export const performSendTwilio = async (token: string, fromMobile: string, message: string, toMobile: string) => {
  const SendTwilioApiUrl =
    "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/gich/twilioservice/twilio-a6a/v1.0/sms";
  try {
    const SendTwilioResponse = await fetch(SendTwilioApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ fromMobile, message, toMobile }),
    });

    if (!SendTwilioResponse.ok) {
      throw new Error(`HTTP error! Status: ${SendTwilioResponse.status}`);
    }

    const SendTwilioData = await SendTwilioResponse.json();
    console.log("decoupledtwilioapi", SendTwilioData);
    return SendTwilioData;
  } catch (error) {
    console.error("Error in twilio check:", error);
    throw error;
  }
};
