// StatusBox.tsx
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

interface StatusBoxProps {
  certificateNumber: string;
  idCheckStatus: string;
  addressCheckStatus: string;
  policeCheckStatus: string;
}

const StatusBox: React.FC<StatusBoxProps> = ({
  certificateNumber,
  idCheckStatus,
  addressCheckStatus,
  policeCheckStatus,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [certificateStatus, setCertificateStatus] = useState("Declined");

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const updateOverallStatus = () => {
      if (
        idCheckStatus === "Validated" &&
        addressCheckStatus === "Validated" &&
        policeCheckStatus === "Validated"
      ) {
        setCertificateStatus("Approved");
      } else if (
        idCheckStatus === "Declined" ||
        addressCheckStatus === "Declined" ||
        policeCheckStatus === "Declined"
      ) {
        setCertificateStatus("Declined");
      } else if (
        idCheckStatus === "Paused" ||
        addressCheckStatus === "Paused" ||
        policeCheckStatus === "Paused"
      ) {
        setCertificateStatus("More Info required");
      } else {
        setCertificateStatus("Pending");
      }
    };

    updateOverallStatus();
  }, [idCheckStatus, addressCheckStatus, policeCheckStatus]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "-green-500";
      case "Declined":
        return "-red-500";
      case "More Info required":
        return "-yellow-500";
      default:
        return "-blue-500";
    }
  };

  const getOverallCertificateStatus = () => {
    if (
      idCheckStatus === "Validated" &&
      addressCheckStatus === "Validated" &&
      policeCheckStatus === "Validated"
    ) {
      return "Your Certificate is Ready. We've sent it to your address.";
    } else if (
      idCheckStatus === "Declined" ||
      addressCheckStatus === "Declined" ||
      policeCheckStatus === "Declined"
    ) {
      return "One of the checks is declined. Please contact us immediately at +94 77 255 2557.";
    } else if (
      idCheckStatus === "Paused" ||
      addressCheckStatus === "Paused" ||
      policeCheckStatus === "Paused"
    ) {
      return "More Information is required to complete the validation. An officer will contact you soon.";
    } else {
      return "Your Certificate is being Processed. We'll notify you whenever it's ready.";
    }
  };

  return (
    <div
      className={`bg-white shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out mx-4 sm:mx-4 md:mx- lg:mx-16 xl:mx-16 p-6 rounded-3xl ${
        isExpanded ? "max-h-full" : "max-h-32"
      } mb-8`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-600">
          {certificateNumber}
        </h1>
        <div className="flex items-center space-x-6">
          <span className="relative flex h-3 w-3">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full bg${getStatusColor(
                certificateStatus
              )} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 bg${getStatusColor(
                certificateStatus
              )}`}
            ></span>
          </span>
          <span
            className={`text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl font-bold text${getStatusColor(
              certificateStatus
            )}`}
          >
            {certificateStatus}
          </span>
          <div className="rounded-full overflow-hidden bg-gray-100 hover:bg-gray-200">
            <button
              className="focus:outline-none p-2"
              onClick={handleToggleExpand}
            >
              <FaAngleDown
                className={`text-gray-600 ${
                  isExpanded ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Additional content */}
      {isExpanded && (
        <div className="text-gray-500 mt-4 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-2">ID Check</h2>
            <p>Status: {idCheckStatus}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Address Check</h2>
            <p>Status: {addressCheckStatus}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Police Check</h2>
            <p>Status: {policeCheckStatus}</p>
          </div>
          <div className="col-span-2">
            <p className="text-lg font-bold mb-2">
              {getOverallCertificateStatus()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusBox;
