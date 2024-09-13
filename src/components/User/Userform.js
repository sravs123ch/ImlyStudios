
// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { UserContext } from "../../Context/userContext";

// function Userform() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { userDetails } = useContext(UserContext);

//   const isEditMode = Boolean(
//     location.state?.userDetails?.user || userDetails?.user
//   );

//   const [formData, setFormData] = useState(
//     location.state?.userDetails || {
//       TenantID: 1,
//       FirstName: "",
//       LastName: "",
//       Email: "",
//       Password: "",
//       PhoneNumber: "",
//       Gender: "",
//       RoleID: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: 5,
//       ZipCode: "",
//       ProfileImage: null, 
//       Comments: "",
//     }
//   );

//   useEffect(() => {
//     if (isEditMode) {
//       const user = location.state?.userDetails?.user || userDetails?.user;
//       if (user) {
//         setFormData({
//           FirstName: user.FirstName || "",
//           LastName: user.LastName || "",
//           Email: user.Email || "",
//           PhoneNumber: user.PhoneNumber || "",
//           Gender: user.Gender || "",
//           RoleID: user.RoleID || "",
//           ProfileImage: null, 
//           Comments: user.Comments || "",
//           UserID: user.UserID || "",
//           Password: user.Password || "",
//           AddressLine1: user.Address?.AddressLine1 || "",
//           AddressLine2: user.Address?.AddressLine2 || "",
//           CityID: user.Address?.CityID || "",
//           StateID: user.Address?.StateID || "",
//           CountryID: user.Address?.CountryID || "",
//           ZipCode: user.Address?.ZipCode || "",
//         });
//       }
//     }
//   }, [isEditMode, location.state?.userDetails?.user, userDetails?.user]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({
//         ...formData,
//         ProfileImage: file, 
//       });
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formDataToSend = new FormData();
  
//       // Append all formData fields to the new FormData object
//       Object.keys(formData).forEach((key) => {
//         if (key === "ProfileImage" && formData[key]) {
//           formDataToSend.append(key, formData[key]);
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       });
  
//       // Log each key-value pair
//       for (let pair of formDataToSend.entries()) {
//         console.log(`${pair[0]}: ${pair[1]}`);
//       }
  
//       const response = await axios.post(
//         "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Submission successful:", response.data);
  
//       // Handle response to get the filename
//       const { filename } = response.data;
  
//       console.log(`File uploaded successfully: ${filename}`);
  
//       navigate("/user");
//     } catch (error) {
//       console.error("Submission failed:", error);
//     }
//   };
  

//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const userId = formData.UserID;
//       if (!userId) {
//         console.error("User ID is missing in formData");
//         return;
//       }

//       const formDataToSend = new FormData();

//       // Append all formData fields to the new FormData object
//       Object.keys(formData).forEach((key) => {
//         if (key === "ProfileImage" && formData[key]) {
//           formDataToSend.append(key, formData[key]);
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       });

//       const response = await axios.put(
//         `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`,
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Update successful:", response.data);

//       // Handle response to get the filename
//       const { filename } = response.data;

//       console.log(`File updated successfully: ${filename}`);

//       navigate("/user");
//     } catch (error) {
//       if (error.response) {
//         console.error(
//           "Update failed with response error:",
//           error.response.data
//         );
//       } else if (error.request) {
//         console.error(
//           "Update failed with no response received:",
//           error.request
//         );
//       } else {
//         console.error("Update failed with error:", error.message);
//       }
//     }
//   };

//   const handleCancel = () => {
//     navigate("/user");
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
//                         {/* First Name */}
//              <div className="flex items-center">
//                <div className="w-full">
//                  <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="FirstName"
//                   name="FirstName"
//                   value={formData.FirstName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             {/* Address Line 1 */}
//             <div className="flex items-center">
//               <div className="w-full">
//                 <label
//                   htmlFor="AddressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1
//                 </label>
//                 <input
//                   type="text"
//                   id="AddressLine1"
//                   name="AddressLine1"
//                   value={formData.AddressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="LastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="LastName"
//                 name="LastName"
//                 value={formData.LastName || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Address Line 2 */}
//             <div>
//               <label
//                 htmlFor="AddressLine2"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 id="AddressLine2"
//                 name="AddressLine2"
//                 value={formData.AddressLine2 || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="Email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="Email"
//                 name="Email"
//                 value={formData.Email || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="Password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="Password"
//                 name="Password"
//                 type="password"
//                 value={formData.Password || ""}
//                 onChange={handleFormChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* City */}
//             <div>
//               <label
//                 htmlFor="CityID"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 CityID
//               </label>
//               <input
//                 type="number"
//                 id="CityID"
//                 name="CityID"
//                 value={formData.CityID}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label
//                 htmlFor="PhoneNumber"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="PhoneNumber"
//                 name="PhoneNumber"
//                 value={formData.PhoneNumber || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Gender */}
//             <div>
//               <label
//                 htmlFor="Gender"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Gender
//               </label>
//               <select
//                 id="Gender"
//                 name="Gender"
//                 value={formData.Gender || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="M">M</option>
//                 <option value="F">F</option>
//               </select>
//             </div>

//             {/* State */}
//             <div>
//               <label
//                 htmlFor="StateID"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 StateID
//               </label>
//               <input
//                 type="number"
//                 id="StateID"
//                 name="StateID"
//                 value={formData.StateID || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Zip Code */}
//             <div>
//               <label
//                 htmlFor="ZipCode"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="ZipCode"
//                 name="ZipCode"
//                 value={formData.ZipCode || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Role ID */}
//             <div>
//               <label
//                 htmlFor="RoleID"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Role ID
//               </label>
//               <input
//                 type="text"
//                 id="RoleID"
//                 name="RoleID"
//                 value={formData.RoleID || ""}
//                 onChange={handleFormChange}
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Profile Image */}
//             <div>
//               <label
//                 htmlFor="ProfileImage"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 id="ProfileImage"
//                 name="ProfileImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//             {/* Comments */}
//             <div className="sm:col-span-1">
//               <label
//                 htmlFor="Comments"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Comments
//               </label>
//               <textarea
//                 id="Comments"
//                 name="Comments"
//                 value={formData.Comments || ""}
//                 onChange={handleFormChange}
//                 rows={3}
//                 className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               ></textarea>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="px-4 py-3 text-right sm:px-6">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               {isEditMode ? "Update User" : "Create User"}
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="ml-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Userform;



import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const genderOptions = [
  { id: 'M', name: 'Male' },
  { id: 'F', name: 'Female' },
];
const roleOptions = [
  { id: '1', name: 'Admin' },
  { id: '2', name: 'Store User' },
  { id: '3', name: ' Finance' },
  { id: '4', name: 'Production' },
  { id: '5', name: 'Techinical' },
];

function Userform() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userDetails } = useContext(UserContext);

  const isEditMode = Boolean(
    location.state?.userDetails?.user || userDetails?.user
  );

  const [formData, setFormData] = useState(
    location.state?.userDetails || {
      TenantID: 1,
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      PhoneNumber: "",
      Gender: "",
      RoleID: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID: 5,
      ZipCode: "",
      ProfileImage: null, 
      Comments: "",
    }
  );

  useEffect(() => {
    if (isEditMode) {
      const user = location.state?.userDetails?.user || userDetails?.user;
      if (user) {
        setFormData({
          FirstName: user.FirstName || "",
          LastName: user.LastName || "",
          Email: user.Email || "",
          PhoneNumber: user.PhoneNumber || "",
          Gender: user.Gender || "",
          RoleID: user.RoleID || "",
          ProfileImage: null, 
          Comments: user.Comments || "",
          UserID: user.UserID || "",
          Password: user.Password || "",
          AddressLine1: user.Address?.AddressLine1 || "",
          AddressLine2: user.Address?.AddressLine2 || "",
          CityID: user.Address?.CityID || "",
          StateID: user.Address?.StateID || "",
          CountryID: user.Address?.CountryID || "",
          ZipCode: user.Address?.ZipCode || "",
        });
      }
    }
  }, [isEditMode, location.state?.userDetails?.user, userDetails?.user]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        ProfileImage: file, 
      });
    }
  };

  const [selectedGender, setSelectedGender] = useState(formData.Gender || '');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setFormData({
      ...formData,
      Gender: gender.id,
    });
  };

  const [selectedRole, setSelectedRole] = useState(formData.RoleID || '');

const handleRoleChange = (role) => {
  setSelectedRole(role);
  setFormData((prevFormData) => ({
    ...prevFormData,
    RoleID: role.id,
  }));
};

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const formDataToSend = new FormData();
  
  //     // Append all formData fields to the new FormData object
  //     Object.keys(formData).forEach((key) => {
  //       if (key === "ProfileImage" && formData[key]) {
  //         formDataToSend.append(key, formData[key]);
  //       } else {
  //         formDataToSend.append(key, formData[key]);
  //       }
  //     });
  
  //     // Log each key-value pair
  //     for (let pair of formDataToSend.entries()) {
  //       console.log(`${pair[0]}: ${pair[1]}`);
  //     }
  
  //     const response = await axios.post(
  //       "https://imlystudios-backend-mqg4.onrender.com/api/users/createUser",
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log("Submission successful:", response.data);
  
  //     // Handle response to get the filename
  //     const { filename } = response.data;
  
  //     console.log(`File uploaded successfully: ${filename}`);
  
  //     navigate("/user");
  //   } catch (error) {
  //     console.error("Submission failed:", error);
  //   }
  // };
  

  // const handleUpdateSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userId = formData.UserID;
  //     if (!userId) {
  //       console.error("User ID is missing in formData");
  //       return;
  //     }

  //     const formDataToSend = new FormData();

  //     // Append all formData fields to the new FormData object
  //     Object.keys(formData).forEach((key) => {
  //       if (key === "ProfileImage" && formData[key]) {
  //         formDataToSend.append(key, formData[key]);
  //       } else {
  //         formDataToSend.append(key, formData[key]);
  //       }
  //     });

  //     const response = await axios.put(
  //       `https://imlystudios-backend-mqg4.onrender.com/api/users/updateUser/${userId}`,
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log("Update successful:", response.data);

  //     // Handle response to get the filename
  //     const { filename } = response.data;

  //     console.log(`File updated successfully: ${filename}`);

  //     navigate("/user");
  //   } catch (error) {
  //     if (error.response) {
  //       console.error(
  //         "Update failed with response error:",
  //         error.response.data
  //       );
  //     } else if (error.request) {
  //       console.error(
  //         "Update failed with no response received:",
  //         error.request
  //       );
  //     } else {
  //       console.error("Update failed with error:", error.message);
  //     }
  //   }
  // };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formDataToSend = new FormData();
  
      // Append all formData fields to the new FormData object
      Object.keys(formData).forEach((key) => {
        if (key === "ProfileImage" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      // Log each key-value pair
      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
  
      const apiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/users/createOrUpdateUser";
      const isEditMode = Boolean(formData.UserID); // Check if UserID exists to determine if it's an update
  
      const method = isEditMode ? "put" : "post"; // Choose method based on whether it's an edit or create
  
      const response = await axios({
        method,
        url: apiUrl,
        data: formDataToSend,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Submission successful:", response.data);
  
      // Handle response to get the filename (if applicable)
      const { filename } = response.data;
  
      console.log(`${isEditMode ? "Updated" : "Created"} successfully: ${filename}`);
  
      navigate("/user");
    } catch (error) {
      if (error.response) {
        console.error("Submission failed with response error:", error.response.data);
      } else if (error.request) {
        console.error("Submission failed with no response received:", error.request);
      } else {
        console.error("Submission failed with error:", error.message);
      }
    }
  };
  
  const handleCancel = () => {
    navigate("/user");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        {/* <form onSubmit={isEditMode ? handleUpdateSubmit : handleFormSubmit}> */}
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4 px-24">Users</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
                        {/* First Name */}
             <div className="flex items-center">
               <div className="w-full">
                 <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={formData.FirstName || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Address Line 1 */}
            <div className="flex items-center">
              <div className="w-full">
                <label
                  htmlFor="AddressLine1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="AddressLine1"
                  name="AddressLine1"
                  value={formData.AddressLine1 || ""}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                value={formData.LastName || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label
                htmlFor="AddressLine2"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="AddressLine2"
                name="AddressLine2"
                value={formData.AddressLine2 || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            

            {/* City */}
            <div>
              <label
                htmlFor="CityID"
                className="block text-sm font-medium text-gray-700"
              >
                CityID
              </label>
              <input
                type="number"
                id="CityID"
                name="CityID"
                value={formData.CityID}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="Password"
                name="Password"
                type="password"
                value={formData.Password || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="StateID"
                className="block text-sm font-medium text-gray-700"
              >
                StateID
              </label>
              <input
                type="number"
                id="StateID"
                name="StateID"
                value={formData.StateID || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

              {/* Phone Number */}
              <div>
              <label
                htmlFor="PhoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="PhoneNumber"
                name="PhoneNumber"
                value={formData.PhoneNumber || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            
            {/* Zip Code */}
            <div>
              <label
                htmlFor="ZipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="ZipCode"
                name="ZipCode"
                value={formData.ZipCode || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
           
              {/* Gender */}
              <div>
              <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <Combobox value={selectedGender} onChange={handleGenderChange} as="div">
                <div className="relative mt-1">
                  <Combobox.Input
                    className="block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    displayValue={(gender) => gender?.name || ""}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {genderOptions.map((gender) => (
                      <Combobox.Option
                        key={gender.id}
                        value={gender}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? "bg-indigo-600 text-white" : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {gender.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                  active ? "text-white" : "text-indigo-600"
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              </Combobox>
            </div>


            
            <div>
  <label
    htmlFor="RoleID"
    className="block text-sm font-medium text-gray-700"
  >
    Role
  </label>
  <Combobox value={selectedRole} onChange={handleRoleChange} as="div">
    <div className="relative mt-1">
      <Combobox.Input
        className="block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        displayValue={(role) => role?.name || ""}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>
      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {roleOptions.map((role) => (
          <Combobox.Option
            key={role.id}
            value={role}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-3 pr-9 ${
                active ? "bg-indigo-600 text-white" : "text-gray-900"
              }`
            }
          >
            {({ selected, active }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? "font-semibold" : "font-normal"
                  }`}
                >
                  {role.name}
                </span>
                {selected ? (
                  <span
                    className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                      active ? "text-white" : "text-indigo-600"
                    }`}
                  >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </div>
  </Combobox>
</div>

            {/* Comments */}
            <div className="sm:col-span-1">
              <label
                htmlFor="Comments"
                className="block text-sm font-medium text-gray-700"
              >
                Comments
              </label>
              <textarea
                id="Comments"
                name="Comments"
                value={formData.Comments || ""}
                onChange={handleFormChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            
            {/* Profile Image */}
            <div>
              <label
                htmlFor="ProfileImage"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="ProfileImage"
                name="ProfileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          

      
           <div className="mt-6 flex justify-end gap-4">
    <button
      type="submit"
      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
       {isEditMode ? "Update User" : "Create User"}
    </button>
    <button
                type="button"
                onClick={handleCancel}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
              >
                Cancel
              </button>
  </div>
        </form>
      </div>
    </div>
  );
}
export default Userform;
