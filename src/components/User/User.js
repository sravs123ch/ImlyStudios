import React from 'react';
import * as XLSX from 'xlsx';
import { FaTable } from 'react-icons/fa';

const people = [
  // Example data structure
  { name: 'Jane Smith', title: 'Chennai', email: 'jane.smith@example.com', role: '7702253548' },
  { name: 'Alice Johnson', title: 'Hyderabad', email: 'alice.johnson@example.com', role: '7702253549' },
  { name: 'Robert Brown', title: 'Mumbai', email: 'robert.brown@example.com', role: '7702253550' },
  { name: 'Michael Davis', title: 'Delhi', email: 'michael.davis@example.com', role: '7702253551' },
  { name: 'Emily Clark', title: 'Kolkata', email: 'emily.clark@example.com', role: '7702253552' },
  { name: 'David Miller', title: 'Pune', email: 'david.miller@example.com', role: '7702253553' },
  { name: 'Susan Wilson', title: 'Ahmedabad', email: 'susan.wilson@example.com', role: '7702253554' },
  { name: 'James Taylor', title: 'Jaipur', email: 'james.taylor@example.com', role: '7702253555' },
  { name: 'Patricia Martinez', title: 'Lucknow', email: 'patricia.martinez@example.com', role: '7702253556' },
  // Add more people as needed
];

export default function User() {

  const handleExportUsersData =  () => {
    exportToExcel(people, 'Customers');
  };
  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {/* <h1 className="text-base font-semibold leading-6 text-custom-heading">Users</h1> */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Users</h2>

          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, location, email, and mobileno.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-brown px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleExportUsersData}
      >
        <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
        Export Users
      </button>
        </div>
      </div>
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
Location                  </th>
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
                  {/* <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                     <span className="sr-only">Edit</span> 
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
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
                    {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit <span className="sr-only">, {person.name}</span>
                      </a>
                    </td> */}
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

