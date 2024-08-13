// import React from 'react';

// function AddOrders() {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block font-semibold mb-2">Name</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Order Status</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Email</label>
//             <input type="email" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Exp Delivery Date</label>
//             <input type="date" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Phone</label>
//             <input type="tel" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Address</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Created By</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Design</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//         </div>

//         <div className="mt-6">
//           <label className="block font-semibold mb-2">Type</label>
//           <p className="text-sm font-semibold">1. Kitchen, Wardrobe, Living</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default AddOrders;


// import React from 'react';

// function AddOrders() {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input type="date" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input type="tel" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <p className="text-sm font-semibold">1. Kitchen, Wardrobe, Living</p>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700">
//             Add Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: '1. Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     setSubmittedDetails(orderDetails);
//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: '',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: '1. Kitchen, Wardrobe, Living',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <input
//               type="text"
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <p className="text-sm font-semibold">{orderDetails.type}</p>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;



// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: '',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     setSubmittedDetails(orderDetails);
//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             >
//               <option value="Pending">Pending</option>
//               <option value="Processed">Processed</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             name="type"
//             value={orderDetails.type}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           >
//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-blue text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Validate all fields
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     // If there are errors, set the error state and return
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, submit the form
//     setSubmittedDetails(orderDetails);
//     setErrors({});

//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: 'select a status',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'select a type',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : ''}`}
//             >
//                               <option value="Select a status">Select a Status</option>

//               <option value="Pending">Pending</option>
//               <option value="Processed">Processed</option>
//             </select>
//             {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : ''}`}
//             />
//             {errors.deliveryDate && <p className="text-red-500 text-sm">{errors.deliveryDate}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''}`}
//             />
//             {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : ''}`}
//             />
//             {errors.createdBy && <p className="text-red-500 text-sm">{errors.createdBy}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : ''}`}
//             />
//             {errors.design && <p className="text-red-500 text-sm">{errors.design}</p>}
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             name="type"
//             value={orderDetails.type}
//             onChange={handleChange}
//             className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
//           >
//                         <option value="Select a type">Select a type</option>

//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//           {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-brown text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


import React, { useState } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

function AddOrders() {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    orderStatus: 'Pending',
    email: '',
    deliveryDate: '',
    phone: '',
    address: '',
    createdBy: '',
    design: '',
    type: 'Kitchen, Wardrobe, Living',
  });

  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!orderDetails.name) newErrors.name = 'Name is required';
    if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
    if (!orderDetails.email) newErrors.email = 'Email is required';
    if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
    if (!orderDetails.phone) newErrors.phone = 'Phone is required';
    if (!orderDetails.address) newErrors.address = 'Address is required';
    if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
    if (!orderDetails.design) newErrors.design = 'Design is required';
    if (!orderDetails.type) newErrors.type = 'Type is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedDetails(orderDetails);
    setErrors({});
    setShowAlert(true);

    setOrderDetails({
      name: '',
      orderStatus: 'Pending',
      email: '',
      deliveryDate: '',
      phone: '',
      address: '',
      createdBy: '',
      design: '',
      type: 'Kitchen, Wardrobe, Living',
    });
  };

  return (
    <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Create Order</h2>

      {/* Success Alert */}
      {showAlert && (
        <div className="rounded-md bg-green-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Order successfully added!</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setShowAlert(false)}
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="border p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>

        <div className="grid grid-cols-2 gap-6">
          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Order Status</label>
            <select
              name="orderStatus"
              value={orderDetails.orderStatus}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : ''}`}
            >
              <option value="Select a status">Select a Status</option>
              <option value="Pending">Pending</option>
              <option value="Processed">Processed</option>
            </select>
            {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={orderDetails.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              value={orderDetails.deliveryDate}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : ''}`}
            />
            {errors.deliveryDate && <p className="text-red-500 text-sm">{errors.deliveryDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={orderDetails.phone}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={orderDetails.address}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Created By</label>
            <input
              type="text"
              name="createdBy"
              value={orderDetails.createdBy}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : ''}`}
            />
            {errors.createdBy && <p className="text-red-500 text-sm">{errors.createdBy}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Design</label>
            <input
              type="text"
              name="design"
              value={orderDetails.design}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : ''}`}
            />
            {errors.design && <p className="text-red-500 text-sm">{errors.design}</p>}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            name="type"
            value={orderDetails.type}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
          >
            <option value="Select a type">Select a type</option>
            <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
            <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        {/* Add Order Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="bg-custom-darkblue text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-custom-lightblue"
          >
            Create Order
          </button>
        </div>
      </div>

      {/* Display Submitted Details */}
      {submittedDetails && (
        <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
          <ul className="list-disc pl-6">
            <li><strong>Name:</strong> {submittedDetails.name}</li>
            <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
            <li><strong>Email:</strong> {submittedDetails.email}</li>
            <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
            <li><strong>Phone:</strong> {submittedDetails.phone}</li>
            <li><strong>Address:</strong> {submittedDetails.address}</li>
            <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
            <li><strong>Design:</strong> {submittedDetails.design}</li>
            <li><strong>Type:</strong> {submittedDetails.type}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddOrders;



// import React, { useState } from 'react';
// import FormWizard from 'react-form-wizard-component';
// import 'react-form-wizard-component/dist/style.css';
// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setSubmittedDetails(orderDetails);
//     setErrors({});
//     setShowAlert(true);

//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//   };

//   const handleComplete = () => {
//     handleSubmit();
//     console.log("Form completed!");
//     // You can add additional logic here
//   };

//   const tabChanged = ({ prevIndex, nextIndex }) => {
//     console.log("prevIndex", prevIndex);
//     console.log("nextIndex", nextIndex);
//   };

//   return (
//     <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Order</h2>

//       {/* Success Alert */}
//       {showAlert && (
//         <div className="rounded-md bg-green-50 p-4 mb-4">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium text-green-800">Order successfully added!</p>
//             </div>
//             <div className="ml-auto pl-3">
//               <button
//                 onClick={() => setShowAlert(false)}
//                 className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
//               >
//                 <span className="sr-only">Dismiss</span>
//                 <XMarkIcon aria-hidden="true" className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Form Wizard */}
//       <FormWizard inlineStep={true} onComplete={handleComplete} onTabChange={tabChanged}>
//         <FormWizard.TabContent title="Customer Details" icon="ti-user">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={orderDetails.name}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Order Status</label>
//               <select
//                 name="orderStatus"
//                 value={orderDetails.orderStatus}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : ''}`}
//               >
//                 <option value="Select a status">Select a Status</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Processed">Processed</option>
//               </select>
//               {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={orderDetails.email}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//               <input
//                 type="date"
//                 name="deliveryDate"
//                 value={orderDetails.deliveryDate}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : ''}`}
//               />
//               {errors.deliveryDate && <p className="text-red-500 text-sm">{errors.deliveryDate}</p>}
//             </div>
//           </div>
//         </FormWizard.TabContent>

//         <FormWizard.TabContent title="Order Details" icon="ti-settings">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={orderDetails.phone}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
//               />
//               {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={orderDetails.address}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''}`}
//               />
//               {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Created By</label>
//               <input
//                 type="text"
//                 name="createdBy"
//                 value={orderDetails.createdBy}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : ''}`}
//               />
//               {errors.createdBy && <p className="text-red-500 text-sm">{errors.createdBy}</p>}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Design</label>
//               <input
//                 type="text"
//                 name="design"
//                 value={orderDetails.design}
//                 onChange={handleChange}
//                 className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : ''}`}
//               />
//               {errors.design && <p className="text-red-500 text-sm">{errors.design}</p>}
//             </div>
//           </div>
//         </FormWizard.TabContent>

//         <FormWizard.TabContent title="Product Type" icon="ti-check">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Type</label>
//             <select
//               name="type"
//               value={orderDetails.type}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
//             >
//               <option value="Select a type">Select a Type</option>
//               <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             </select>
//             {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
//           </div>
//         </FormWizard.TabContent>
//       </FormWizard>
//     </div>
//   );
// }

// export default AddOrders;
