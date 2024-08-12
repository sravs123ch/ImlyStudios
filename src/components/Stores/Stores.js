import React from 'react';
import * as XLSX from 'xlsx';
import { FaTable } from 'react-icons/fa';

const people = [
  // Example data structure
  { name: 'Anil ', title: 'No.72 Jayanagar 6th block, 23rd Cross Rd, Yediyur, Bengaluru, Karnataka 560070', email: 'hello@imlystudio.com', role: '+91 9606032020' },
  { name: 'Peter ', title: 'ground, 10/1, KV Jairam Rd, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064', email: 'hello@imlystudio.com', role: '+91 9606032021' },
  { name: 'Arief ', title: '208, 2nd Floor, Kedia Arcade, 92, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001', email: 'hello@imlystudio.com', role: '+91 9606032022' },
  { name: 'Ravi ', title: '1145, First Floor, Club Road 22nd Cross Rd, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102', email: 'hello@imlystudio.com', role: '+91 9606032023' },
  { name: 'Ram', title: '519, Chinmaya Mission Hospital Rd, 12th Main Road, Indiranagar, Indira Nagar 1st Stage,Indiranagar, Bengaluru, Karnataka 560038', email: 'hello@imlystudio.com', role: '+91 9606032023' },
 
  // Add more people as needed
];

export default function Stores() {

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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-custom-heading">Stores</h2>

          <p className="mt-2 text-sm text-gray-700">
            A list of all the Stores in our account including their Managername, location, email, and mobileno.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-brown px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-custom-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleExportUsersData}
      >
        <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
        Export Stores Details
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
                  Store Manager  Name
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
