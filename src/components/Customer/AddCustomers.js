
// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { CustomerContext } from "../../Context/customerContext";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Combobox } from '@headlessui/react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import CustomerSearch from '../Orders/CustomerSearch';
// import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// // Define Styled Components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375',
//     // backgroundColor: '#F0E68C',
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const steps = ['Customer Details', 'Address','Orders'];
// const genderOptions = [
//   { id: "M", name: "Male" },
//   { id: "F", name: "Female" },
// ];

// function AddCustomers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { customerDetails } = useContext(CustomerContext);
//   // const [selectedGender, setSelectedGender] = useState(null);
// const [selectedReferralType, setSelectedReferralType] = useState(null);
// const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState(null);
// const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState(null);
// const [query, setQuery] = useState('');
// const [orderDetails, setOrderDetails] = useState({ refereeName: '' });
// // const [error, setError] = useState('');
// const [entries, setEntries] = useState("");

// const handleReferralTypeChange = (type) => setSelectedReferralType(type);
// const handleReferenceSubOptionChange = (option) => setSelectedReferenceSubOption(option);
// const handleSocialMediaPlatformChange = (platform) => setSelectedSocialMediaPlatform(platform);
// const handleRefereeNameChange = (e) => setOrderDetails({ ...orderDetails, refereeName: e.target.value });


//   const isEditMode = Boolean(location.state?.customerDetails?.customer || customerDetails?.customer);

//   const [formData, setFormData] = useState(location.state?.customerDetails || {
//     TenantID: 1,
//     CustomerID: null,
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "",
//     ConfirmPassword:"",
//     PhoneNumber: "",
//     Gender: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     ZipCode: "",
//     Addresses: [], 
//   });

//   const [error, setError] = useState("");
//   const [selectedGender, setSelectedGender] = useState(formData.Gender || "");
//   const [activeStep, setActiveStep] = useState(0);
//   const [countries, setCountries] = useState([]); // For storing countries
//   const [states, setStates] = useState([]); // For storing states
//   const [cities, setCities] = useState([]); // For storing cities
//   const [selectedCountry, setSelectedCountry] = useState(null); 
//   const [selectedState, setSelectedState] = useState(null); // State to store selected state
// const [selectedCity, setSelectedCity] = useState(null);   // State to store selected city
    


//   useEffect(() => {
//     if (isEditMode) {
//       const customer = location.state?.customerDetails?.customer || customerDetails?.customer;
//       setFormData({
//         TenantID: customer.TenantID || 1,
//         CustomerID: customer.CustomerID || null,
//         FirstName: customer.FirstName || "",
//         LastName: customer.LastName || "",
//         Email: customer.Email || "",
//         Password: "", // Clear password if in edit mode
//         ConfirmPassword: "",
//         PhoneNumber: customer.PhoneNumber || "",
//         Gender: customer.Gender || "",
//         Addresses: customer.Addresses || [], // Initialize Addresses array
//         CityID: customer.CityID || "",
//         StateID: customer.StateID || "",
//         CountryID: customer.CountryID || "",
//         ZipCode: customer.ZipCode || "",
//       });
//     }
//   }, [isEditMode, location.state?.customerDetails?.customer, customerDetails?.customer]);
  

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleGenderChange = (gender) => {
//     setSelectedGender(gender);
//     setFormData({ ...formData, Gender: gender.id });
//   };

// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();
  
// //     // Log the form data being sent to the API
// //     console.log("FormData:", formData);
  
// //     const isUpdate = formData.CustomerID ? true : false;  // Check if we're updating or creating
// //     const apiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateCustomer";
  
// //     try {
// //       const response = await axios.post(apiUrl, formData);  // Use the same API for both create and update
      
// //       // Log the full response from the server
// //       console.log("Full Response:", response);
// //       console.log("Response data:", response.data);
  
// //       // Navigate to the customer page
// //       navigate("/Customer");
// //     } catch (error) {
// //       console.error("Submission failed:", error);
  
// //       if (error.response) {
// //         console.error("Response data:", error.response.data);
// //         console.error("Response status:", error.response.status);
// //         console.error("Response headers:", error.response.headers);
// //         setError(`Failed to ${isUpdate ? 'update' : 'create'} customer: ` + error.response.data.message);
// //       } else if (error.request) {
// //         console.error("No response received:", error.request);
// //         setError("No response received from server.");
// //       } else {
// //         console.error("Error in setting up request:", error.message);
// //         setError("Error: " + error.message);
// //       }
// //     }
// // };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   // Log the form data being sent to the API
//   console.log("FormData:", formData);

//   const isUpdate = formData.CustomerID ? true : false; // Check if we're updating or creating
//   const customerApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateCustomer";
//   const addressesApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateAddress";

//   try {
//     // First, create or update the customer
//     const customerResponse = await axios.post(customerApiUrl, formData);
//     console.log("Customer Response:", customerResponse);
    
//     const customerId = customerResponse.data.CustomerID; // Assuming the response includes a CustomerID

//     // Now, update the addresses using the separate API
//     const addressData = {
//       CustomerID: customerId,
//       Addresses: formData.Addresses // Assuming Addresses is part of formData
//     };

//     const addressResponse = await axios.post(addressesApiUrl, addressData);
//     console.log("Addresses Response:", addressResponse);

//     // Navigate to the customer page after both requests succeed
//     navigate("/Customer");
//   } catch (error) {
//     console.error("Submission failed:", error);

//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       console.error("Response status:", error.response.status);
//       console.error("Response headers:", error.response.headers);
//       setError(`Failed to ${isUpdate ? 'update' : 'create'} customer: ` + error.response.data.message);
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//       setError("No response received from server.");
//     } else {
//       console.error("Error in setting up request:", error.message);
//       setError("Error: " + error.message);
//     }
//   }
// };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const customerId = formData.CustomerID;
  
//         if (!customerId) return; // Ensure customerId exists
  
//         const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/customers/customers/getOrderByCustomerId/${customerId}`);
//         setOrders(response.data.orders || []); 
//         console.log("Fetched Orders:", response.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError("Failed to fetch orders.");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // Only call fetchOrders if customerId exists
//     if (formData.CustomerID) {
//       fetchOrders();
//     }
//   }, [formData.CustomerID]);  // Watch for changes in formData.CustomerID
  
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://imlystudios-backend-mqg4.onrender.com/api/cities/getCountries');
//         const countryData = response.data.data; // Extract 'data' from response
//         setCountries(countryData); // Set the countries state
//         console.log("Fetched countries:", countryData); // Log to check data
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };
  
//     fetchCountries(); // Call on component mount
//   }, []);
 
//   const fetchStatesByCountry = async (countryId) => {
//     if (!countryId) return;
    
//     try {
//       const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getStatesByCountry?$filter=CountryID eq ${countryId}`);
//       if (response.data.status === "SUCCESS") {
//         setStates(response.data.data || []); // Ensure data is set to `states`
//       }
//     } catch (error) {
//       console.error("Error fetching states:", error);
//     }
//   };
  
  
//   const fetchCitiesByState = async (stateId) => {
//     if (!stateId) return;
  
//     try {
//       const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getCitiesByState?$filter=StateID eq ${stateId}`);
      
//       // Assuming the response follows a similar structure to the one for states
//       if (response.data.status === "SUCCESS") {
//         setCities(response.data.data || []); // Ensure the response data is assigned correctly
//       }
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };
  
//   const handleCountryChange = (selectedCountry) => {
//     if (!selectedCountry) return;
    
//     setSelectedCountry(selectedCountry); // Store selected country object
//     setFormData({ ...formData, CountryID: selectedCountry.CountryID }); // Update formData with CountryID
//     fetchStatesByCountry(selectedCountry.CountryID); // Fetch states based on selected country
//   };
  
 
//   const handleStateChange = (state) => {
//     setSelectedState(state); // Set the selected state
//     setFormData({ ...formData, StateID: state.StateID }); // Update form data
//     fetchCitiesByState(state.StateID); // Fetch cities for the selected state
//   };
  
//   const handleCityChange = (city) => {
//     setSelectedCity(city); // Set the selected city
//     setFormData({ ...formData, CityID: city.CityID }); // Update form data
//   };
  
    
//   const handleError = (error) => {
//     console.error("Error:", error);
//     if (error.response) {
//       setError("Failed to create customer: " + error.response.data.message);
//     } else if (error.request) {
//       setError("No response received from server.");
//     } else {
//       setError("Error: " + error.message);
//     }
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       TenantID: 1,
//       CustomerID: null,
//       FirstName: "",
//       LastName: "",
//       Email: "",
//       Password: "",
//       ConfirmPassword:"",
//       PhoneNumber: "",
//       Gender: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: 1,
//       ZipCode: "",
//     });
//   };

//   const isStepOptional = (step) => step === 1;

//   const isStepSkipped = (step) => false;

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   // Your existing state definitions
//   const [showSearchCard, setShowSearchCard] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);


//   // Function to handle the customer search
//   const handleSearch = (query) => {
//     // Perform search logic here, e.g., API call
//     // setSearchResults(response.data); // Example of setting search results
//   };

//   // Function to handle customer selection from search results
//   const handleCustomerSelect = (customer) => {
//     setSelectedCustomer(customer);
//     setShowSearchCard(false);
//     // Optionally, populate the form with the selected customer's data
//   };

// //   const handleAddOrder = () => {
// //     if (!formData.AddressLine1 || !formData.AddressLine2 || !formData.CityID || !formData.StateID ||!formData.CountryID|| !formData.ZipCode) {
// //         setError("All fields are required");
// //         return;
// //     }

// //     setFormData(prevFormData => ({
// //         ...prevFormData,
// //         Addresses: [
// //             ...prevFormData.Addresses,
// //             {
// //                 AddressLine1: formData.AddressLine1,
// //                 AddressLine2: formData.AddressLine2,
// //                 CityID: formData.CityID,
// //                 StateID: formData.StateID,
// //                 CountryID: formData.CountryID,
// //                 ZipCode: formData.ZipCode,
// //             }
// //         ],
// //         AddressLine1: '',
// //         AddressLine2: '',
// //         CityID: '',
// //         StateID: '',
// //         CountryID:'',
// //         ZipCode: '',
// //     }));
// // };
// const handleAddOrder = () => {
//   // Create a new address object
//   const newAddress = {
//     AddressLine1: formData.AddressLine1,
//     AddressLine2: formData.AddressLine2,
//     CityID: selectedCity ? selectedCity.CityName : '',
//     StateID: selectedState ? selectedState.StateName : '',
//     CountryID: selectedCountry ? selectedCountry.CountryName : '',
//     ZipCode: formData.ZipCode,
//   };

//   // Add the new address to the formData.Addresses array
//   setFormData((prevData) => ({
//     ...prevData,
//     Addresses: [...prevData.Addresses, newAddress],
//     // Clear input fields after adding the address
//     AddressLine1: '',
//     AddressLine2: '',
//     ZipCode: '',
//   }));

//   // Clear selected dropdown values (if necessary)
//   setSelectedCity(null);
//   setSelectedState(null);
//   setSelectedCountry(null);
// };

// // Edit function (set the selected address for editing)
// const handleEdit = (index) => {
//   const addressToEdit = formData.Addresses[index];
//   setFormData({
//     ...formData,
//     AddressLine1: addressToEdit.AddressLine1,
//     AddressLine2: addressToEdit.AddressLine2,
//     ZipCode: addressToEdit.ZipCode,
//   });
//   setSelectedCity({ CityID: addressToEdit.CityID });
//   setSelectedState({ StateID: addressToEdit.StateID });
//   setSelectedCountry({ CountryID: addressToEdit.CountryID });
//   // You can also set a flag or index to identify which item is being edited
// };

// // Delete function (remove the selected address)
// const handleDelete = (index) => {
//   setFormData({
//     ...formData,
//     Addresses: formData.Addresses.filter((_, i) => i !== index),
//   });
// };


// const handleCancel = () => {
//   navigate("/Customer");
// };

//   return (
//     <>
//       <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
//         <ToastContainer />
//         {/* <div className="flex justify-end">
//           <button
//             onClick={handleExistingUserClick}
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//           >
//             Existing Customer
//           </button>
//         </div> */}
//         {showSearchCard && (
//           <div className="mt-4 p-4 border rounded shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Search User</h2>
//             <CustomerSearch onCustomerSelect={handleCustomerSelect} onClick={handleSearch} />
//           </div>
//         )}
//       </div>
      
//       <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography className="text-center text-xl mb-4">
//                 All steps completed - you're finished
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//                 <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                   Reset
//                 </Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <Box
//                 sx={{
//                   display: 'grid',
//                   gridTemplateColumns: { xs: '1fr', sm: '1fr' },
//                   gap: 2,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   pt: 2,
//                 }}
//               >
//                 {activeStep === 0 && (

// <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//   {/* First Name */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">First name</label>
//     <input
//       type="text"
//       name="FirstName"
//       value={formData.FirstName}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Last Name */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Last name</label>
//     <input
//       type="text"
//       name="LastName"
//       value={formData.LastName}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Phone Number */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Phone Number</label>
//     <input
//       type="text"
//       name="PhoneNumber"
//       value={formData.PhoneNumber}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Email */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
//     <input
//       type="email"
//       name="Email"
//       value={formData.Email}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Password */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Password</label>
//     <input
//       type="password"
//       name="Password"
//       value={formData.Password}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Confirm Password */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Confirm Password</label>
//     <input
//       type="password"
//       name="ConfirmPassword"
//       value={formData.ConfirmPassword}
//       onChange={handleFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Gender */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Gender</label>
//     <Combobox value={selectedGender} onChange={handleGenderChange}>
//       <div className="relative w-full">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           displayValue={(gender) => gender.name}
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>
//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {genderOptions.map((gender) => (
//             <Combobox.Option
//               key={gender.id}
//               className={({ active }) =>
//                 `relative cursor-default select-none py-2 pl-3 pr-9 ${
//                   active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                 }`
//               }
//               value={gender}
//             >
//               {({ selected, active }) => (
//                 <>
//                   <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
//                     {gender.name}
//                   </span>
//                   {selected && (
//                     <span
//                       className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
//                         active ? 'text-white' : 'text-indigo-600'
//                       }`}
//                     >
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   )}
//                 </>
//               )}
//             </Combobox.Option>
//           ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>

//   {/* Comments */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Comments</label>
//     <textarea
//       name="comments"
//       value={formData?.comments || ""}
//       onChange={handleFormChange}
//       className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//       rows="1"
//     />
//   </div>

//  <div className="flex flex-col gap-4">
//   {/* Referred By Field */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Referred By</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(type) => type || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={type}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {type}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>

//   {/* Conditional Rendering for Reference */}
//   {selectedReferralType === 'Reference' && (
   
//     <div className="flex flex-col gap-4">
//   {/* Reference Sub-option */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Reference Sub-option</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(option) => option || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Director', 'Employee', 'Existing'].map((option, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={option}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {option}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>
// </div>

//   )}

//   {/* Conditional Rendering for Social Media */}
//   {selectedReferralType === 'Social Media' && (

//     <div className="flex flex-col gap-4">
//   {/* Social Media Platform */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Social Media Platform</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedSocialMediaPlatform} onChange={handleSocialMediaPlatformChange}>
//         <div className="relative">
//           <Combobox.Input
//              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(platform) => platform || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={platform}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {platform}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>
// </div>

    
//   )}

//   {/* Error Message */}
//   {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
// </div>

// <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               onClick={handleFormSubmit}
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

// </div>


//                 )}
//                 {activeStep === 1 && (

// <div>
// {/* Address Form */}
// <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//   <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 1</label>
//   <input
//     type="text"
//     name="AddressLine1"
//     value={formData.AddressLine1}
//     onChange={handleFormChange}
//     className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//   />
// </div>

// <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 2</label>
//     <input
//       type="text"
//       name="AddressLine2"
//       value={formData.AddressLine2}
//       onChange={handleFormChange}
//       className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//  <div className="flex items-center gap-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700">Country</label>
//       <div className="w-full">
//         <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
//           <div className="relative">
//             <Combobox.Input
//               className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
//               displayValue={(country) => country?.CountryName || ''} // Display selected country name
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//               <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             </Combobox.Button>

//             <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {countries
//                 .filter((country) =>
//                   country.CountryName.toLowerCase().includes(query.toLowerCase())
//                 )
//                 .map((country) => (
//                   <Combobox.Option
//                     key={country.CountryID}
//                     value={country} // Pass the full country object to onChange
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//                   >
//                     <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                       {country.CountryName}
//                     </span>
//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//             </Combobox.Options>
//           </div>
//         </Combobox>
//       </div>
//     </div>



// <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">State</label>
//   <div className="w-full">
//     <Combobox as="div" value={selectedState} onChange={handleStateChange}>
//       <div className="relative">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(state) => state?.StateName || ''} // Show the selected state name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {states
//             .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((state) => (
//               <Combobox.Option
//                 key={state.StateID}
//                 value={state}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {state.StateName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>
// <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">City</label>
//   <div className="w-full">
//     <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
//       <div className="relative">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(city) => city?.CityName || ''} // Show the selected city name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {cities
//             .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((city) => (
//               <Combobox.Option
//                 key={city.CityID}
//                 value={city}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {city.CityName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>



//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Zip Code</label>
//     <input
//       type="text"
//       name="ZipCode"
//       value={formData.ZipCode}
//       onChange={handleFormChange}
//       className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

 
//    <div className="flex justify-end col-span-2">
//       <button
//         onClick={handleAddOrder}
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//       >
//         Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//       </button>
        
//     </div>      
// </div>

//  {/* <table className="min-w-full mt-4">
//   <thead>
//     <tr>
//       <th className="border px-4 py-2">Address Line 1</th>
//       <th className="border px-4 py-2">Address Line 2</th>
//       <th className="border px-4 py-2">City</th>
//       <th className="border px-4 py-2">State</th>
//       <th className="border px-4 py-2">Zip Code</th>
//       <th className="border px-4 py-2">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     {formData.Addresses.length > 0 &&
//       formData.Addresses.map((address, index) => {
//         // Check if address is an object and has expected properties
//         if (typeof address === 'object') {
//           return (
//             <tr key={index}>
//               <td className="border px-4 py-2">{address.AddressLine1 || ''}</td>
//               <td className="border px-4 py-2">{address.AddressLine2 || ''}</td>
//               <td className="border px-4 py-2">{address.CityID || ''}</td>
//               <td className="border px-4 py-2">{address.StateID || ''}</td>
//               <td className="border px-4 py-2">{address.ZipCode || ''}</td>
//               <td className="border px-4 py-2 text-center flex items-center justify-center space-x-4">
          
//             <button
//               onClick={() => handleEdit(index)}
//               className="text-blue-500 hover:text-blue-700"
//             >
//               <FaEdit />
//             </button>
//             <button
//               onClick={() => handleDelete(index)}
//               className="text-red-500 hover:text-red-700"
//             >
//               <FaTrashAlt />
//             </button>
//           </td>
//             </tr>
//           );
//         } else if (typeof address === 'string') {
//           // Handle case if address is still a string, split by commas
//           const addressParts = address.split(", ");
//           return (
//             <tr key={index}>
//               <td className="border px-4 py-2">{addressParts[0] || ''}</td>
//               <td className="border px-4 py-2">{addressParts[1] || ''}</td>
//               <td className="border px-4 py-2">{addressParts[2] || ''}</td>
//               <td className="border px-4 py-2">{addressParts[3] || ''}</td>
//               <td className="border px-4 py-2">{addressParts[4] || ''}</td>
//               <td className="border px-4 py-2">{addressParts[5] || ''}</td>
//             </tr>
//           );
//         }
//         return null;
//       })
//     }
//   </tbody>
// </table>  */}

//  <TableContainer component={Paper} className="mt-4">
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Address Line 1</StyledTableCell>
//             <StyledTableCell>Address Line 2</StyledTableCell>
//             <StyledTableCell>City</StyledTableCell>
//             <StyledTableCell>State</StyledTableCell>
//             <StyledTableCell>Zip Code</StyledTableCell>
//             <StyledTableCell>Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {formData.Addresses.length > 0 &&
//             formData.Addresses.map((address, index) => {
//               // Check if the address is an object
//               if (typeof address === 'object') {
//                 return (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
//                     <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
//                     <StyledTableCell>{address.CityID || ''}</StyledTableCell>
//                     <StyledTableCell>{address.StateID || ''}</StyledTableCell>
//                     <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
//                     <StyledTableCell>
//                       <Button
//                         onClick={() => handleEdit(index)}
//                         startIcon={<FaEdit />}
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         className="mr-2"
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         onClick={() => handleDelete(index)}
//                         startIcon={<FaTrashAlt />}
//                         variant="contained"
//                         color="secondary"
//                         size="small"
//                       >
//                         Delete
//                       </Button>
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 );
//               } else if (typeof address === 'string') {
//                 // Handle case if address is still a string
//                 const addressParts = address.split(", ");
//                 return (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>{addressParts[0] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[1] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[2] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[3] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[4] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[5] || ''}</StyledTableCell>
//                   </StyledTableRow>
//                 );
//               }
//               return null;
//             })}
//         </TableBody>
//       </Table>
//     </TableContainer> 

// <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               onClick={handleFormSubmit}
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

// </div>     
//                 )}
//                   {activeStep === 2 && (
// //    <table className="min-w-full mt-4">
// //    <thead>
// //      <tr>
// //        <th className="border px-4 py-2">Order ID</th>
// //        <th className="border px-4 py-2">Order Date</th>
// //        <th className="border px-4 py-2">Total Amount</th>
// //        <th className="border px-4 py-2">Status</th>
// //      </tr>
// //    </thead>
// //    <tbody>
// //      {orders.length > 0 ? (
// //        orders.map((order) => (
// //          <tr key={order.OrderID}>
// //            <td className="border px-4 py-2">{order.OrderID}</td>
// //            <td className="border px-4 py-2">{new Date(order.OrderDate).toLocaleDateString()}</td>
// //            <td className="border px-4 py-2">${order.TotalAmount}</td>
// //            <td className="border px-4 py-2">{order.OrderStatus}</td>
// //          </tr>
// //        ))
// //      ) : (
// //        <tr>
// //          <td colSpan="4" className="border px-4 py-2 text-center">No orders found</td>
// //        </tr>
// //      )}
// //    </tbody>
// //  </table>
// <TableContainer component={Paper} className="mt-4">
// <Table>
//   <TableHead>
//     <TableRow>
//       <StyledTableCell>Order ID</StyledTableCell>
//       <StyledTableCell>Order Date</StyledTableCell>
//       <StyledTableCell>Total Amount</StyledTableCell>
//       <StyledTableCell>Status</StyledTableCell>
//     </TableRow>
//   </TableHead>

//   <TableBody>
//     {orders.map((order) => (
//       <StyledTableRow key={order.OrderID}>
//         <StyledTableCell>{order.OrderID}</StyledTableCell>
//         <StyledTableCell>{new Date(order.OrderDate).toLocaleDateString()}</StyledTableCell>
//         <StyledTableCell>${order.TotalAmount}</StyledTableCell>
//         <StyledTableCell>{order.OrderStatus}</StyledTableCell>
//       </StyledTableRow>
//     ))}
//   </TableBody>
// </Table>
// </TableContainer>
 
//   )}
                
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between">
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   // onClick={activeStep === steps.length - 1 ? (isEditMode ? handleUpdateSubmit : handleFormSubmit) : handleNext}
//                   onClick={activeStep === steps.length - 1 ? (handleFormSubmit) : handleNext}
//                   className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//                 >
//                   {activeStep === steps.length - 1 ? (isEditMode ? 'Update' : 'Submit') : 'Next'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//       </div>
      
//     </>
//   );
// }

// export default AddCustomers;




// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { CustomerContext } from "../../Context/customerContext";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Combobox } from '@headlessui/react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import CustomerSearch from '../Orders/CustomerSearch';
// import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// // Define Styled Components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#003375',
//     // backgroundColor: '#F0E68C',
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const steps = ['Customer Details', 'Address','Orders'];
// const genderOptions = [
//   { id: "M", name: "Male" },
//   { id: "F", name: "Female" },
// ];

// function AddCustomers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { customerDetails } = useContext(CustomerContext);
//   // const [selectedGender, setSelectedGender] = useState(null);
// const [selectedReferralType, setSelectedReferralType] = useState(null);
// const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState(null);
// const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState(null);
// const [query, setQuery] = useState('');
// const [orderDetails, setOrderDetails] = useState({ refereeName: '' });

// const handleReferralTypeChange = (type) => setSelectedReferralType(type);
// const handleReferenceSubOptionChange = (option) => setSelectedReferenceSubOption(option);
// const handleSocialMediaPlatformChange = (platform) => setSelectedSocialMediaPlatform(platform);
// const handleRefereeNameChange = (e) => setOrderDetails({ ...orderDetails, refereeName: e.target.value });


//   const isEditMode = Boolean(location.state?.customerDetails?.customer || customerDetails?.customer);
// // Customer form data state
// const [customerFormData, setCustomerFormData] = useState({
//   TenantID: 1,
//   CustomerID: 0, 
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   Password: "",
//   ConfirmPassword: "",
//   PhoneNumber: "",
//   Gender: "",
//   Comments: "", 
// });

// const [addressFormData, setAddressFormData] = useState({
//   AddressID: 0,
//   CustomerID: '',
//   TenantID: 1,
//   AddressLine1: '',
//   AddressLine2: '',
//   CityID: '',
//   StateID: '',
//   CountryID: '',
//   ZipCode: '',
// Addresses: [], 
// });


//   const [error, setError] = useState("");
//   const [selectedGender, setSelectedGender] = useState(customerFormData.Gender || "");
//   const [activeStep, setActiveStep] = useState(0);
//   const [countries, setCountries] = useState([]); 
//   const [states, setStates] = useState([]); 
//   const [cities, setCities] = useState([]); 
//   const [selectedCountry, setSelectedCountry] = useState(null); 
//   const [selectedState, setSelectedState] = useState(null); 
// const [selectedCity, setSelectedCity] = useState(null);  
// const [countryMap, setCountryMap] = useState({});
// const [stateMap, setStateMap] = useState({});
// const [cityMap, setCityMap] = useState({});
// const [addresses, setAddresses] = useState([]);
//   useEffect(() => {
//     if (isEditMode) {
//       const customer = location.state?.customerDetails?.customer || customerDetails?.customer;
//       setCustomerFormData({
//         TenantID: customer.TenantID || 1,
//         CustomerID: customer.CustomerID || 0,
//         FirstName: customer.FirstName || "",
//         LastName: customer.LastName || "",
//         Email: customer.Email || "",
//         Password: "", 
//         ConfirmPassword: "",
//         PhoneNumber: customer.PhoneNumber || "",
//         Gender: customer.Gender || "",
//         Comments: customer.Comments || "",
//       });
//       setAddressFormData({
//         AddressLine1: customer.AddressLine1 || "",
//         AddressLine2: customer.AddressLine2 || "",
//         CityID: customer.CityID || "",
//         StateID: customer.StateID || "",
//         CountryID: customer.CountryID || "",
//         ZipCode: customer.ZipCode || "",
// Addresses: customer.Addresses || [],
//       });
//     }
//   }, [isEditMode, location.state?.customerDetails?.customer, customerDetails?.customer]);
  

//   const handleGenderChange = (gender) => {
//     setSelectedGender(gender);
//     setCustomerFormData({ ...customerFormData, Gender: gender.id });
//   };

// const handleCustomerFormChange = (e) => {
//   const { name, value } = e.target;
//   setCustomerFormData({
//     ...customerFormData,
//     [name]: value,
//   });
// };

// const handleAddressFormChange = (e) => {
//   const { name, value } = e.target;
//   setAddressFormData({
//     ...addressFormData,
//     [name]: value,
//   });
// };
// // Example state definition
// const [customerId, setCustomerId] = useState(null);

// // Example of setting customerId
// useEffect(() => {
//   // Assuming you fetch or set customerId from some source
//   setCustomerId("67");
// }, []);


// const handleCustomerFormSubmit = async () => {
//   const customerApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateCustomer";

//   try {
//     // Log the customer form data being sent to the API
//     console.log("Customer Form Data:", customerFormData);

//     // Create or update the customer
//     const customerResponse = await axios.post(customerApiUrl, customerFormData);
//     console.log("Customer Response:", customerResponse);

//     return customerResponse.data.CustomerID; // Return the CustomerID for use in address submission
//   } catch (error) {
//     console.error("Customer submission failed:", error);

//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       setError(`Failed to ${customerFormData.CustomerID ? 'update' : 'create'} customer: ` + error.response.data.message);
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//       setError("No response received from server.");
//     } else {
//       console.error("Error in setting up request:", error.message);
//       setError("Error: " + error.message);
//     }
//   }
// };


// const handleAddressFormSubmit = async (customerId) => {
//   const addressesApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateAddress";

//   try {
//     // Debugging state data
//     console.log("Current Address Data:", addressFormData.Addresses);

//     // Check if Addresses array exists and has at least one element
//     if (!addressFormData.Addresses || addressFormData.Addresses.length === 0) {
//       throw new Error("No addresses available to submit.");
//     }

//     const address = addressFormData.Addresses[0]; // Adjust if needed

//     const addressData = {
//       Addresses: address.Addresses,
//       AddressID: address.AddressID || 0,
//       CustomerID: customerId,
//       TenantID: 1,
//       AddressLine1: address.AddressLine1 || '',
//       AddressLine2: address.AddressLine2 || '',
//       CityID: address.CityID || '',
//       StateID: address.StateID || '',
//       CountryID: address.CountryID || '',
//       ZipCode: address.ZipCode || '',
//     };

//     console.log("Final Address Data:", addressData);

//     const addressResponse = await axios.post(addressesApiUrl, addressData);
//     console.log("Address Response:", addressResponse.data);

//   } catch (error) {
//     console.error("Address submission failed:", error);

//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       setError("Failed to submit address: " + (error.response.data.message || "Unknown error"));
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//       setError("No response received from server.");
//     } else {
//       console.error("Error in setting up request:", error.message);
//       setError("Error: " + error.message);
//     }
//   }
// };



//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const customerId = customerFormData.CustomerID;
  
//         if (!customerId) return; // Ensure customerId exists
  
//         const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/customers/customers/getOrderByCustomerId/${customerId}`);
//         setOrders(response.data.orders || []); 
//         console.log("Fetched Orders:", response.data.orders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError("Failed to fetch orders.");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // Only call fetchOrders if customerId exists
//     if (customerFormData.CustomerID) {
//       fetchOrders();
//     }
//   }, [customerFormData.CustomerID]);  // Watch for changes in formData.CustomerID
  
  
// useEffect(() => {
//   const fetchCountries = async () => {
//     try {
//       const response = await axios.get('https://imlystudios-backend-mqg4.onrender.com/api/cities/getCountries');
//       const countryData = response.data.data;
//       setCountries(countryData);
      
//       // Create countryMap
//       const countryMapData = countryData.reduce((map, country) => {
//         map[country.CountryName] = country.CountryID;
//         return map;
//       }, {});
//       setCountryMap(countryMapData);

//       console.log("Fetched countries:", countryData);
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//     }
//   };

//   fetchCountries();
// }, []);

// const fetchStatesByCountry = async (countryId) => {
//   if (!countryId) return;

//   try {
//     const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getStatesByCountry?$filter=CountryID eq ${countryId}`);
//     if (response.data.status === "SUCCESS") {
//       const stateData = response.data.data;
//       setStates(stateData);

//       // Create stateMap
//       const stateMapData = stateData.reduce((map, state) => {
//         map[state.StateName] = state.StateID;
//         return map;
//       }, {});
//       setStateMap(stateMapData);

//       console.log("Fetched states:", stateData);
//     }
//   } catch (error) {
//     console.error("Error fetching states:", error);
//   }
// };

// const fetchCitiesByState = async (stateId) => {
//   if (!stateId) return;

//   try {
//     const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getCitiesByState?$filter=StateID eq ${stateId}`);
//     if (response.data.status === "SUCCESS") {
//       const cityData = response.data.data;
//       setCities(cityData);

//       // Create cityMap
//       const cityMapData = cityData.reduce((map, city) => {
//         map[city.CityName] = city.CityID;
//         return map;
//       }, {});
//       setCityMap(cityMapData);

//       console.log("Fetched cities:", cityData);
//     }
//   } catch (error) {
//     console.error("Error fetching cities:", error);
//   }
// };

// const handleCountryChange = (selectedCountry) => {
//   if (!selectedCountry) return;

//   const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

//   setSelectedCountry(selectedCountry);
//   setAddressFormData({
//     ...addressFormData,
//     CountryID: countryID,
//     CountryName: selectedCountry.CountryName
//   });
//   fetchStatesByCountry(countryID);
// };

// const handleStateChange = (state) => {
//   if (!state) return;

//   const stateID = stateMap[state.StateName] || state.StateID;

//   setSelectedState(state);
//   setAddressFormData({
//     ...addressFormData,
//     StateID: stateID,
//     StateName: state.StateName
//   });
//   fetchCitiesByState(stateID);
// };

// const handleCityChange = (city) => {
//   if (!city) return;

//   const cityID = cityMap[city.CityName] || city.CityID;

//   setSelectedCity(city);
//   setAddressFormData({
//     ...addressFormData,
//     CityID: cityID,
//     CityName: city.CityName
//   });
// };

//   const handleError = (error) => {
//     console.error("Error:", error);
//     if (error.response) {
//       setError("Failed to create customer: " + error.response.data.message);
//     } else if (error.request) {
//       setError("No response received from server.");
//     } else {
//       setError("Error: " + error.message);
//     }
//   };

//   const handleReset = () => {
//     setActiveStep(0);
  
//     // Reset customer form data
//     setCustomerFormData({
//       TenantID: 1,
//       CustomerID: null,
//       FirstName: "",
//       LastName: "",
//       Email: "",
//       Password: "",
//       ConfirmPassword: "",
//       PhoneNumber: "",
//       Gender: "",
//       Comments: "" // Make sure to include this as well
//     });
  
//     // Reset address form data
//     setAddressFormData({
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: "",
//       ZipCode: ""
//     });
//   };
  

//   const isStepOptional = (step) => step === 1;

//   const isStepSkipped = (step) => false;

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };
  

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };


//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleAddAddress = () => {
//     const newAddress = {
//       AddressLine1: addressFormData.AddressLine1,
//       AddressLine2: addressFormData.AddressLine2,
//       CityID: selectedCity ? selectedCity.CityID : '',
//       StateID: selectedState ? selectedState.StateID : '',
//       CountryID: selectedCountry ? selectedCountry.CountryID : '',
//       ZipCode: addressFormData.ZipCode,
//     };
  
//     console.log("New Address Data:", newAddress);
  
//     setAddressFormData((prevData) => {
//       if (!Array.isArray(prevData.Addresses)) {
//         console.error("Addresses is not an array");
//         return { ...prevData, Addresses: [newAddress] };
//       }
  
//       return {
//         ...prevData,
//         Addresses: [...prevData.Addresses, newAddress],
//         AddressLine1: '',
//         AddressLine2: '',
//         ZipCode: '',
//       };
//     });
  
//     setSelectedCity(null);
//     setSelectedState(null);
//     setSelectedCountry(null);
//   };
  
  
  
// // Edit function (set the selected address for editing)
// const handleEdit = (index) => {
//   const addressToEdit =addressFormData.Addresses[index];
//   setAddressFormData({
//     ...addressFormData,
//     AddressLine1: addressToEdit.AddressLine1,
//     AddressLine2: addressToEdit.AddressLine2,
//     ZipCode: addressToEdit.ZipCode,
//   });
//   setSelectedCity({ CityID: addressToEdit.CityID });
//   setSelectedState({ StateID: addressToEdit.StateID });
//   setSelectedCountry({ CountryID: addressToEdit.CountryID });
//   // You can also set a flag or index to identify which item is being edited
// };


// const handleDelete = (index) => {
//   // Update the addressFormData by filtering out the selected address
//   setAddressFormData({
//     ...addressFormData,
//     Addresses: addressFormData.Addresses.filter((_, i) => i !== index),
//   });

//   // Optionally, if customerFormData also has an Addresses field or needs updating
//   setCustomerFormData({
//     ...customerFormData,
//     Addresses: customerFormData.Addresses.filter((_, i) => i !== index),
//   });
// };


// const handleCancel = () => {
//   navigate("/Customer");
// };

//   return (
//     <>
      
//       <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
//             {steps.map((label, index) => (
//               <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography className="text-center text-xl mb-4">
//                 All steps completed - you're finished
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//                 <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                   Reset
//                 </Button>
//               </Box>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               <Box
//                 sx={{
//                   display: 'grid',
//                   gridTemplateColumns: { xs: '1fr', sm: '1fr' },
//                   gap: 2,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   pt: 2,
//                 }}
//               >
//                 {activeStep === 0 && (

// <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//   {/* First Name */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">First name</label>
//     <input
//       type="text"
//       name="FirstName"
//       value={customerFormData.FirstName}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Last Name */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Last name</label>
//     <input
//       type="text"
//       name="LastName"
//       value={customerFormData.LastName}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Phone Number */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Phone Number</label>
//     <input
//       type="text"
//       name="PhoneNumber"
//       value={customerFormData.PhoneNumber}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Email */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
//     <input
//       type="email"
//       name="Email"
//       value={customerFormData.Email}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Password */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Password</label>
//     <input
//       type="password"
//       name="Password"
//       value={customerFormData.Password}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Confirm Password */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Confirm Password</label>
//     <input
//       type="password"
//       name="ConfirmPassword"
//       value={customerFormData.ConfirmPassword}
//       onChange={handleCustomerFormChange}
//       className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//   {/* Gender */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Gender</label>
//     <Combobox value={selectedGender} onChange={handleGenderChange}>
//       <div className="relative w-full">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           displayValue={(gender) => gender.name}
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>
//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {genderOptions.map((gender) => (
//             <Combobox.Option
//               key={gender.id}
//               className={({ active }) =>
//                 `relative cursor-default select-none py-2 pl-3 pr-9 ${
//                   active ? 'bg-indigo-600 text-white' : 'text-gray-900'
//                 }`
//               }
//               value={gender}
//             >
//               {({ selected, active }) => (
//                 <>
//                   <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
//                     {gender.name}
//                   </span>
//                   {selected && (
//                     <span
//                       className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
//                         active ? 'text-white' : 'text-indigo-600'
//                       }`}
//                     >
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   )}
//                 </>
//               )}
//             </Combobox.Option>
//           ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>

//   {/* Comments */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Comments</label>
//     <textarea
//       name="comments"
//       value={customerFormData?.comments || ""}
//       onChange={handleCustomerFormChange}
//       className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//       rows="1"
//     />
//   </div>

//  <div className="flex flex-col gap-4">
//   {/* Referred By Field */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Referred By</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(type) => type || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={type}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {type}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>

//   {/* Conditional Rendering for Reference */}
//   {selectedReferralType === 'Reference' && (
   
//     <div className="flex flex-col gap-4">
//   {/* Reference Sub-option */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Reference Sub-option</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(option) => option || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Director', 'Employee', 'Existing'].map((option, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={option}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {option}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>
// </div>

//   )}

//   {/* Conditional Rendering for Social Media */}
//   {selectedReferralType === 'Social Media' && (

//     <div className="flex flex-col gap-4">
//   {/* Social Media Platform */}
//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Social Media Platform</label>
//     <div className="w-full">
//       <Combobox as="div" value={selectedSocialMediaPlatform} onChange={handleSocialMediaPlatformChange}>
//         <div className="relative">
//           <Combobox.Input
//              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(platform) => platform || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={platform}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {platform}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   </div>
// </div>

    
//   )}

//   {/* Error Message */}
//   {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
// </div>

// <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               onClick={handleCustomerFormSubmit}
//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

// </div>


//                 )}
//                 {activeStep === 1 && (

// <div>
// {/* Address Form */}
// <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//   <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 1</label>
//   <input
//     type="text"
//     name="AddressLine1"
//     value={addressFormData.AddressLine1}
//     onChange={handleAddressFormChange}
//     className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//   />
// </div>

// <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 2</label>
//     <input
//       type="text"
//       name="AddressLine2"
//       value={addressFormData.AddressLine2}
//       onChange={handleAddressFormChange}
//       className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

//  <div className="flex items-center gap-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700">Country</label>
//       <div className="w-full">
//         <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
//           <div className="relative">
//             <Combobox.Input
//               className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
//               displayValue={(country) => country?.CountryName || ''} // Display selected country name
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//               <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             </Combobox.Button>

//             <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {countries
//                 .filter((country) =>
//                   country.CountryName.toLowerCase().includes(query.toLowerCase())
//                 )
//                 .map((country) => (
//                   <Combobox.Option
//                     key={country.CountryID}
//                     value={country} // Pass the full country object to onChange
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//                   >
//                     <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                       {country.CountryName}
//                     </span>
//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//             </Combobox.Options>
//           </div>
//         </Combobox>
//       </div>
//     </div>



// <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">State</label>
//   <div className="w-full">
//     <Combobox as="div" value={selectedState} onChange={handleStateChange}>
//       <div className="relative">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(state) => state?.StateName || ''} // Show the selected state name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {states
//             .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((state) => (
//               <Combobox.Option
//                 key={state.StateID}
//                 value={state}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {state.StateName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>
// <div className="flex items-center gap-4">
//   <label className="w-1/3 text-xs font-medium text-gray-700">City</label>
//   <div className="w-full">
//     <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
//       <div className="relative">
//         <Combobox.Input
//           className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(city) => city?.CityName || ''} // Show the selected city name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {cities
//             .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((city) => (
//               <Combobox.Option
//                 key={city.CityID}
//                 value={city}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {city.CityName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>



//   <div className="flex items-center gap-4">
//     <label className="w-1/3 text-xs font-medium text-gray-700">Zip Code</label>
//     <input
//       type="text"
//       name="ZipCode"
//       value={addressFormData.ZipCode}
//       onChange={handleAddressFormChange}
//       className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
//     />
//   </div>

 
//    <div className="flex justify-end col-span-2">
//       <button
//         onClick={handleAddAddress}
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//       >
//         Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//       </button>
        
//     </div>      
// </div>

//   {/* <TableContainer component={Paper} className="mt-4">
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Address Line 1</StyledTableCell>
//             <StyledTableCell>Address Line 2</StyledTableCell>
//             <StyledTableCell>City</StyledTableCell>
//             <StyledTableCell>State</StyledTableCell>
//             <StyledTableCell>Zip Code</StyledTableCell>
//             <StyledTableCell>Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {addressFormData.Addresses &&
//             addressFormData.Addresses.map((address, index) => {
//               // Check if the address is an object
//               if (typeof address === 'object') {
//                 return (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
//                     <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
//                     <StyledTableCell>{address.CityID || ''}</StyledTableCell>
//                     <StyledTableCell>{address.StateID || ''}</StyledTableCell>
//                     <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
//                     <StyledTableCell>
//                       <Button
//                         onClick={() => handleEdit(index)}
//                         startIcon={<FaEdit />}
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         className="mr-2"
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         onClick={() => handleDelete(index)}
//                         startIcon={<FaTrashAlt />}
//                         variant="contained"
//                         color="secondary"
//                         size="small"
//                       >
//                         Delete
//                       </Button>
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 );
//               } else if (typeof address === 'string') {
//                 // Handle case if address is still a string
//                 const addressParts = address.split(", ");
//                 return (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>{addressParts[0] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[1] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[2] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[3] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[4] || ''}</StyledTableCell>
//                     <StyledTableCell>{addressParts[5] || ''}</StyledTableCell>
//                   </StyledTableRow>
//                 );
//               }
//               return null;
//             })}
//         </TableBody>
//       </Table>
//     </TableContainer>   */}
//  {/* <TableContainer component={Paper} className="mt-4">
//   <Table>
//     <TableHead>
//       <TableRow>
//         <StyledTableCell>Address Line 1</StyledTableCell>
//         <StyledTableCell>Address Line 2</StyledTableCell>
//         <StyledTableCell>City</StyledTableCell>
//         <StyledTableCell>State</StyledTableCell>
//         <StyledTableCell>Zip Code</StyledTableCell>
//         <StyledTableCell>Actions</StyledTableCell>
//       </TableRow>
//     </TableHead>
    
//     <TableBody>
//       {addressFormData.Addresses && addressFormData.Addresses.map((address, index) => {
//         if (typeof address === 'object') {
//           return (
//             <StyledTableRow key={index}>
//               <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
//               <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
//               <StyledTableCell>{address.CityName || address.CityID || ''}</StyledTableCell> 
//               <StyledTableCell>{address.StateName || address.StateID || ''}</StyledTableCell> 
//               <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
//               <StyledTableCell>
//                 <Button
//                   onClick={() => handleEdit(index)}
//                   startIcon={<FaEdit />}
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                   className="mr-2"
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   onClick={() => handleDelete(index)}
//                   startIcon={<FaTrashAlt />}
//                   variant="contained"
//                   color="secondary"
//                   size="small"
//                 >
//                   Delete
//                 </Button>
//               </StyledTableCell>
//             </StyledTableRow>
//           );
//         } else if (typeof address === 'string') {
//           const addressParts = address.split(", ");
//           return (
//             <StyledTableRow key={index}>
//               <StyledTableCell>{addressParts[0] || ''}</StyledTableCell>
//               <StyledTableCell>{addressParts[1] || ''}</StyledTableCell>
//               <StyledTableCell>{addressParts[2] || ''}</StyledTableCell>
//               <StyledTableCell>{addressParts[3] || ''}</StyledTableCell>
//               <StyledTableCell>{addressParts[4] || ''}</StyledTableCell>
//               <StyledTableCell>{addressParts[5] || ''}</StyledTableCell>
//             </StyledTableRow>
//           );
//         }
//         return null;
//       })}
//     </TableBody>
//   </Table>
// </TableContainer>  */}
//   <TableContainer component={Paper} className="mt-4">
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Address Line 1</TableCell>
//             <TableCell>Address Line 2</TableCell>
//             <TableCell>City</TableCell>
//             <TableCell>State</TableCell>
//             <TableCell>Zip Code</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
        
//         <TableBody>
//           {addressFormData.Addresses && addressFormData.Addresses.map((address, index) => {
//             if (typeof address === 'object') {
//               const cityName = Object.keys(cityMap).find(key => cityMap[key] === address.CityID) || 'N/A';
//               const stateName = Object.keys(stateMap).find(key => stateMap[key] === address.StateID) || 'N/A';

//               return (
//                 <TableRow key={index}>
//                   <TableCell>{address.AddressLine1 || ''}</TableCell>
//                   <TableCell>{address.AddressLine2 || ''}</TableCell>
//                   <TableCell>{cityName}</TableCell> {/* Display City Name */}
//                   <TableCell>{stateName}</TableCell> {/* Display State Name */}
//                   <TableCell>{address.ZipCode || ''}</TableCell>
//                   <TableCell>
//                     <Button
//                       onClick={() => handleEdit(index)}
//                       startIcon={<FaEdit />}
//                       variant="contained"
//                       color="primary"
//                       size="small"
//                       className="mr-2"
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       onClick={() => handleDelete(index)}
//                       startIcon={<FaTrashAlt />}
//                       variant="contained"
//                       color="secondary"
//                       size="small"
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               );
//             } else if (typeof address === 'string') {
//               const addressParts = address.split(", ");
//               return (
//                 <TableRow key={index}>
//                   <TableCell>{addressParts[0] || ''}</TableCell>
//                   <TableCell>{addressParts[1] || ''}</TableCell>
//                   <TableCell>{addressParts[2] || ''}</TableCell>
//                   <TableCell>{addressParts[3] || ''}</TableCell>
//                   <TableCell>{addressParts[4] || ''}</TableCell>
//                   <TableCell>{addressParts[5] || ''}</TableCell>
//                 </TableRow>
//               );
//             }
//             return null;
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>

// {/* <TableContainer component={Paper} className="mt-4">
//   <Table>
//     <TableHead>
//       <TableRow>
//         <StyledTableCell>Address Line 1</StyledTableCell>
//         <StyledTableCell>Address Line 2</StyledTableCell>
//         <StyledTableCell>City</StyledTableCell>
//         <StyledTableCell>State</StyledTableCell>
//         <StyledTableCell>Zip Code</StyledTableCell>
//         <StyledTableCell>Actions</StyledTableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {addresses.map((address, index) => (
//         <StyledTableRow key={address.AddressID || index}>
//           <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
//           <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
//           <StyledTableCell>{address.CityID || ''}</StyledTableCell>
//           <StyledTableCell>{address.StateID || ''}</StyledTableCell>
//           <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
//           <StyledTableCell>
//             <Button
//               onClick={() => handleEdit(index)} // Update as needed
//               startIcon={<FaEdit />}
//               variant="contained"
//               color="primary"
//               size="small"
//               className="mr-2"
//             >
//               Edit
//             </Button>
//             <Button
//               onClick={() => handleDelete(index)} // Update as needed
//               startIcon={<FaTrashAlt />}
//               variant="contained"
//               color="secondary"
//               size="small"
//             >
//               Delete
//             </Button>
//           </StyledTableCell>
//         </StyledTableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer> */}



// <div className="mt-6 flex justify-end gap-4">
//             <button
//               type="submit"
//               // onClick={handleAddressFormSubmit}
//               // When calling the function, ensure customerId is not an event
//            onClick={() => handleAddressFormSubmit(customerId)}

//               className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
//             >
//               Cancel
//             </button>
//           </div>

// </div>     
//                 )}
//                   {activeStep === 2 && (

// <TableContainer component={Paper} className="mt-4">
// <Table>
//   <TableHead>
//     <TableRow>
//       <StyledTableCell>Order ID</StyledTableCell>
//       <StyledTableCell>Order Date</StyledTableCell>
//       <StyledTableCell>Total Amount</StyledTableCell>
//       <StyledTableCell>Status</StyledTableCell>
//     </TableRow>
//   </TableHead>

//   <TableBody>
//     {orders.map((order) => (
//       <StyledTableRow key={order.OrderID}>
//         <StyledTableCell>{order.OrderID}</StyledTableCell>
//         <StyledTableCell>{new Date(order.OrderDate).toLocaleDateString()}</StyledTableCell>
//         <StyledTableCell>${order.TotalAmount}</StyledTableCell>
//         <StyledTableCell>{order.OrderStatus}</StyledTableCell>
//       </StyledTableRow>
//     ))}
//   </TableBody>
// </Table>
// </TableContainer>
 
//   )}
                
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between">
//                 <Button
//                   color="inherit"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Back
//                 </Button>
//                 {/* <Button
//                   // onClick={activeStep === steps.length - 1 ? (isEditMode ? handleUpdateSubmit : handleFormSubmit) : handleNext}
//                   onClick={activeStep === steps.length - 1 ? (handleFormSubmit) : handleNext}
//                   className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//                 >
//                   {activeStep === steps.length - 1 ? (isEditMode ? 'Update' : 'Submit') : 'Next'}
//                 </Button> */}
//            <Button
//   onClick={()=>handleNext()}
//   className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
// >
//   Next
// </Button>



//               </Box>
//             </React.Fragment>
//           )}
//         </Box>
//       </div>
      
//     </>
//   );
// }

// export default AddCustomers;



import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CustomerContext } from "../../Context/customerContext";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Combobox } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CustomerSearch from '../Orders/CustomerSearch';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// Define Styled Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375',
    // backgroundColor: '#F0E68C',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const steps = ['Customer Details', 'Address','Orders'];
const genderOptions = [
  { id: "M", name: "Male" },
  { id: "F", name: "Female" },
];

function AddCustomers() {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerDetails } = useContext(CustomerContext);
  // const [selectedGender, setSelectedGender] = useState(null);
const [selectedReferralType, setSelectedReferralType] = useState(null);
const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState(null);
const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState(null);
const [query, setQuery] = useState('');
const [orderDetails, setOrderDetails] = useState({ refereeName: '' });

const handleReferralTypeChange = (type) => setSelectedReferralType(type);
const handleReferenceSubOptionChange = (option) => setSelectedReferenceSubOption(option);
const handleSocialMediaPlatformChange = (platform) => setSelectedSocialMediaPlatform(platform);
const handleRefereeNameChange = (e) => setOrderDetails({ ...orderDetails, refereeName: e.target.value });


  const isEditMode = Boolean(location.state?.customerDetails?.customer || customerDetails?.customer);
// Customer form data state
const [customerFormData, setCustomerFormData] = useState({
  TenantID: 1,
  CustomerID: 0, 
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  PhoneNumber: "",
  Gender: "",
  Comments: "", 
});

const [addressFormData, setAddressFormData] = useState({
  AddressID: 0,
  CustomerID: '',
  TenantID: 1,
  AddressLine1: '',
  AddressLine2: '',
  CityID: '',
  StateID: '',
  CountryID: '',
  ZipCode: '',
Addresses: [], 
});


  const [error, setError] = useState("");
  const [selectedGender, setSelectedGender] = useState(customerFormData.Gender || "");
  const [activeStep, setActiveStep] = useState(0);
  const [countries, setCountries] = useState([]); 
  const [states, setStates] = useState([]); 
  const [cities, setCities] = useState([]); 
  const [selectedCountry, setSelectedCountry] = useState(null); 
  const [selectedState, setSelectedState] = useState(null); 
const [selectedCity, setSelectedCity] = useState(null);  
const [countryMap, setCountryMap] = useState({});
const [stateMap, setStateMap] = useState({});
const [cityMap, setCityMap] = useState({});
const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (isEditMode) {
      const customer = location.state?.customerDetails?.customer || customerDetails?.customer;
  
      setCustomerFormData({
        TenantID: customer?.TenantID || 1,
        CustomerID: customer?.CustomerID || 0, // Make sure CustomerID is set here
        FirstName: customer?.FirstName || "",
        LastName: customer?.LastName || "",
        Email: customer?.Email || "",
        Password: "", 
        ConfirmPassword: "",
        PhoneNumber: customer?.PhoneNumber || "",
        Gender: customer?.Gender || "",
        Comments: customer?.Comments || "",
      });
  
      setAddressFormData({
        CustomerID: customer?.CustomerID || 0, // Ensure it's set in addressFormData
        AddressLine1: customer?.Addresses?.[0]?.AddressLine1 || "",
        AddressLine2: customer?.Addresses?.[0]?.AddressLine2 || "",
        CityID: customer?.Addresses?.[0]?.CityID || "",
        StateID: customer?.Addresses?.[0]?.StateID || "",
        CountryID: customer?.Addresses?.[0]?.CountryID || "",
        ZipCode: customer?.Addresses?.[0]?.ZipCode || "",
        Addresses: customer?.Addresses || [],
      });
  
      setCustomerId(customer?.CustomerID || 0);
    }
  }, [isEditMode, location.state?.customerDetails?.customer, customerDetails?.customer]);
  
  
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setCustomerFormData({ ...customerFormData, Gender: gender.id });
  };

const handleCustomerFormChange = (e) => {
  const { name, value } = e.target;
  setCustomerFormData({
    ...customerFormData,
    [name]: value,
  });
};

const handleAddressFormChange = (e) => {
  const { name, value } = e.target;
  setAddressFormData({
    ...addressFormData,
    [name]: value,
  });
};

const [customerId, setCustomerId] = useState(null);

const handleCustomerFormSubmit = async () => {
  const customerApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateCustomer";

  try {
    // Log the customer form data being sent to the API
    console.log("Customer Form Data:", customerFormData);

    // Create or update the customer
    const customerResponse = await axios.post(customerApiUrl, customerFormData);
    console.log("Customer Response:", customerResponse);

    const newCustomerId = customerResponse.data.CustomerID; // Ensure this is returned correctly

    if (!newCustomerId) {
      throw new Error("Failed to retrieve CustomerID from response.");
    }

    // Set the customerId in state, whether it's a new or existing customer
    setCustomerId(newCustomerId);

    console.log("Customer ID has been set:", newCustomerId);

    return newCustomerId; 

  } catch (error) {
    console.error("Customer submission failed:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      setError(`Failed to ${customerFormData.CustomerID ? 'update' : 'create'} customer: ` + error.response.data.message);
    } else if (error.request) {
      console.error("No response received:", error.request);
      setError("No response received from server.");
    } else {
      console.error("Error in setting up request:", error.message);
      setError("Error: " + error.message);
    }
  }
};


const handleAddressFormSubmit = async (customerId) => {
  const addressesApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateAddress";

  try {
    // Debugging state data
    console.log("Current Address Data:", addressFormData.Addresses);

    // Check if Addresses array exists and has at least one element
    if (!addressFormData.Addresses || addressFormData.Addresses.length === 0) {
      throw new Error("No addresses available to submit.");
    }

    const address = addressFormData.Addresses[0]; // Adjust if needed

    const addressData = {
      Addresses: address.Addresses,
      AddressID: address.AddressID || 0,
      CustomerID: customerId,
      TenantID: 1,
      AddressLine1: address.AddressLine1 || '',
      AddressLine2: address.AddressLine2 || '',
      CityID: address.CityID || '',
      StateID: address.StateID || '',
      CountryID: address.CountryID || '',
      ZipCode: address.ZipCode || '',
    };

    console.log("Final Address Data:", addressData);

    const addressResponse = await axios.post(addressesApiUrl, addressData);
    console.log("Address Response:", addressResponse.data);

  } catch (error) {
    console.error("Address submission failed:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      setError("Failed to submit address: " + (error.response.data.message || "Unknown error"));
    } else if (error.request) {
      console.error("No response received:", error.request);
      setError("No response received from server.");
    } else {
      console.error("Error in setting up request:", error.message);
      setError("Error: " + error.message);
    }
  }
};

// const handleAddressFormSubmit = async (customerId) => {
//   const addressesApiUrl = "https://imlystudios-backend-mqg4.onrender.com/api/customers/createOrUpdateAddress";

//   try {
//     // Debugging state data
//     console.log("Current Address Data:", addressFormData);

//     // Check if Addresses array exists and has at least one element
//     if (!addressFormData || !addressFormData.Addresses || addressFormData.Addresses.length === 0) {
//       throw new Error("No addresses available to submit.");
//     }

//     const address = addressFormData; // Use the entire addressFormData object

//     const addressData = {
//       AddressID: address.AddressID || 0,
//       CustomerID: customerId,
//       TenantID: 1,
//       AddressLine1: address.AddressLine1 || '',
//       AddressLine2: address.AddressLine2 || '',
//       CityID: address.CityID || '',
//       StateID: address.StateID || '',
//       CountryID: address.CountryID || '',
//       ZipCode: address.ZipCode || '',
//     };

//     console.log("Final Address Data:", addressData);

//     const addressResponse = await axios.post(addressesApiUrl, addressData);
//     console.log("Address Response:", addressResponse.data);

//   } catch (error) {
//     console.error("Address submission failed:", error);

//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       setError("Failed to submit address: " + (error.response.data.message || "Unknown error"));
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//       setError("No response received from server.");
//     } else {
//       console.error("Error in setting up request:", error.message);
//       setError("Error: " + error.message);
//     }
//   }
// };


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const customerId = customerFormData.CustomerID;
  
        if (!customerId) return; // Ensure customerId exists
  
        const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/customers/customers/getOrderByCustomerId/${customerId}`);
        setOrders(response.data.orders || []); 
        console.log("Fetched Orders:", response.data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };
  
    // Only call fetchOrders if customerId exists
    if (customerFormData.CustomerID) {
      fetchOrders();
    }
  }, [customerFormData.CustomerID]);  // Watch for changes in formData.CustomerID
  
  
useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://imlystudios-backend-mqg4.onrender.com/api/cities/getCountries');
      const countryData = response.data.data;
      setCountries(countryData);
      
      // Create countryMap
      const countryMapData = countryData.reduce((map, country) => {
        map[country.CountryName] = country.CountryID;
        return map;
      }, {});
      setCountryMap(countryMapData);

      console.log("Fetched countries:", countryData);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  fetchCountries();
}, []);

const fetchStatesByCountry = async (countryId) => {
  if (!countryId) return;

  try {
    const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getStatesByCountry?$filter=CountryID eq ${countryId}`);
    if (response.data.status === "SUCCESS") {
      const stateData = response.data.data;
      setStates(stateData);

      // Create stateMap
      const stateMapData = stateData.reduce((map, state) => {
        map[state.StateName] = state.StateID;
        return map;
      }, {});
      setStateMap(stateMapData);

      console.log("Fetched states:", stateData);
    }
  } catch (error) {
    console.error("Error fetching states:", error);
  }
};

const fetchCitiesByState = async (stateId) => {
  if (!stateId) return;

  try {
    const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/cities/getCitiesByState?$filter=StateID eq ${stateId}`);
    if (response.data.status === "SUCCESS") {
      const cityData = response.data.data;
      setCities(cityData);

      // Create cityMap
      const cityMapData = cityData.reduce((map, city) => {
        map[city.CityName] = city.CityID;
        return map;
      }, {});
      setCityMap(cityMapData);

      console.log("Fetched cities:", cityData);
    }
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};

const handleCountryChange = (selectedCountry) => {
  if (!selectedCountry) return;

  const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

  setSelectedCountry(selectedCountry);
  setAddressFormData({
    ...addressFormData,
    CountryID: countryID,
    CountryName: selectedCountry.CountryName
  });
  fetchStatesByCountry(countryID);
};

const handleStateChange = (state) => {
  if (!state) return;

  const stateID = stateMap[state.StateName] || state.StateID;

  setSelectedState(state);
  setAddressFormData({
    ...addressFormData,
    StateID: stateID,
    StateName: state.StateName
  });
  fetchCitiesByState(stateID);
};

const handleCityChange = (city) => {
  if (!city) return;

  const cityID = cityMap[city.CityName] || city.CityID;

  setSelectedCity(city);
  setAddressFormData({
    ...addressFormData,
    CityID: cityID,
    CityName: city.CityName
  });
};

  const handleReset = () => {
    setActiveStep(0);
  
    // Reset customer form data
    setCustomerFormData({
      TenantID: 1,
      CustomerID: null,
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      PhoneNumber: "",
      Gender: "",
      Comments: "" // Make sure to include this as well
    });
  
    // Reset address form data
    setAddressFormData({
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID: "",
      ZipCode: ""
    });
  };
  

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => false;

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };


  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddAddress = () => {
    const newAddress = {
      AddressLine1: addressFormData.AddressLine1,
      AddressLine2: addressFormData.AddressLine2,
      CityID: selectedCity ? selectedCity.CityID : '',
      StateID: selectedState ? selectedState.StateID : '',
      CountryID: selectedCountry ? selectedCountry.CountryID : '',
      ZipCode: addressFormData.ZipCode,
    };
  
    console.log("New Address Data:", newAddress);
  
    setAddressFormData((prevData) => {
      if (!Array.isArray(prevData.Addresses)) {
        console.error("Addresses is not an array");
        return { ...prevData, Addresses: [newAddress] };
      }
  
      return {
        ...prevData,
        Addresses: [...prevData.Addresses, newAddress],
        AddressLine1: '',
        AddressLine2: '',
        ZipCode: '',
      };
    });
  
    setSelectedCity(null);
    setSelectedState(null);
    setSelectedCountry(null);
  };
  
  
  
// // Edit function (set the selected address for editing)
// const handleEdit = (index) => {
//   const addressToEdit =addressFormData.Addresses[index];
//   setAddressFormData({
//     ...addressFormData,
//     AddressLine1: addressToEdit.AddressLine1,
//     AddressLine2: addressToEdit.AddressLine2,
//     ZipCode: addressToEdit.ZipCode,
//   });
//   setSelectedCity({ CityID: addressToEdit.CityID });
//   setSelectedState({ StateID: addressToEdit.StateID });
//   setSelectedCountry({ CountryID: addressToEdit.CountryID });
//   // You can also set a flag or index to identify which item is being edited
// };

// Edit function (set the selected address for editing)
const handleEdit = async (index) => {
  const addressToEdit = addressFormData.Addresses[index];
  
  // Set address form fields
  setAddressFormData({
    ...addressFormData,
    AddressLine1: addressToEdit.AddressLine1,
    AddressLine2: addressToEdit.AddressLine2,
    ZipCode: addressToEdit.ZipCode,
  });

  // Set the selected country, state, and city in dropdowns
  setSelectedCountry({ CountryID: addressToEdit.CountryID });
  
  // Fetch states based on the selected country
  await fetchStatesByCountry(addressToEdit.CountryID);
  setSelectedState({ StateID: addressToEdit.StateID });

  // Fetch cities based on the selected state
  await fetchCitiesByState(addressToEdit.StateID);
  setSelectedCity({ CityID: addressToEdit.CityID });
  
  // Optional: set a flag or index to identify the editing item
};



const handleDelete = (index) => {
  // Update the addressFormData by filtering out the selected address
  setAddressFormData({
    ...addressFormData,
    Addresses: addressFormData.Addresses.filter((_, i) => i !== index),
  });

  // Optionally, if customerFormData also has an Addresses field or needs updating
  setCustomerFormData({
    ...customerFormData,
    Addresses: customerFormData.Addresses.filter((_, i) => i !== index),
  });
};


const handleCancel = () => {
  navigate("/Customer");
};

  return (
    <>
      
      <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label} completed={isStepSkipped(index) ? false : undefined}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography className="text-center text-xl mb-4">
                All steps completed - you're finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
                <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr' },
                  gap: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  pt: 2,
                }}
              >
                {activeStep === 0 && (

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
  {/* First Name */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">First name</label>
    <input
      type="text"
      name="FirstName"
      value={customerFormData.FirstName}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Last Name */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Last name</label>
    <input
      type="text"
      name="LastName"
      value={customerFormData.LastName}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Phone Number */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Phone Number</label>
    <input
      type="text"
      name="PhoneNumber"
      value={customerFormData.PhoneNumber}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="Email"
      value={customerFormData.Email}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Password */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Password</label>
    <input
      type="password"
      name="Password"
      value={customerFormData.Password}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Confirm Password */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Confirm Password</label>
    <input
      type="password"
      name="ConfirmPassword"
      value={customerFormData.ConfirmPassword}
      onChange={handleCustomerFormChange}
      className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

  {/* Gender */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Gender</label>
    <Combobox value={selectedGender} onChange={handleGenderChange}>
      <div className="relative w-full">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          displayValue={(gender) => gender.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {genderOptions.map((gender) => (
            <Combobox.Option
              key={gender.id}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${
                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                }`
              }
              value={gender}
            >
              {({ selected, active }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {gender.name}
                  </span>
                  {selected && (
                    <span
                      className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                        active ? 'text-white' : 'text-indigo-600'
                      }`}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>

  {/* Comments */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Comments</label>
    <textarea
      name="Comments"
      value={customerFormData?.Comments || ""}
      onChange={handleCustomerFormChange}
      className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      rows="1"
    />
  </div>

 <div className="flex flex-col gap-4">
  {/* Referred By Field */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Referred By</label>
    <div className="w-full">
      <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
        <div className="relative">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(type) => type || ''}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
              <Combobox.Option
                key={index}
                value={type}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {type}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  </div>

  {/* Conditional Rendering for Reference */}
  {selectedReferralType === 'Reference' && (
   
    <div className="flex flex-col gap-4">
  {/* Reference Sub-option */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Reference Sub-option</label>
    <div className="w-full">
      <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
        <div className="relative">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(option) => option || ''}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {['Director', 'Employee', 'Existing'].map((option, index) => (
              <Combobox.Option
                key={index}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {option}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  </div>
</div>

  )}

  {/* Conditional Rendering for Social Media */}
  {selectedReferralType === 'Social Media' && (

    <div className="flex flex-col gap-4">
  {/* Social Media Platform */}
  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Social Media Platform</label>
    <div className="w-full">
      <Combobox as="div" value={selectedSocialMediaPlatform} onChange={handleSocialMediaPlatformChange}>
        <div className="relative">
          <Combobox.Input
             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(platform) => platform || ''}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
              <Combobox.Option
                key={index}
                value={platform}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {platform}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  </div>
</div>

    
  )}

  {/* Error Message */}
  {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
</div>

<div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              onClick={handleCustomerFormSubmit}
              className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
            >
              Cancel
            </button>
          </div>

</div>


                )}
                {activeStep === 1 && (

<div>
{/* Address Form */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div className="flex items-center gap-4">
  <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 1</label>
  <input
    type="text"
    name="AddressLine1"
    value={addressFormData.AddressLine1}
    onChange={handleAddressFormChange}
    className={`p-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
  />
</div>

<div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Address Line 2</label>
    <input
      type="text"
      name="AddressLine2"
      value={addressFormData.AddressLine2}
      onChange={handleAddressFormChange}
      className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

 <div className="flex items-center gap-4">
      <label className="w-1/3 text-xs font-medium text-gray-700">Country</label>
      <div className="w-full">
        <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
          <div className="relative">
            <Combobox.Input
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
              displayValue={(country) => country?.CountryName || ''} // Display selected country name
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>

            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {countries
                .filter((country) =>
                  country.CountryName.toLowerCase().includes(query.toLowerCase())
                )
                .map((country) => (
                  <Combobox.Option
                    key={country.CountryID}
                    value={country} // Pass the full country object to onChange
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                  >
                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                      {country.CountryName}
                    </span>
                    <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
    </div>



<div className="flex items-center gap-4">
  <label className="w-1/3 text-xs font-medium text-gray-700">State</label>
  <div className="w-full">
    <Combobox as="div" value={selectedState} onChange={handleStateChange}>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)} // Handle the search query
          displayValue={(state) => state?.StateName || ''} // Show the selected state name
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {states
            .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
            .map((state) => (
              <Combobox.Option
                key={state.StateID}
                value={state}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {state.StateName}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>
<div className="flex items-center gap-4">
  <label className="w-1/3 text-xs font-medium text-gray-700">City</label>
  <div className="w-full">
    <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)} // Handle the search query
          displayValue={(city) => city?.CityName || ''} // Show the selected city name
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {cities
            .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
            .map((city) => (
              <Combobox.Option
                key={city.CityID}
                value={city}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {city.CityName}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>



  <div className="flex items-center gap-4">
    <label className="w-1/3 text-xs font-medium text-gray-700">Zip Code</label>
    <input
      type="text"
      name="ZipCode"
      value={addressFormData.ZipCode}
      onChange={handleAddressFormChange}
      className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? 'border-red-500' : 'border-gray-400'}`}
    />
  </div>

 
   {/* <div className="flex justify-end col-span-2">
      <button
        onClick={handleAddAddress}
        onClick={() => handleAddressFormSubmit(customerId)}
        className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
      >
        Add <span className="text-lg"><IoMdAddCircleOutline /></span>
      </button>
        
    </div>       */}
    <div className="flex justify-end col-span-2">
  <button
    onClick={() => {
      handleAddressFormSubmit(customerId); // Handle the form submission for a specific customer
      handleAddAddress(); 
    }}
    className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
  >
    Add <span className="text-lg"><IoMdAddCircleOutline /></span>
  </button>
</div>

</div>

  {/* <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Address Line 1</StyledTableCell>
            <StyledTableCell>Address Line 2</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell>Zip Code</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {addressFormData.Addresses &&
            addressFormData.Addresses.map((address, index) => {
              // Check if the address is an object
              if (typeof address === 'object') {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
                    <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
                    <StyledTableCell>{address.CityID || ''}</StyledTableCell>
                    <StyledTableCell>{address.StateID || ''}</StyledTableCell>
                    <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        onClick={() => handleEdit(index)}
                        startIcon={<FaEdit />}
                        variant="contained"
                        color="primary"
                        size="small"
                        className="mr-2"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(index)}
                        startIcon={<FaTrashAlt />}
                        variant="contained"
                        color="secondary"
                        size="small"
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              } else if (typeof address === 'string') {
                // Handle case if address is still a string
                const addressParts = address.split(", ");
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{addressParts[0] || ''}</StyledTableCell>
                    <StyledTableCell>{addressParts[1] || ''}</StyledTableCell>
                    <StyledTableCell>{addressParts[2] || ''}</StyledTableCell>
                    <StyledTableCell>{addressParts[3] || ''}</StyledTableCell>
                    <StyledTableCell>{addressParts[4] || ''}</StyledTableCell>
                    <StyledTableCell>{addressParts[5] || ''}</StyledTableCell>
                  </StyledTableRow>
                );
              }
              return null;
            })}
        </TableBody>
      </Table>
    </TableContainer>   */}
 {/* <TableContainer component={Paper} className="mt-4">
  <Table>
    <TableHead>
      <TableRow>
        <StyledTableCell>Address Line 1</StyledTableCell>
        <StyledTableCell>Address Line 2</StyledTableCell>
        <StyledTableCell>City</StyledTableCell>
        <StyledTableCell>State</StyledTableCell>
        <StyledTableCell>Zip Code</StyledTableCell>
        <StyledTableCell>Actions</StyledTableCell>
      </TableRow>
    </TableHead>
    
    <TableBody>
      {addressFormData.Addresses && addressFormData.Addresses.map((address, index) => {
        if (typeof address === 'object') {
          return (
            <StyledTableRow key={index}>
              <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
              <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
              <StyledTableCell>{address.CityName || address.CityID || ''}</StyledTableCell> 
              <StyledTableCell>{address.StateName || address.StateID || ''}</StyledTableCell> 
              <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
              <StyledTableCell>
                <Button
                  onClick={() => handleEdit(index)}
                  startIcon={<FaEdit />}
                  variant="contained"
                  color="primary"
                  size="small"
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(index)}
                  startIcon={<FaTrashAlt />}
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          );
        } else if (typeof address === 'string') {
          const addressParts = address.split(", ");
          return (
            <StyledTableRow key={index}>
              <StyledTableCell>{addressParts[0] || ''}</StyledTableCell>
              <StyledTableCell>{addressParts[1] || ''}</StyledTableCell>
              <StyledTableCell>{addressParts[2] || ''}</StyledTableCell>
              <StyledTableCell>{addressParts[3] || ''}</StyledTableCell>
              <StyledTableCell>{addressParts[4] || ''}</StyledTableCell>
              <StyledTableCell>{addressParts[5] || ''}</StyledTableCell>
            </StyledTableRow>
          );
        }
        return null;
      })}
    </TableBody>
  </Table>
</TableContainer>  */}
  <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Address Line 1</TableCell>
            <TableCell>Address Line 2</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {addressFormData.Addresses && addressFormData.Addresses.map((address, index) => {
            if (typeof address === 'object') {
              const cityName = Object.keys(cityMap).find(key => cityMap[key] === address.CityID) || 'N/A';
              const stateName = Object.keys(stateMap).find(key => stateMap[key] === address.StateID) || 'N/A';

              return (
                <TableRow key={index}>
                  <TableCell>{address.AddressLine1 || ''}</TableCell>
                  <TableCell>{address.AddressLine2 || ''}</TableCell>
                  <TableCell>{cityName}</TableCell> {/* Display City Name */}
                  <TableCell>{stateName}</TableCell> {/* Display State Name */}
                  <TableCell>{address.ZipCode || ''}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(index)}
                      startIcon={<FaEdit />}
                      variant="contained"
                      color="primary"
                      size="small"
                      className="mr-2"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(index)}
                      startIcon={<FaTrashAlt />}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            } else if (typeof address === 'string') {
              const addressParts = address.split(", ");
              return (
                <TableRow key={index}>
                  <TableCell>{addressParts[0] || ''}</TableCell>
                  <TableCell>{addressParts[1] || ''}</TableCell>
                  <TableCell>{addressParts[2] || ''}</TableCell>
                  <TableCell>{addressParts[3] || ''}</TableCell>
                  <TableCell>{addressParts[4] || ''}</TableCell>
                  <TableCell>{addressParts[5] || ''}</TableCell>
                </TableRow>
              );
            }
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>

{/* <TableContainer component={Paper} className="mt-4">
  <Table>
    <TableHead>
      <TableRow>
        <StyledTableCell>Address Line 1</StyledTableCell>
        <StyledTableCell>Address Line 2</StyledTableCell>
        <StyledTableCell>City</StyledTableCell>
        <StyledTableCell>State</StyledTableCell>
        <StyledTableCell>Zip Code</StyledTableCell>
        <StyledTableCell>Actions</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {addresses.map((address, index) => (
        <StyledTableRow key={address.AddressID || index}>
          <StyledTableCell>{address.AddressLine1 || ''}</StyledTableCell>
          <StyledTableCell>{address.AddressLine2 || ''}</StyledTableCell>
          <StyledTableCell>{address.CityID || ''}</StyledTableCell>
          <StyledTableCell>{address.StateID || ''}</StyledTableCell>
          <StyledTableCell>{address.ZipCode || ''}</StyledTableCell>
          <StyledTableCell>
            <Button
              onClick={() => handleEdit(index)} // Update as needed
              startIcon={<FaEdit />}
              variant="contained"
              color="primary"
              size="small"
              className="mr-2"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(index)} // Update as needed
              startIcon={<FaTrashAlt />}
              variant="contained"
              color="secondary"
              size="small"
            >
              Delete
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer> */}



<div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              // onClick={handleAddressFormSubmit}
              // When calling the function, ensure customerId is not an event
          //  onClick={() => handleAddressFormSubmit(customerId)}

              className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
            >
              Cancel
            </button>
          </div>

</div>     
                )}
                  {activeStep === 2 && (

<TableContainer component={Paper} className="mt-4">
<Table>
  <TableHead>
    <TableRow>
      <StyledTableCell>Order ID</StyledTableCell>
      <StyledTableCell>Order Date</StyledTableCell>
      <StyledTableCell>Total Amount</StyledTableCell>
      <StyledTableCell>Status</StyledTableCell>
    </TableRow>
  </TableHead>

  <TableBody>
    {orders.map((order) => (
      <StyledTableRow key={order.OrderID}>
        <StyledTableCell>{order.OrderID}</StyledTableCell>
        <StyledTableCell>{new Date(order.OrderDate).toLocaleDateString()}</StyledTableCell>
        <StyledTableCell>${order.TotalAmount}</StyledTableCell>
        <StyledTableCell>{order.OrderStatus}</StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
 
  )}
                
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between">
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
                >
                  Back
                </Button>
                {/* <Button
                  // onClick={activeStep === steps.length - 1 ? (isEditMode ? handleUpdateSubmit : handleFormSubmit) : handleNext}
                  onClick={activeStep === steps.length - 1 ? (handleFormSubmit) : handleNext}
                  className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
                >
                  {activeStep === steps.length - 1 ? (isEditMode ? 'Update' : 'Submit') : 'Next'}
                </Button> */}
           <Button
  onClick={()=>handleNext()}
  className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
>
  Next
</Button>



              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
      
    </>
  );
}

export default AddCustomers;


