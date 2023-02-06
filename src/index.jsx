import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import pathRoute from './config/routing/pathRouting.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {pathRoute.map((routep, index) => 
        <Route key={index + routep.path} path={routep.path} element={routep.view}/>
      )}
    </Routes>

  </BrowserRouter>
);