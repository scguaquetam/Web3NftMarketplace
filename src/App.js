import React from 'react';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
