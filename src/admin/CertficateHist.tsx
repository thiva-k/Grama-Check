import React, { useEffect} from "react";
import StatusTable from "../components/table";
import BodyLayout from "../components/bodyLayout";
import Navbar from "../components/navbar";
import FadeInTransition from "../components/fadeInTrans";
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
const Certificate: React.FC = () => {
  const entries = [
    {
      name: "John Doe",
      address: "123 Main St",
      nicNumber: "123456789",
      certificateNo: "ABC123",
      status: "Active",
    },
    {
      name: "Jane Doe",
      address: "456 Oak St",
      nicNumber: "987654321",
      certificateNo: "XYZ789",
      status: "Inactive",
    },
    {
      name: "Bob Smith",
      address: "789 Pine St",
      nicNumber: "456789123",
      certificateNo: "PQR456",
      status: "Pending",
    },
  ];
  const { statusItems, updateStatusItems, token, decodedToken } =
    useStatusItems();
  // const [serror, setSerror] = useState(false);
  console.log(statusItems);
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
        // setSerror(false);
        console.log(statusItems);
        updateStatusItems(statusItems);
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
        <StatusTable entries={entries} />
      </FadeInTransition>
    </div>
  );
};

export default Certificate;
