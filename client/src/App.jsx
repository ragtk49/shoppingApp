import React from 'react';
import {Home} from './pages/Home' 
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Payment } from './components/Payment';
import Success from './pages/Success';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:category" element={<ProductList />} />  
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element = {user ? <Navigate to="/" /> : <Register/>} />
        <Route exact path="/login" element = {user ? <Navigate to="/" /> : <Login/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/payment" element={<Payment/>} />
        <Route exact path="/success" element={<Success/>} />
      </Routes>
    </Router>
  )
}

export default App;
