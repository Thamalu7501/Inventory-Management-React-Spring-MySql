import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Forgotpass from './pages/forgotpass';
import Additem from './pages/additem';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgotpass" element={<Forgotpass />} />
        <Route path="additem" element={<Additem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;