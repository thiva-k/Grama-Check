import React from "react";
import { useParams } from "react-router-dom";

const EditCertificate: React.FC = () => {
  const { certificateNo } = useParams<{ certificateNo: string }>();


  return (
    <div>
      <h1>Edit Certificate #{certificateNo}</h1>
    </div>
  );
};

export default EditCertificate;
