// import React from 'react';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import StatusBadge from './Satus';
// import StatusSwitch from './StatusSwitch';
// import { useState } from 'react';
// import FilterBar from './FilterBar';
// import { PlusIcon } from '@heroicons/react/20/solid';
// import { FaChevronRight} from 'react-icons/fa';
// import StatusUpdateDialog from './StatusUpdateDialog';



// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'T-Shirt', price: '₹1000', discount: '10%', size: 'M', stock: 50, image: shirtImage, status: 'Pending' },
//         { id: 2, name: 'Casual Shirt', price: '₹1200', discount: '15%', size: 'L', stock: 30, image: Shirt2, status: 'Pending' },
//         { id: 3, name: 'Formal Shirt', price: '₹1500', discount: '20%', size: 'S', stock: 20, image: Shirt3, status: 'Pending' },
//         { id: 4, name: 'Denim Jacket', price: '₹2500', discount: '25%', size: 'XL', stock: 10, image: Shirt4, status: 'Pending' },
//         { id: 5, name: 'Hoodie', price: '₹2000', discount: '30%', size: 'M', stock: 5, image: Shirt5, status: 'Canceled' },
//         { id: 6, name: 'Polo Shirt', price: '₹800', discount: '35%', size: 'L', stock: 15, image: Shirt6, status: 'Delivered' },
//         { id: 7, name: 'Jeans', price: '₹1800', discount: '40%', size: 'S', stock: 25, image: jeans, status: 'Delivered' },
//         { id: 8, name: 'Sweatshirt', price: '₹1500', discount: '45%', size: 'XL', stock: 35, image: sweatshirt, status: 'Delivered' },
//     ]);
//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const item = { name: 'Product Name', currentStatus: 'Pending' };
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const handleStatusChange = (id, newStatus) => {
//         console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     // const handleStatusChange = (id, newStatus) => {
//     //     console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//     //     setProducts((prevItems) =>
//     //         prevItems.map((item) =>
//     //             item.id === id ? { ...item, status: newStatus } : item
//     //         )
//     //     );
//     // };
    
//     const handleCancel = (id) => {
//         // Update the status to 'Canceled'
//         const newStatus = 'Canceled';
//         console.log(`Canceling order with ID ${id}`);
        
//         // Call the function to update the product status
//         handleStatusChange(id, newStatus);
//     };
    

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//             <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                     <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Orders</h2>
//                 </div>

//             </div>
//             <div className="flex justify-center mb-4">
//       <div className="flex flex-wrap justify-center space-x-2">
//             <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//             </div>
//             </div>
//             <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                         <table className="min-w-full divide-y divide-gray-300">
//                             <thead>
//                                 <tr>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Image
//                                     </th>
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Product Name
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Price
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Size
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Stock
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Status
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Action
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Operation
//                                     </th>

//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200">
//                                 {filteredOrders.map((product) => (
//                                     <tr key={product.name}>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md" />
//                                         </td>
//                                         <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                                             {product.name}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.price}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.size}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.stock}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusBadge status={product.status} />
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusSwitch key={product.id}
//                                                 id={product.id} status={product.status} onStatusChange={handleStatusChange} />
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
//                                             <button
//                                                 type="button"
//                                                 className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${product.status === "Delivered"
//                                                         ? "bg-gray-300 cursor-not-allowed"
//                                                         : product.status === "Canceled"
//                                                             ? "bg-gray-300 cursor-not-allowed"
//                                                             : "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
//                                                     }`}
//                                                 disabled={product.status === "Delivered" || product.status === "Canceled"}
//                                                 key={product.id}
//                                                 id={product.id}
//                                                 onClick={() => handleCancel(product.id)}
//                                             >
//                                                 {product.status === "Delivered" ? 'Already Delivered' : product.status === "Canceled" ? 'Canceled' : 'Cancel Order'}
//                                                 {/* <XMarkIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" /> */}
//                                             </button>
                                          
                                           
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-1 text-sm text-gray-500">
//                                         <button
//                                             type="button"
//                                             className="rounded-full  bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                             disabled={product.status === "Canceled"}
//                                             onClick={() => setIsDialogOpen(true)}>
//                                             <FaChevronRight aria-hidden="true" className="h-3 w-3" />
//                                           </button>
//                                         </td>


//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <StatusUpdateDialog
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         item={item}
//       />
//         </div>
//     );
// }


import React from 'react';
import shirtImage from "../../assests/Images/Tshrit2.jpg";
import Shirt2 from "../../assests/Images/Tshrit3.png";
import Shirt3 from "../../assests/Images/similar product.jpg";
import Shirt4 from "../../assests/Images/denimjacket.png";
import Shirt5 from "../../assests/Images/Hoodie.png";
import Shirt6 from "../../assests/Images/polo.png";
import jeans from "../../assests/Images/jeans.png";
import sweatshirt from '../../assests/Images/Sweatshirt.png';
import { FaEdit, FaTrash } from 'react-icons/fa';
import StatusBadge from './Satus';
import StatusSwitch from './StatusSwitch';
import { useState } from 'react';
import FilterBar from './FilterBar';
import { PlusIcon } from '@heroicons/react/20/solid';
import { FaChevronRight} from 'react-icons/fa';
import StatusUpdateDialog from './StatusUpdateDialog';



export default function Orders() {
    const [products, setProducts] = useState([
        { id: 1, name: '1000252',productName:"Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50000, image: shirtImage, status: 'Pending' },
        { id: 2, name: '1000251', productName:"Casino",price: '₹1200', discount: '15%', size: 'L', stock: 32000, image: Shirt2, status: 'Pending' },
        { id: 3, name: '1000249', productName:"ACRILIA",price: '₹1500', discount: '20%', size: 'S', stock: 23000, image: Shirt3, status: 'Pending' },
        { id: 4, name: '1000248',productName:"ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30000, image: Shirt4, status: 'Pending' },
        { id: 5, name: '1000244',productName:"LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: Shirt5, status: 'Canceled' },
        { id: 6, name: '1000241', productName:"Milano",price: '₹800', discount: '35%', size: 'L', stock: 0, image: Shirt6, status: 'Dispatched' },
        { id: 7, name: '1000238', productName:"Lema",price: '₹1800', discount: '40%', size: 'S', stock: 0, image: jeans, status: 'Dispatched' },
        { id: 8, name: '1000231', productName:"Elina",price: '₹1500', discount: '45%', size: 'XL', stock: 0, image: sweatshirt, status: 'Dispatched' },
    ]);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const item = { name: 'Product Name', currentStatus: 'Pending' };
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleStatusChange = (id, newStatus) => {
        console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
        setProducts((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    };

    // const handleStatusChange = (id, newStatus) => {
    //     console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
    //     setProducts((prevItems) =>
    //         prevItems.map((item) =>
    //             item.id === id ? { ...item, status: newStatus } : item
    //         )
    //     );
    // };
    
    const handleCancel = (id) => {
        // Update the status to 'Canceled'
        const newStatus = 'Canceled';
        console.log(`Canceling order with ID ${id}`);
        
        // Call the function to update the product status
        handleStatusChange(id, newStatus);
    };
    

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Orders</h2>
                </div>

            </div>
            <div className="flex justify-center mb-4">
      <div className="flex flex-wrap justify-center space-x-2">
            <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
            </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Image
                                    </th> */}
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Order Id
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Price
                                    </th>
                                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Size
                                    </th> */}
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Payment Balance
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Action
                                    </th> */}
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Operation
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredOrders.map((product) => (
                                    <tr key={product.name}>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md" />
                                        </td> */}
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.productName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.price}
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.size}
                                        </td> */}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.stock}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <StatusBadge status={product.status} />
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <StatusSwitch key={product.id}
                                                id={product.id} status={product.status} onStatusChange={handleStatusChange} />
                                        </td> */}
                                        <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
                                            <button
                                                type="button"
                                                className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${product.status === "Dispatched"
                                                        ? "bg-gray-300 cursor-not-allowed"
                                                        : product.status === "Canceled"
                                                            ? "bg-gray-300 cursor-not-allowed"
                                                            : "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
                                                    }`}
                                                disabled={product.status === "Dispatched" || product.status === "Canceled"}
                                                key={product.id}
                                                id={product.id}
                                                onClick={() => handleCancel(product.id)}
                                            >
                                                {product.status === "Dispatched" ? 'Already Dispatched' : product.status === "Canceled" ? 'Canceled' : 'Cancel Order'}
                                                {/* <XMarkIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" /> */}
                                            </button>
                                          
                                           
                                        </td>
                                        <td className="whitespace-nowrap px-1 py-1 text-sm text-gray-500">
                                        {/* <button
                                            type="button"
                                            className="rounded-full  bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            disabled={product.status === "Canceled"}
                                            onClick={() => setIsDialogOpen(true)}>
                                            <FaChevronRight aria-hidden="true" className="h-3 w-3" />
                                          </button> */}
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <StatusUpdateDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        item={item}
      />
        </div>
    );
}

