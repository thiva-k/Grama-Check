import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusBox from "../components/statusbox";
import { useStatusItems } from "../utils/statusContext";

interface StatusItem {
  name: string;
  address: string;
  nicNumber: string;
  certificateNo: string;
  police_check_status: string;
  id_check_status: string;
  address_check_status: string;
}

const EditCertificate: React.FC = () => {
  const { certificateNo } = useParams<{ certificateNo: string }>();
  const [searchResult, setSearchResult] = useState<StatusItem | null>(null);
  const { statusItems } = useStatusItems();
  useEffect(() => {
    const result = statusItems.find(
      (item) => item.certificateNo === `${certificateNo}`
    );

    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
    console.log(certificateNo)
    console.log(statusItems[0].certificateNo)
    console.log("destdrtdhjjjjj : ", searchResult);
  }, []);
  return (
    <div>
      <h1>Edit Certificate #{certificateNo}</h1>
      {searchResult ? (
        <StatusBox
          certificateNumber={searchResult.certificateNo}
          idCheckStatus={searchResult.id_check_status}
          addressCheckStatus={searchResult.address_check_status}
          policeCheckStatus={searchResult.police_check_status}
          serror={false}
        />
      ) : (
        <h1 className="my-4 text-red-400 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium leading-tight text-center">
          Oops! Something Went Wrong. Try Again
        </h1>
      )}
    </div>
  );
};

export default EditCertificate;
