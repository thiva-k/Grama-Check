import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";
import StatusBox from "../components/statusbox";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";
import { useStatusItems } from "../utils/statusContext";
import { performGetStatus } from "../api/getStatus";


interface ApiResponseItem {
  id: number;
  user_id: string;
  police_check_status: number;
  id_check_status: number;
  address_check_status: number;
}

interface ApiResult {
  result: ApiResponseItem[];
}
interface StatusItem {
  certificateNumber: string;
  idCheckStatus: string;
  addressCheckStatus: string;
  policeCheckStatus: string;
}

const Status: React.FC = () => {
  const { statusItems, updateStatusItems, token, decodedToken } = useStatusItems();
  const [serror, setSerror] = useState(false)
  console.log(statusItems)
  
  const getStatus = async () => {
    (async (): Promise<void> => {
      let getStatusResponse;
      try {
        if (token !== null) {
          getStatusResponse = await performGetStatus(token, decodedToken?.nic);
          console.log("get status response: ", getStatusResponse);
          const statusItems: StatusItem[] = mapApiToStatusItems(
            getStatusResponse
            // apiresp
          );
          setSerror(false)
          console.log(statusItems);
          updateStatusItems(statusItems)
        } else {
          console.error("Token is null");
          setSerror(true);
        }
      } catch (error) {
        console.error("Error in component:", error);
        setSerror(true)
      }

    })();
  };
  useEffect(() => {
    getStatus()
  }, []);

  const mapApiToStatusItems = (apiResponse: ApiResult): StatusItem[] => {
    return apiResponse.result.map((apiItem) => ({
      certificateNumber: `Certificate #${apiItem.id}`,
      idCheckStatus: mapStatus(apiItem.id_check_status),
      addressCheckStatus: mapStatus(apiItem.address_check_status),
      policeCheckStatus: mapStatus(apiItem.police_check_status),
    }));
  };

  const mapStatus = (statusCode: number): string => {
    switch (statusCode) {
      case 0:
        return "Declined";
      case 1:
        return "Pending";
      case 2:
        return "Validated";
      case 3:
        return "Paused";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center py-10">
            Status of Your Requested Applications
          </h1>
        </FadeInTransition>
      </BodyLayout>
      <FadeInTransition>
        {statusItems.map((statusItem, index) => (
          <StatusBox
            key={index}
            certificateNumber={statusItem.certificateNumber}
            idCheckStatus={statusItem.idCheckStatus}
            addressCheckStatus={statusItem.addressCheckStatus}
            policeCheckStatus={statusItem.policeCheckStatus}
            serror={serror}
          />
        ))}
        {serror && (
          <h1 className="my-4 text-red-400 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium leading-tight text-center">
            Oops! Something Went Wrong. Try Again
          </h1>
        )}
      </FadeInTransition>
      <Footer />
    </>
  );
};

export default Status;


