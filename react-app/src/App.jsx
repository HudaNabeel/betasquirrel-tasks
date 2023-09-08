import React from 'react'

import  './App.css';
import AppNavbar from './components/AppNavbar';
import Sidebar from './components/Sidebar';
import { RouterProvider} from "react-router-dom";
import router from './router';

function App() {
  return (
    <>
    
   { /*<AppNavbar />
    <Sidebar /> */ }
    <RouterProvider router={router} />
    
    </>
  );
}

export default App;
