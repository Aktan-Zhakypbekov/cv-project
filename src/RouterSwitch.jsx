import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Homepage from './components/homepage/Homepage';
import Cv from './components/cv/Cv';
import AddCv from './components/addCv/AddCv';
import EditCv from './components/editCv/EditCv';

function RouterSwitch() {
  return (
    <BrowserRouter>
      <div className='main-cont'>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/addCv' element={<AddCv />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/cv/editCv' element={<EditCv />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default RouterSwitch;
