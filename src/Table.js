import axios from "axios";
import { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tableRows = users.map((user) => (
    <tr key={user.id}>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.age}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.gender}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            
          
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
