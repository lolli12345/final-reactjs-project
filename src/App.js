import React  from 'react';
import Header from './Header/Header'
import './App.css'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Product from './Product/Product';
import Account from './Account/Account'

function App() {

  

  return (
    <div className='App'>

      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/account" element={<Account />} />
          </Routes>
          </BrowserRouter >
    </div>
  );
}

export default App;
