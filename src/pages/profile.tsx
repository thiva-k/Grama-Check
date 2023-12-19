import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import BodyLayout from "../layouts/bodyLayout";
import FadeInTransition from "../components/fadeInTrans";
import Footer from "../components/footer";
import { useStatusItems } from "../utils/statusContext";
import { performGetProfile } from "../api/getProfile";
import { get } from "react-scroll/modules/mixins/scroller";

const initialProfileData = {
  fullName: "John Doe",
  phoneNumber: "123-456-7890",
  nicNumber: "123456789X",
  gramaDivision: "Example Grama",
  address: "123 Main Street, City",
};

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [updatedData, setUpdatedData] = useState({
    fullName: profileData.fullName,
    phoneNumber: profileData.phoneNumber,
    nicNumber: profileData.nicNumber,
    gramaDivision: profileData.gramaDivision,
    address: profileData.address,
  });
  const { token, decodedToken } = useStatusItems();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProfilePicture(file || null);
  };

  const handleUpdateProfile = () => {
    // Implement your logic to update the profile data here
    // For example, you can send an API request to update the user's details
    console.log("Updated data:", updatedData);
    setProfileData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
    console.log(profilePicture);
    // Close the modal after updating
    handleCloseModal();
  };

  const getProfileData = async () => {
    (async (): Promise<void> => {
      let getProfileDataResponse;
      try {
        if (token != null) {
          getProfileDataResponse = await performGetProfile(token, decodedToken?.nic);
          console.log("get profile data response: ", getProfileDataResponse);
          setUpdatedData({
            fullName: getProfileDataResponse.result.name,
            phoneNumber: getProfileDataResponse.result.phone_no,
            address: getProfileDataResponse.result.address,
            gramaDivision: getProfileDataResponse.result.gramadevision,
            nicNumber: getProfileDataResponse.result.id
          })
        }
      } catch (error) {
        console.log("Error in getting profile data: ", error)
      }
    })
  }

  useEffect(() => {
    getProfileData();
  }, [token]);

  return (
    <>
      <BodyLayout>
        <Navbar />
        <FadeInTransition>
          <div className="p-4">
            <div className=" py-8 px-16 w-full content-center items-start text-center md:text-left">
              <h1 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold leading-tight text-center">
                User Profile
              </h1>
            </div>
          </div>
        </FadeInTransition>

        <div className="flex flex-col md:flex-row md:items-center bg-white bg-opacity-25 p-8 rounded-xl mb-16 w-3/4 mx-auto">
          {/* Left side (Profile Picture) */}
          <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full shadow-md mb-4 md:mr-8 md:mb-0 mx-auto lg:mx-20 xl:mx-20">
            {/* You can place the profile picture here */}
            {profilePicture ? (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile"
                className="rounded-full w-full h-full"
              />
            ) : (
              // Fallback to the existing profile picture if no update
              <img
                src="images/profile.png"
                alt="Profile"
                className="rounded-full w-full h-full"
              />
            )}
          </div>

          {/* Right side (Details) */}
          <div className="flex flex-col md:flex-row md:items-start mx-auto text-gray-600">
            <div className="flex flex-col md:mr-16">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Full Name</h2>
                <p>{profileData.fullName}</p>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
                <p>{profileData.phoneNumber}</p>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">NIC Number</h2>
                <p>{profileData.nicNumber}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Grama Division</h2>
                <p>{profileData.gramaDivision}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Address</h2>
                <p>{profileData.address}</p>
              </div>
              <button
                type="button"
                className="mt-8 text-gray-800 bg-white hover:bg-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleOpenModal}
              >
                Update Profile
              </button>
            </div>
          </div>

          {/* Modal component */}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <div className="absolute w-full h-full bg-gray-800 opacity-75"></div>
              <div className="bg-white opacity-90 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-xl z-50 text-gray-600">
                <div className="flex justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="mt-8">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={updatedData.fullName}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={updatedData.phoneNumber}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="nicNumber"
                    >
                      NIC Number
                    </label>
                    <input
                      type="text"
                      id="nicNumber"
                      name="nicNumber"
                      value={updatedData.nicNumber}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gramaDivision"
                    >
                      Grama Division
                    </label>
                    <input
                      type="text"
                      id="gramaDivision"
                      name="gramaDivision"
                      value={updatedData.gramaDivision}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={updatedData.address}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="profilePicture"
                    >
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      id="profilePicture"
                      name="profilePicture"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                      onClick={handleUpdateProfile}
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </BodyLayout>

      <Footer />
    </>
  );
};

export default Profile;
