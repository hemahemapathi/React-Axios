// importing components
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

//  calling useStates
const Users = ({ setUserId }) => {
  const [users, setUsers] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    // using try catch method
    try {
      const response = await axios.get(
        "https://664382d26c6a656587076309.mockapi.io/api/users/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // function for handling edit
  const handleEdit = (id) => {
    setUserId(id);
    navigate(`/edit/${id}`);
  };

  // function for handling delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://664382d26c6a656587076309.mockapi.io/api/users/users/${id}`
      );
      setDeleteData(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    // displaying data in a table format
    <div className="container-fluid mt-5"> 
      <h1 className="U_title">User Details</h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="t_col">
              S.NO
              </th>
              <th scope="col" className="t_col">
                NAME
              </th>
              <th scope="col" className="t_col">
                USERNAME
              </th>
              <th scope="col" className="t_col">
                Email ID
              </th>
              <th scope="col" className="t_col">
                ADDRESS
              </th>
              <th scope="col" className="t_col">
                PHONE
              </th>
              <th scope="col" className="t_col">
                WEBSITE
              </th>
              <th scope="col" className="t_col">
                COMPANY
              </th>
              <th scope="col" className="t_col">
                EDIT
              </th>
              <th scope="col" className="t_col">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td className="t_data">{user.name}</td>
                  <td>{user.username}</td>
                  <td className="t_data">{user.email}</td>
                  <td>
                    {user.address
                      ? `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
                      : "N/A"}
                  </td>
                  <td className="t_data">{user.phone}</td>
                  <td>{user.website}</td>
                  <td className="t_data">
                    {user.company ? user.company.name : "N/A"}
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(user.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/create")}
        type="button"
        className="btn btn-success btn-lg"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Users;