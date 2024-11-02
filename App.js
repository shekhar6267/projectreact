// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Internship/Navbar';
import Weather from './Internship/Weather/Weatherapp';
import News from './Internship/News/Newsapp';
import FullCalendar from './Internship/FullCalendar/FullCalendar'; 
import Employee from './Internship/Employee/Employeeapp';
import Footer from './Internship/Footer';
import NotFound from './Internship/notFound/NotFound';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/Weather" element={<Weather />} />
          <Route path="/News" element={<News />} />
          <Route path="/FullCalendar" element={<FullCalendar />} /> 
          <Route path="/Employee" element={<Employee/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
