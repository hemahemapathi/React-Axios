// importing Components
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Create from './components/Create';
import Footer from './components/Footer';

const App = () => {
  // setting useState
  const [userId, setUserId] = useState(0);

  return (
    // Using Browser Router
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users setUserId={setUserId} />} />
          <Route path="/edit/:id" element={<Edit userId={userId} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
