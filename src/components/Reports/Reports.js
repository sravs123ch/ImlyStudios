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

//   const [submittedOrders, setSubmittedOrders] = useState([]);
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

//     // Add the current order to the list of submitted orders
//     setSubmittedOrders([...submittedOrders, orderDetails]);
//     setErrors({});
//     setShowAlert(true);

//     // Clear the form
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
//         {/* Form Steps here */}
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

//       {/* Report Section */}
//       <div className="mt-10">
//         <h3 className="text-xl font-bold text-gray-700 mb-4">Submitted Orders Report</h3>
//         {submittedOrders.length === 0 ? (
//           <p className="text-gray-500">No orders submitted yet.</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Order Status</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Delivery Date</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phone</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Address</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created By</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Design</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedOrders.map((order, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.name}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.orderStatus}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.email}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.deliveryDate}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.phone}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.address}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.createdBy}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.design}</td>
//                   <td className="px-4 py-2 text-sm text-gray-600">{order.type}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddOrders;


import React, { useState } from 'react';
import FormWizard from 'react-form-wizard-component';
import 'react-form-wizard-component/dist/style.css';
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

  const [submittedOrders, setSubmittedOrders] = useState([]);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [view, setView] = useState('form'); // 'form' or 'report'

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

    // Add the current order to the list of submitted orders
    setSubmittedOrders([...submittedOrders, orderDetails]);
    setErrors({});
    setShowAlert(true);

    // Clear the form
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

  const handleComplete = () => {
    handleSubmit();
    console.log("Form completed!");
  };

  const tabChanged = ({ prevIndex, nextIndex }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <div className="max-w-6xl ml-80 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setView('form')}
          className={`px-4 py-2 rounded-md ${view === 'form' ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}
        >
          Form
        </button>
        <button
          onClick={() => setView('report')}
          className={`px-4 py-2 rounded-md ${view === 'report' ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}
        >
          Report
        </button>
      </div>

      {view === 'form' && (
        <>
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

          {/* Form Wizard */}
          <FormWizard inlineStep={true} onComplete={handleComplete} onTabChange={tabChanged}>
            {/* Form Steps here */}
            <FormWizard.TabContent title="Customer Details" icon="ti-user">
              <div className="grid grid-cols-2 gap-6">
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
              </div>
            </FormWizard.TabContent>

            <FormWizard.TabContent title="Order Details" icon="ti-settings">
              <div className="grid grid-cols-2 gap-6">
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
            </FormWizard.TabContent>

            <FormWizard.TabContent title="Product Type" icon="ti-check">
              <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  name="type"
                  value={orderDetails.type}
                  onChange={handleChange}
                  className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
                >
                  <option value="Select a type">Select a Type</option>
                  <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
                </select>
                {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
              </div>
            </FormWizard.TabContent>
          </FormWizard>
        </>
      )}

      {view === 'report' && (
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Submitted Orders Report</h3>
          {submittedOrders.length === 0 ? (
            <p className="text-gray-500">No orders submitted yet.</p>
          ) : (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Order Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Delivery Date</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phone</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Address</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created By</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Design</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Type</th>
                </tr>
              </thead>
              <tbody>
                {submittedOrders.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 text-sm text-gray-600">{order.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.orderStatus}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.deliveryDate}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.phone}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.address}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.createdBy}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.design}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{order.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default AddOrders;
