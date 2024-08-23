
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

// Define StyledTableCell and StyledTableRow
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003375', // Dark blue color
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function UserRoleForm() {
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('active');
  const [roleData, setRoleData] = useState([
    { id: '1', name: 'Admin', status: 'Active' },
    { id: '2', name: 'Store User', status: 'Inactive' },
    { id: '3', name: 'Finance', status: 'Active' },
    { id: '4', name: 'Production', status: 'Inactive' },
    { id: '5', name: 'Technical', status: 'Active' },
  ]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role && status) {
      const roleIdMap = {
        admin: '1',
        'store user': '2',
        finance: '3',
        production: '4',
        technical: '5',
      };

      const newRoleId = roleIdMap[role.toLowerCase()] || 'Unknown';
      const newRoleName = role;
      const newStatus = status.charAt(0).toUpperCase() + status.slice(1);

      setRoleData([
        ...roleData,
        {
          id: newRoleId,
          name: newRoleName,
          status: newStatus,
        },
      ]);

      setRole('');
      setStatus('active');
    } else {
      alert('Please fill out all fields before saving.');
    }
  };

  const handleCancel = () => {
    setRole('');
    setStatus('active');
  };

  return (
    <div className="max-w-5xl mx-auto h-auto">
      {/* Form Section */}
      <div className="mt-6 bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 px-2">User Role</h2>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select a role</option>
              <option value="admin">Admin</option>
              <option value="store user">Store User</option>
              <option value="finance">Finance</option>
              <option value="production">Production</option>
              <option value="technical">Technical</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="flex items-center mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === 'active'}
                  onChange={handleStatusChange}
                  className="form-radio"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={handleStatusChange}
                  className="form-radio"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-3 px-8 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-sm font-medium text-white shadow-sm hover:bg-red-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="mt-4 bg-white p-8 rounded-lg shadow-md">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Role ID</StyledTableCell>
                <StyledTableCell>Role Name</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roleData.map((role, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{role.id}</StyledTableCell>
                  <StyledTableCell>{role.name}</StyledTableCell>
                  <StyledTableCell>{role.status}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default UserRoleForm;
