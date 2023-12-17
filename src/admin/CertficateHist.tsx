import React, { useEffect } from "react";
import StatusTable from "../components/table";
import BodyLayout from "../components/bodyLayout";
import Navbar from "../components/navbar";
import FadeInTransition from "../components/fadeInTrans";
import { useStatusItems } from "../utils/statusContext";
import { performgetCertificate } from "../api/getCertificate";

interface ApiResponseItem {
  name: string;
  address: string;
  nicNumber: string;
  certificateNo: string;
  police_check_status: number;
  id_check_status: number;
  address_check_status: number;
}

interface ApiResult {
  result: ApiResponseItem[];
}
interface StatusItem {
  name: string;
  address: string;
  nicNumber: string;
  certificateNo: string;
  status: string;
}
let statusItems: StatusItem[];
const Certificate: React.FC = () => {
  // const entries = {
  //   result: [
  //     {
  //       name: "John Doe",
  //       address: "123 Main St",
  //       nicNumber: "123456789",
  //       certificateNo: "ABC123",
  //       police_check_status: 1,
  //       id_check_status: 2,
  //       address_check_status: 2,
  //     },
  //     {
  //       name: "Jane Doe",
  //       address: "456 Oak St",
  //       nicNumber: "987654321",
  //       certificateNo: "XYZ789",
  //       status: "Inactive",
  //       police_check_status: 2,
  //       id_check_status: 2,
  //       address_check_status: 2,
  //     },
  //     {
  //       name: "Bob Smith",
  //       address: "789 Pine St",
  //       nicNumber: "456789123",
  //       certificateNo: "PQR456",
  //       status: "Pending",
  //       police_check_status: 2,
  //       id_check_status: 1,
  //       address_check_status: 3,
  //     },
  //   ],
  // };
  const { token, decodedToken } = useStatusItems();
  // const [serror, setSerror] = useState(false);
  const getStatus = async () => {
    (async (): Promise<void> => {
      let getStatusResponse;
      try {
        if (token !== null) {
          getStatusResponse = await performgetCertificate(
            token,
            decodedToken?.grama_division
          );
          console.log("get status response: ", getStatusResponse);
          statusItems = mapApiToStatusItems(
            getStatusResponse
          );
          // setSerror(false);
          console.log(statusItems);
        } else {
          console.error("Token is null");
          // setSerror(true);
        }
      } catch (error) {
        console.error("Error in component:", error);
        // setSerror(true);
      }
    })();
  };
  useEffect(() => {
    getStatus();
  }, []);
  const mapApiToStatusItems = (apiResponse: ApiResult): StatusItem[] => {
    return apiResponse.result.map((apiItem) => ({
      name: apiItem.name,
      address: apiItem.address,
      nicNumber: apiItem.nicNumber,
      certificateNo: `Certificate #${apiItem.certificateNo}`,
      status: updateOverallStatus(
        mapStatus(apiItem.id_check_status),
        mapStatus(apiItem.address_check_status),
        mapStatus(apiItem.police_check_status)
      ),
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
  const updateOverallStatus = (
    idCheckStatus: string,
    addressCheckStatus: string,
    policeCheckStatus: string
  ) => {
    if (
      idCheckStatus === "Validated" &&
      addressCheckStatus === "Validated" &&
      policeCheckStatus === "Validated"
    ) {
      // setCertificateStatus("Approved");
      return "Approved";
    } else if (
      idCheckStatus === "Declined" ||
      addressCheckStatus === "Declined" ||
      policeCheckStatus === "Declined"
    ) {
      // setCertificateStatus("Declined");
      return "Declined";
    } else if (
      idCheckStatus === "Paused" ||
      addressCheckStatus === "Paused" ||
      policeCheckStatus === "Paused"
    ) {
      // setCertificateStatus("More Info required");
      return "More Info required";
    } else {
      // setCertificateStatus("Pending");
      return "Pending";
    }
  };
    // statusItems = mapApiToStatusItems(
    //   // getStatusResponse
    //   // apiresp
    //   entries
    // );
    // // setSerror(false);
    // console.log(statusItems);
  return (
    <div>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-4">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                Access all the requested Certificates Here
              </h1>
            </div>
          </div>
        </FadeInTransition>
      </BodyLayout>
      <FadeInTransition>
        <StatusTable entries={statusItems} />
      </FadeInTransition>
    </div>
  );
};

export default Certificate;
