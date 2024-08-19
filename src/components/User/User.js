// import React from 'react';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';

// const people = [
//   // Example data structure
//   { name: 'Jane Smith', title: 'Chennai', email: 'jane.smith@example.com', role: '7702253548' },
//   { name: 'Alice Johnson', title: 'Hyderabad', email: 'alice.johnson@example.com', role: '7702253549' },
//   { name: 'Robert Brown', title: 'Mumbai', email: 'robert.brown@example.com', role: '7702253550' },
//   { name: 'Michael Davis', title: 'Delhi', email: 'michael.davis@example.com', role: '7702253551' },
//   { name: 'Emily Clark', title: 'Kolkata', email: 'emily.clark@example.com', role: '7702253552' },
//   { name: 'David Miller', title: 'Pune', email: 'david.miller@example.com', role: '7702253553' },
//   { name: 'Susan Wilson', title: 'Ahmedabad', email: 'susan.wilson@example.com', role: '7702253554' },
//   { name: 'James Taylor', title: 'Jaipur', email: 'james.taylor@example.com', role: '7702253555' },
//   { name: 'Patricia Martinez', title: 'Lucknow', email: 'patricia.martinez@example.com', role: '7702253556' },
//   // Add more people as needed
// ];

// export default function User() {

//   const handleExportUsersData =  () => {
//     exportToExcel(people, 'Customers');
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           {/* <h1 className="text-base font-semibold leading-6 text-custom-heading">Users</h1> */}
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>

//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//         type="button"
//         className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         onClick={handleExportUsersData}
//       >
//         <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//         Export Users
//       </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >Location   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                   {/* <th
//                     scope="col"
//                     className="relative py-3.5 pl-3 pr-4 sm:pr-0"
//                   >
//                      <span className="sr-only">Edit</span> 
//                   </th> */}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {person.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {person.role}
//                     </td>
//                     {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit <span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import * as XLSX from 'xlsx';
// import { FaTable } from 'react-icons/fa';

// export default function User() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://your-api-endpoint.com/users'); // Replace with your API endpoint
//         setUsers(response.data);
//       } catch (err) {
//         setError('Failed to fetch user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleExportUsersData = () => {
//     exportToExcel(users, 'Customers');
//   };

//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, location, email, and mobileno.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//             type="button"
//             className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             onClick={handleExportUsersData}
//           >
//             <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//             Export Users
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th
//                     scope="col"
//                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Location
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Email
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                   >
//                     Mobile No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {users.map((user) => (
//                   <tr key={user.email}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {user.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.title}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                       {user.role}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaTable, FaEdit, FaTrash } from 'react-icons/fa';
 
const initialPeople = [
  { name: 'Jane Smith', title: 'Chennai', email: 'jane.smith@example.com', role: '7702253548' },
  { name: 'Alice Johnson', title: 'Hyderabad', email: 'alice.johnson@example.com', role: '7702253549' },
  { name: 'Robert Brown', title: 'Mumbai', email: 'robert.brown@example.com', role: '7702253550' },
  { name: 'Michael Davis', title: 'Delhi', email: 'michael.davis@example.com', role: '7702253551' },
  { name: 'Emily Clark', title: 'Kolkata', email: 'emily.clark@example.com', role: '7702253552' },
  { name: 'David Miller', title: 'Pune', email: 'david.miller@example.com', role: '7702253553' },
  { name: 'Susan Wilson', title: 'Ahmedabad', email: 'susan.wilson@example.com', role: '7702253554' },
  { name: 'James Taylor', title: 'Jaipur', email: 'james.taylor@example.com', role: '7702253555' },
  { name: 'Patricia Martinez', title: 'Lucknow', email: 'patricia.martinez@example.com', role: '7702253556' },
];
 
export default function User() {
  const [people, setPeople] = useState(initialPeople);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    role: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
 
  const handleExportUsersData = () => {
    exportToExcel(people, 'Customers');
  };
 
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
 
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, formData]);
    setFormData({
      name: '',
      title: '',
      email: '',
      role: ''
    });
    setIsFormVisible(false); // Hide the form after submission
  };
 
  const handleAddUserClick = () => {
    setIsFormVisible(true); // Show the form when Add Users button is clicked
  };
 
  const handleEditUser = (index) => {
    const userToEdit = people[index];
    setFormData(userToEdit);
    handleDeleteUser(index);
    setIsFormVisible(true); // Show the form when editing
  };
 
  const handleDeleteUser = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };
 
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, location, email, and mobile no.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={handleAddUserClick}
          >
            Add Users
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleExportUsersData}
          >
            <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
            Export Users
          </button>
        </div>
      </div>
     
      {/* Only show the form if isFormVisible is true */}
      {isFormVisible && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  pattern="[A-Za-z\s]+"
                  title="Name should only contain letters and spaces."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                  pattern="[A-Za-z\s]+"
                  title="Location should only contain letters and spaces."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Mobile No
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  required
                  pattern="\d{10}"
                  title="Mobile number should be 10 digits."
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
 
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Mobile No
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button
                        onClick={() => handleEditUser(index)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button
                        onClick={() => handleDeleteUser(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 
 
 
 
 
 
 
 