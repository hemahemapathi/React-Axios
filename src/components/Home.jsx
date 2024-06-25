// Importing components
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const Home = () => {
  // calling useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // using try catch method for API
    try {
      const response = await axios.get("https://664382d26c6a656587076309.mockapi.io/api/users/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    // Creating cards to display the values 
    <div className="container mr-4">
        <h2 className="title_name">REACT AXIOS TASK</h2>
      
       
            </div>
         
        )}
     
  

export default Home;