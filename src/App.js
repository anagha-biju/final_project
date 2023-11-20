import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './components/pages/Guidelines';
// import Products from './components/pages/Help';
import LoginSignup from './components/pages/Signup';
import List from './components/pages/List';
import Hotel from './components/pages/Hotel';
import AdminLogin from './components/pages/Adminportal/AdminLogin';
import AddHotel from './components/pages/Adminportal/AdminAddHotel';
import Guidelines from './components/pages/Guidelines/Guidelines';
import AdminOptions from './components/pages/Adminportal/AdminOptions';
import DeleteHotel from './components/pages/Adminportal/AdminDelete';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/hotels'  element={<List/>} />
          {/* <Route path='/services' element={<List/>} /> */}
          <Route path='/hotels/:id' element={<Hotel/>} />
          <Route path='/sign-up' element={<LoginSignup/>} />
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/add-hotel-ADMIN' element={<AddHotel/>} />
          <Route path='/guidelines' element={<Guidelines/>} />
          <Route path='/admin-options' element={<AdminOptions/>} />
          <Route path='/delete-hotel-ADMIN' element={<DeleteHotel/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;