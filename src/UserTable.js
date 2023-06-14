import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          console.log(response.data); // Log the response data
      
          const usersData = Object.values(response.data);
          if (usersData.length > 0) {
            setUsers(usersData);
          } else {
            setUsers([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      
  
    fetchData();
  }, []); // Add fetchData to the dependency array
  
  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
