import React from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../components/bodyLayout";
import StatusBox from "../components/statusbox";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";
import { useStatusItems } from "../utils/statusContext";

const Status: React.FC = () => {
  const { statusItems } = useStatusItems();
  console.log(statusItems)
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
          />
        ))}
      </FadeInTransition>
      <Footer />
    </>
  );
};

export default Status;

// import React from "react";
// import Navbar from "../components/navbar";
// import BodyLayout from "../components/bodyLayout";
// import StatusBox from "../components/statusbox";
// import FadeInTransition from "../components/fadeInTrans";
// import Footer from "../components/footer";

// const Status: React.FC = () => {
//   return (
//     <>
//       <BodyLayout>
//         <Navbar />
//         <FadeInTransition>
//           <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center py-10">
//             Status of Your Requested Applications
//           </h1>
//         </FadeInTransition>
//       </BodyLayout>
//       <FadeInTransition>
//         <StatusBox
//           certificateNumber="Certificate #1"
//           idCheckStatus="Validated"
//           addressCheckStatus="Validated"
//           policeCheckStatus="Validated"
//         />

//         <StatusBox
//           certificateNumber="Certificate #2"
//           idCheckStatus="Declined"
//           addressCheckStatus="Validated"
//           policeCheckStatus="Validated"
//         />

//         <StatusBox
//           certificateNumber="Certificate #3"
//           idCheckStatus="Validated"
//           addressCheckStatus="Paused"
//           policeCheckStatus="Validated"
//         />

//         <StatusBox
//           certificateNumber="Certificate #4"
//           idCheckStatus="Validated"
//           addressCheckStatus="Validated"
//           policeCheckStatus="Processing"
//         />
//       </FadeInTransition>
//       <Footer />
//     </>
//   );
// };

// export default Status;
