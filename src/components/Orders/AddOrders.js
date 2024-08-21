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


// import React, { useState } from 'react';
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

//   return (
//     <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Create Order</h2>

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

//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>

//         <div className="grid grid-cols-2 gap-6">
//           {/* Form Fields */}
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
//               <option value="Select a status">Select a Status</option>
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
//             <option value="Select a type">Select a type</option>
//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//           {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-darkblue text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-custom-lightblue"
//           >
//             Create Order
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
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//     decreaseCircleAddNumber: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

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
//     if (!orderDetails.decreaseCircleAddNumber) newErrors.decreaseCircleAddNumber = 'Decrease Circle Add Number is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
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
//       decreaseCircleAddNumber: '',
//     });
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: '100%' }} className="p-4 ml-72 ">
//       <Stepper activeStep={activeStep} className="mb-4 w-1/2">
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }} className="text-center text-xl w-1/2">
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//             <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//               Reset
//             </Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }} className="text-center text-lg">
//             Step {activeStep + 1}
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//             {activeStep === 0 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={orderDetails.name}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                 {/* Add other fields for Customer Details */}
//               </div>
//             )}
//             {activeStep === 1 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                 <select
//                   name="orderStatus"
//                   value={orderDetails.orderStatus}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="Select a status">Select a Status</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Processed">Processed</option>
//                 </select>
//                 {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                 {/* Add other fields for Order Details */}
//               </div>
//             )}
//             {activeStep === 2 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Type</label>
//                 <select
//                   name="type"
//                   value={orderDetails.type}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="Select a type">Select a Type</option>
//                   <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                 </select>
//                 {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                 <label className="block text-sm font-medium text-gray-700">Decrease Circle Add Number</label>
//                 <input
//                   type="text"
//                   name="decreaseCircleAddNumber"
//                   value={orderDetails.decreaseCircleAddNumber}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.decreaseCircleAddNumber ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.decreaseCircleAddNumber && <p className="text-red-500 text-sm mt-1">{errors.decreaseCircleAddNumber}</p>}
//               </div>
//             )}
//           </Box>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
//             {isStepOptional(activeStep) && (
//               <Button
//                 color="inherit"
//                 onClick={handleSkip}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Skip
//               </Button>
//             )}
//             <Button
//               onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//               className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//             >
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//     decreaseCircleAddNumber: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

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
//     if (!orderDetails.decreaseCircleAddNumber) newErrors.decreaseCircleAddNumber = 'Decrease Circle Add Number is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
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
//       decreaseCircleAddNumber: '',
//     });
//     setActiveStep(0);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   {/* Add other fields for Customer Details */}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="Select a status">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   {/* Add other fields for Order Details */}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="Select a type">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700 mt-4">Decrease Circle Add Number</label>
//                   <input
//                     type="text"
//                     name="decreaseCircleAddNumber"
//                     value={orderDetails.decreaseCircleAddNumber}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.decreaseCircleAddNumber ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.decreaseCircleAddNumber && <p className="text-red-500 text-sm mt-1">{errors.decreaseCircleAddNumber}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

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

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
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
//     setActiveStep(0);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
                
                
                
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   {/* Add other fields for Order Details */}
//                   <label className="block text-sm font-medium text-gray-700">DeliveryDate</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">createdBy</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

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

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);

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
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//       {showAlert && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
//           <Typography>Order successfully added!</Typography>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

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

//     setSubmittedDetails(orderDetails); // Store the submitted details
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
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     // <div className="p-6 max-w-4xl ml-80 md:ml-32 mt-8 bg-white shadow-lg rounded-lg">
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
      
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-6">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               {activeStep === steps.length - 1 ? (
//                 <Button onClick={handleSubmit} className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 rounded">
//                   Finish
//                 </Button>
//               ) : (
//                 <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                   Next
//                 </Button>
//               )}
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="mt-4 text-green-700 bg-green-100 p-3 rounded">
//             Order submitted successfully!
//           </div>
//         )}
//         {submittedDetails && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
//             <Typography variant="h6" className="text-center mb-4">
//               Submitted Order Details
//             </Typography>
//             <Typography><strong>Name:</strong> {submittedDetails.name}</Typography>
//             <Typography><strong>Email:</strong> {submittedDetails.email}</Typography>
//             <Typography><strong>Phone:</strong> {submittedDetails.phone}</Typography>
//             <Typography><strong>Order Status:</strong> {submittedDetails.orderStatus}</Typography>
//             <Typography><strong>Delivery Date:</strong> {submittedDetails.deliveryDate}</Typography>
//             <Typography><strong>Address:</strong> {submittedDetails.address}</Typography>
//             <Typography><strong>Created By:</strong> {submittedDetails.createdBy}</Typography>
//             <Typography><strong>Design:</strong> {submittedDetails.design}</Typography>
//             <Typography><strong>Type:</strong> {submittedDetails.type}</Typography>
//           </div>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
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

//     setSubmittedDetails(orderDetails); // Store the submitted details
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
//     setImage(null);
//     setImagePreview(null);
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               // Optional step logic
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
//                   <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="mt-1 w-full"
//                   />
//                   {imagePreview && (
//                     <div className="mt-4">
//                       <img src={imagePreview} alt="Preview" className="max-w-full h-auto" />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-6">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               {activeStep === steps.length - 1 ? (
//                 <Button onClick={handleSubmit} className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 rounded">
//                   Finish
//                 </Button>
//               ) : (
//                 <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                   Next
//                 </Button>
//               )}
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="mt-4 text-green-700 bg-green-100 p-3 rounded">
//             Order submitted successfully!
//           </div>
//         )}
//         {submittedDetails && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
//             <Typography variant="h6" className="text-center mb-4">
//               Submitted Order Details
//             </Typography>
//             <Typography><strong>Name:</strong> {submittedDetails.name}</Typography>
//             <Typography><strong>Email:</strong> {submittedDetails.email}</Typography>
//             <Typography><strong>Phone:</strong> {submittedDetails.phone}</Typography>
//             <Typography><strong>Order Status:</strong> {submittedDetails.orderStatus}</Typography>
//             <Typography><strong>Delivery Date:</strong> {submittedDetails.deliveryDate}</Typography>
//             <Typography><strong>Address:</strong> {submittedDetails.address}</Typography>
//             <Typography><strong>Created By:</strong> {submittedDetails.createdBy}</Typography>
//             <Typography><strong>Design:</strong> {submittedDetails.design}</Typography>
//             <Typography><strong>Type:</strong> {submittedDetails.type}</Typography>
//             {imagePreview && (
//               <div className="mt-4">
//                 <img src={imagePreview} alt="Submitted Image" className="max-w-full h-auto" />
//               </div>
//             )}
//           </div>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleImageRemove = () => {
//     setImage(null);
//     setImagePreview(null);
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

//     setSubmittedDetails(orderDetails); // Store the submitted details
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
//     setImage(null);
//     setImagePreview(null);
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               // Optional step logic
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
//                   <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="mt-1 w-full"
//                   />
//                   {imagePreview && (
//                     <div className="mt-4 relative">
//                       <button
//                         type="button"
//                         onClick={handleImageRemove}
//                         className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-sm"
//                       >
//                         ×
//                       </button>
//                       <img src={imagePreview} alt="Preview" className="max-w-xs h-auto" />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-6">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               {activeStep === steps.length - 1 ? (
//                 <Button onClick={handleSubmit} className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 rounded">
//                   Finish
//                 </Button>
//               ) : (
//                 <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                   Next
//                 </Button>
//               )}
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="mt-4 text-green-700 bg-green-100 p-3 rounded">
//             Order submitted successfully!
//           </div>
//         )}
//         {submittedDetails && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
//             <Typography variant="h6" className="text-center mb-4">
//               Submitted Order Details
//             </Typography>
//             <Typography><strong>Name:</strong> {submittedDetails.name}</Typography>
//             <Typography><strong>Email:</strong> {submittedDetails.email}</Typography>
//             <Typography><strong>Phone:</strong> {submittedDetails.phone}</Typography>
//             <Typography><strong>Order Status:</strong> {submittedDetails.orderStatus}</Typography>
//             <Typography><strong>Delivery Date:</strong> {submittedDetails.deliveryDate}</Typography>
//             <Typography><strong>Address:</strong> {submittedDetails.address}</Typography>
//             <Typography><strong>Created By:</strong> {submittedDetails.createdBy}</Typography>
//             <Typography><strong>Design:</strong> {submittedDetails.design}</Typography>
//             <Typography><strong>Type:</strong> {submittedDetails.type}</Typography>
//                         <Typography><strong>Type:</strong> {submittedDetails.type}</Typography>

//             {imagePreview && (
//               <div className="mt-4 relative">
//                 <button
//                   type="button"
//                   onClick={handleImageRemove}
//                   className="absolute top-0 right-100 bg-red-500 text-white rounded-full p-1 text-sm"
//                 >
//                   ×
//                 </button>
//                 <img src={imagePreview} alt="Submitted Image" className="max-w-xs h-auto" />
//               </div>
//             )}
//           </div>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleImageRemove = () => {
//     setImage(null);
//     setImagePreview(null);
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

//     setSubmittedDetails(orderDetails); // Store the submitted details
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
//     setImage(null);
//     setImagePreview(null);
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               // Optional step logic
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select Type</option>
//                     <option value="Kitchen">Kitchen</option>
//                     <option value="Wardrobe">Wardrobe</option>
//                     <option value="Living">Living</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="mt-1"
//                   />
//                   {imagePreview && (
//                     <div className="mt-2 relative">
//                       <img src={imagePreview} alt="Image Preview" className="w-32 h-32 object-cover border rounded-md" />
//                       <button
//                         type="button"
//                         onClick={handleImageRemove}
//                         className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
//                         style={{ transform: 'translate(50%, -50%)' }}
//                       >
//                         X
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Button
//                 color="inherit"
//                 onClick={handleBack}
//                 disabled={activeStep === 0}
//                 className="bg-gray-500 text-white hover:bg-gray-700 mr-2"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button color="inherit" onClick={handleSkip} className="bg-blue-500 text-white hover:bg-blue-700 mr-2">
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700"
//               >
//                 {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//       {showAlert && (
//         <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded">
//           Order details have been submitted!
//         </div>
//       )}
//       {submittedDetails && (
//         <div className="mt-4 p-4 bg-gray-100 border border-gray-300 text-gray-700 rounded">
//           <h3 className="text-lg font-semibold">Submitted Details</h3>
//           <p><strong>Name:</strong> {submittedDetails.name}</p>
//           <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
//           <p><strong>Email:</strong> {submittedDetails.email}</p>
//           <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
//           <p><strong>Phone:</strong> {submittedDetails.phone}</p>
//           <p><strong>Address:</strong> {submittedDetails.address}</p>
//           <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
//           <p><strong>Design:</strong> {submittedDetails.design}</p>
//           <p><strong>Type:</strong> {submittedDetails.type}</p>
//           {imagePreview && (
//             <div className="mt-2 relative">
//               <img src={imagePreview} alt="Submitted Image" className="w-32 h-32 object-cover border rounded-md" />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 6) {
//       alert('You can only upload up to 6 images.');
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//     setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
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

//     setSubmittedDetails(orderDetails); // Store the submitted details
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
//     setImages([]);
//     setImagePreviews([]);
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               // Optional step logic
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <textarea
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Image Upload (up to 6 images)</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={handleImageChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                   <div className="grid grid-cols-3 gap-4 mt-4">
//                     {imagePreviews.map((preview, index) => (
//                       <div key={index} className="relative">
//                         <img
//                           src={preview}
//                           alt={`Uploaded ${index}`}
//                           className="w-full h-24 object-cover border rounded-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => handleImageRemove(index)}
//                           className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
//                         >
//                           &times;
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between">
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="bg-gray-500 text-white hover:bg-gray-700 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//       {showAlert && (
//         <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
//           <strong className="font-bold">Order submitted successfully!</strong>
//         </div>
//       )}
//       {submittedDetails && (
//         <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
//           <p><strong>Name:</strong> {submittedDetails.name}</p>
//           <p><strong>Email:</strong> {submittedDetails.email}</p>
//           <p><strong>Phone:</strong> {submittedDetails.phone}</p>
//           <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
//           <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
//           <p><strong>Design:</strong> {submittedDetails.design}</p>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {submittedDetails.images && submittedDetails.images.map((img, index) => (
//               <img key={index} src={img.preview} alt={`Final ${index}`} className="w-full h-24 object-cover border rounded-md" />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
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
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 6) {
//       alert('You can only upload up to 6 images.');
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//     setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
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

//     setSubmittedDetails({ ...orderDetails, images: imagePreviews }); // Store the submitted details including image previews
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
//     setImages([]);
//     setImagePreviews([]);
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               // Optional step logic
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' }, gap:"2", pt: 2 }} >
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <textarea
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
                  
//                   <label className="block text-sm font-medium text-gray-700">Image Upload (up to 6 images)</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={handleImageChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                   <div className="grid grid-cols-3 gap-4 mt-4">
//                     {imagePreviews.map((preview, index) => (
//                       <div key={index} className="relative">
//                         <img
//                           src={preview}
//                           alt={`Uploaded ${index}`}
//                           className="w-full h-full object-cover border rounded-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => handleImageRemove(index)}
//                           className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
//                         >
//                           &times;
//                         </button>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <input
//                     type="text"
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between">
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className="bg-gray-500 text-white hover:bg-gray-700 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//       {showAlert && (
//         <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
//           <strong className="font-bold">Order submitted successfully!</strong>
//         </div>
//       )}
//       {submittedDetails && (
//         <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
//           <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
//           <p><strong>Name:</strong> {submittedDetails.name}</p>
//           <p><strong>Email:</strong> {submittedDetails.email}</p>
//           <p><strong>Phone:</strong> {submittedDetails.phone}</p>
//           <p><strong>Address:</strong> {submittedDetails.address}</p>
//           <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
//           <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
//           <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
//           <p><strong>Design:</strong> {submittedDetails.design}</p>
//           <p><strong>Type:</strong> {submittedDetails.type}</p>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {submittedDetails.images && submittedDetails.images.map((img, index) => (
//               <img key={index} src={img} alt={`Final ${index}`} className="w-full h-24 object-cover border rounded-md" />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  MdAddToPhotos, MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";

import {
  Combobox,

} from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

const categories = [
  { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
  { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
  { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
];
const steps = ['Order Details', 'Design', 'Transactions', "payments"];

function AddOrders() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );

  const subOptions = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
    : [];
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    orderStatus: '',
    email: '',
    deliveryDate: '',
    phone: '',
    address: '',
    address1:"",
    city:"",
    state: "",
    zipcode:"",
    createdBy: '',
    design: '',
    type: '',
    categories:"",
    length: '',
    height: '',
    width: '',
    totalAmount:"",
    advanceAmount:"",
    installments:"",
    comments:"",
    orderStatusComments:"",
    startdate:"",
    enddate:"",
    paymentstype:"",
  });
  const handleCategoryChange = (category) => {
    setQuery('');
    setSelectedCategory(category);
    setSelectedSubOption(''); // Reset sub-option when category changes
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      categories: category ? category.name : ''
    }));
  };
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);



  const handleReset = () => setActiveStep(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 6) {
      alert('You can only upload up to 6 images.');
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
    setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!orderDetails.name) newErrors.name = 'Name is required';
    if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
    if (!orderDetails.email) newErrors.email = 'Email is required';
    if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
    if (!orderDetails.phone) newErrors.phone = 'Phone is required';
    if (!orderDetails.address) newErrors.address = 'Address line1 is required';
    if (!orderDetails.address1) newErrors.address1 = 'Address line2 is required';
    if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
    if (!orderDetails.design) newErrors.design = 'Design is required';
    if (!orderDetails.type) newErrors.type = 'Type is required';
    if (!orderDetails.categories) newErrors.categories = 'categories is required';
    if (!selectedSubOption) newErrors.subOption = 'Sub-option is required';
    if (!orderDetails.city) newErrors.city = 'City is required';
    if (!orderDetails.state) newErrors.state = 'State is required';
    if (!orderDetails.length) newErrors.length = 'length is required';
    if (!orderDetails.width) newErrors.width = 'width is required';
    if (!orderDetails.totalAmount) newErrors.totalAmount = 'TotalAmount is required';
    if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'TotalAmount is required';
    if (!orderDetails.installments) newErrors.installments = 'installments is required';
    if (!orderDetails.comments) newErrors.comments = 'Comments is required';
    if (!orderDetails. orderStatusComments) newErrors.orderStatusComments = 'Comments is required';
    if (!orderDetails.startdate) newErrors.startdate = 'StartDate is required';
    if (!orderDetails.enddate) newErrors.enddate = 'EndDate is required';
    if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required'; 


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
    setShowAlert(true);

    setOrderDetails({
      name: '',
      orderStatus: '',
      email: '',
      deliveryDate: '',
      phone: '',
      address: '',
      address1: '',
      city: '',
      state: '',
      zipcode:"",
      createdBy: '',
      design: '',
      type: '',
      categories: '',
      length: '',
      height: '',
      width: '',
      totalAmount: '',
      advanceAmount: '',
      installments:"",
      comments:"",
      orderStatusComments:"",
      startdate: "",
      enddate: "",
      paymentstype: "",
    });
    setImages([]);
    setImagePreviews([]);
    setSelectedSubOption('');

    setActiveStep(0);  // Reset stepper to first step
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  const handleCancel = () => {
    setOrderDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
      address1: '',
      city: '',
      state: '',
      zipcode: '',
      orderStatus: '',
      createdBy: '',
      deliveryDate: '',
      design: '',
      type: '',
      categories: '',
      subOption: '',
      images: [],
      length: '',
      height: '',
      width: '',
      totalAmount: '',
      advanceAmount: '',
      installments:'',
      comments:'',
      orderStatusComments:'',
      startdate: '',
      enddate: '',
      paymentstype: '',
    });
    setActiveStep(0); // Optional: Reset to the first step
  };

  const amountToBePaid = orderDetails.totalAmount - orderDetails.advanceAmount;
 const remainder = amountToBePaid / orderDetails.installments;
 const [showSearchCard, setShowSearchCard] = useState(false);

 const handleExistingUserClick = () => {
     setShowSearchCard(!showSearchCard);
 };
  return (
    <>
    <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
            {/* Button at the top */}
            <button 
                onClick={handleExistingUserClick} 
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Existing User
            </button>

            {/* Search Card */}
            {showSearchCard && (
                <div className="mt-4 p-4 border rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Search User</h2>
                    <input 
                        type="text" 
                        placeholder="Search by email or mobile number" 
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </div>
            )}
        </div>
    <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} className="mb-6">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              // Optional step logic
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
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
            <Typography className="text-center text-lg mb-4">
              Step {activeStep + 1}
            </Typography>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' }, // 2 columns layout
                gap: 2, // Adjust spacing between items
                pt: 2 
              }}
            >
              {activeStep === 0 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={orderDetails.name}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address line1</label>
                    <input
                      type="text"
                      name="address"
                      value={orderDetails.address}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address line2</label>
                    <input
                      type="text"
                      name="address1"
                      value={orderDetails.address1}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
                  </div>
       
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={orderDetails.email}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={orderDetails.city}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      value={orderDetails.state}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Zipcode</label>
                    <input
                      type="number"
                      name="zipcode"
                      value={orderDetails.zipcode}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                  </div>
                  
    <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                      name="type"
                      value={orderDetails.type}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Type</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Wardrobe">Wardrobe</option>
                      <option value="Living">Living</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expected Delivery Date</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={orderDetails.deliveryDate}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Comments</label>
                    <input
                      type="text"
                      name="comments"
                      value={orderDetails.comments}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.comments ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
                  </div>
                  <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Referred By</label>
      <Combobox
        as="div"
        value={selectedCategory}
        onChange={handleCategoryChange}

      >
        <div className="relative mt-2">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(category) => category?.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          {filteredCategories.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCategories.map((category) => (
                <Combobox.Option
                  key={category.id}
                  value={category}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {category.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>

      {selectedCategory && subOptions.length > 0 && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
          <Combobox
            as="div"
            value={selectedSubOption}
            onChange={setSelectedSubOption}
          >
            <div className="relative mt-2">
              <Combobox.Input
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(subOption) => subOption}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>

              {subOptions.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {subOptions.map((option, index) => (
                    <Combobox.Option
                      key={index}
                      value={option}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <span className="block truncate group-data-[selected]:font-semibold">
                        {option}
                      </span>

                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        </div>
      )}
    {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories}</p>}

    </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                 
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Design</label>
                    <input
                      type="text"
                      name="design"
                      value={orderDetails.design}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
                  </div>
<br/>

    <div>
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Initial Measurement</h2>

      <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
      <input
        type="number"
        name="length"
        value={orderDetails.length}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mt-11">Height (cm)</label>
      <input
        type="number"
        name="height"
        value={orderDetails.height}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Width (cm)</label>
      <input
        type="number"
        name="width"
        value={orderDetails.width}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
    </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Images</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                    {images.length > 0 && (
                      <div className="mt-2">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative inline-block mr-2">
                            <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
                            <button
                              onClick={() => handleImageRemove(index)}
                              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                            >
                              x
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </>
              )}
              {activeStep === 2 && (
                <>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Order Status</label>
                    <select
                      name="orderStatus"
                      value={orderDetails.orderStatus}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select a Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Processed">Processed</option>
                    </select>
                    {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
                  </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Assign To</label>
                    <input
                      type="text"
                      name="createdBy"
                      value={orderDetails.createdBy}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      name="startdate"
                      value={orderDetails.startdate}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.startdate? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expected Completed Date</label>
                    <input
                      type="date"
                      name="enddate"
                      value={orderDetails.enddate}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.enddate? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Comments</label>
                    <input
                      type="text"
                      name="orderStatusComments"
                      value={orderDetails.orderStatusComments}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatusComments? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
                  </div>
                  
                </>
              )}
                            {activeStep === 3 && (
                              <>
               
               <div>
      <label className="block text-sm font-medium text-gray-700 mt-1">Total amount</label>
      <input
        type="number"
        name="totalAmount"
        value={orderDetails.totalAmount}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 mt-1">Advance amount</label>
      
      <input 
        type="number"
        name="advanceAmount"
        value={orderDetails.advanceAmount}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mt-1">installments (In months)</label>
      <input
        type="number"
        name="installments"
        value={orderDetails.installments}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md ${errors.installments ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
    </div>
                  <div>
      <label className="block text-sm font-medium text-gray-700 mt-1">Balance amount</label>
      <input
        type="number"
        name="balanceAmount"
        value={orderDetails.totalAmount-orderDetails.advanceAmount}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md`}
      />
    </div>
    <div>
                    <label className="block text-sm font-medium text-gray-700"> Payments Type</label>
                    <select
                      name="paymentstype"
                      value={orderDetails.paymentstype}
                      onChange={handleChange}
                      className={`mt-1 p-2 w-full border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Type</option>
                      <option value="Cash">Cash</option>
                      <option value="UPI">UPI</option>
                      <option value="Card">Card</option>
                    </select>
                    {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
                  </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mt-1">Installment per month</label>
      <input
        type="number"
        name="installmentPerMonth"
        value={remainder}
        onChange={handleChange}
        className={`mt-1 p-2 w-full border rounded-md`}
      />
    </div>
                  </>
)}

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <button
                color="inherit"
                onClick={handleBack}
                                        className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
                disabled={activeStep === 0}
              >
                          <MdArrowBackIosNew />
                          Back
              </button>
              <Box sx={{ flex: '1 1 auto' }} />
              <button
                variant="contained"
                onClick={handleCancel}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ml-2 mr-4"                ><MdDelete/>
                Cancel
              </button>              <button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
                >

                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                <MdOutlineArrowForwardIos />

              </button>
            </Box>
          </React.Fragment>
        )}
        {showAlert && (
          <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center">
            <span>Order added successfully!</span>
          </div>
        )}
        {submittedDetails && (
          <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
            <p><strong>Name:</strong> {submittedDetails.name}</p>
            <p><strong>Email:</strong> {submittedDetails.email}</p>
            <p><strong>Phone:</strong> {submittedDetails.phone}</p>
            <p><strong>Address:</strong> {submittedDetails.address}</p>
            <p><strong>City:</strong> {submittedDetails.city}</p>
            <p><strong>State:</strong> {submittedDetails.state}</p>
            <p><strong>Zipcode:</strong> {submittedDetails.zipcode}</p>
            <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
            <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
            <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
            <p><strong>Design:</strong> {submittedDetails.design}</p>
            <p><strong>Type:</strong> {submittedDetails.type}</p>
            <p><strong>Source:</strong> {submittedDetails.categories}</p>
            <p><strong>Sub-Source:</strong> {submittedDetails.subOption}</p>
            <p><strong>TotalAmount:</strong> {submittedDetails.totalAmount}</p>
            <p><strong>AdvanceAmount:</strong> {submittedDetails.advanceAmount}</p>
            <p><strong>Comments:</strong> {submittedDetails.comments}</p>
            <p><strong>OrderStatusCommentsComments:</strong> {submittedDetails.orderStatusComments}</p>
            <p><strong>StartDate:</strong> {submittedDetails.startdate}</p>
            <p><strong>Expected Completed Date:</strong> {submittedDetails.enddate}</p>
            <p><strong>Payments Type</strong> {submittedDetails.paymentstype}</p>
            <p><strong>BalanceAmount:</strong> {submittedDetails.totalAmount-submittedDetails.advanceAmount}</p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {submittedDetails.images && submittedDetails.images.map((img, index) => (
                <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
              ))}
            </div>
          </div>
        )}
      </Box>
    </div>
    </>
  );
}

export default AddOrders;
