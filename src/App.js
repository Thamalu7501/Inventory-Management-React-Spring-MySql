import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login'
import React from 'react'
function App() {
  return (
    <div className="App">
     <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      </BrowserRouter>
     </React.Fragment>
    </div>
  );
}

export default App;
