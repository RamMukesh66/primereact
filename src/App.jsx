import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import SecondComponent from './Secondary';
import FormValidation from './FormValidations';
import TableComponent from './Table';
import Steppers from './Stepper';
import Newapp from './Newcomponents';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div style={{marginTop:'2rem',padding:'2rem'}}>
            <div className='mainPanelDiv'>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/secondary" element={<SecondComponent />} />
                    <Route path="/formvalidation" element={<FormValidation />} />
                    <Route path="/table" element={<TableComponent />} />
                    <Route path="/stepper" element={<Steppers />} />
                    <Route path="/new" element={<Newapp />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;