import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Homepage from './components/homepage/Homepage';
import ShowCv from './components/showCv/ShowCv';
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
          <Route path='/showCv/:id' element={<ShowCv />} />
          <Route path='/showCv/:id/editCv/:id' element={<EditCv />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default RouterSwitch;
