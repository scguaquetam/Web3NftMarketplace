import React from 'react';
import Home from './views/home';
import { Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import MainLayout from './layouts/main';
function App() {
  let signer = null;
  let provider;

  const connect = async () => {
    if (window.ethereum === null) {
      console.log("Metamask is not installed");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      console.log(signer);
    }
  }
  return (
    <MainLayout>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
