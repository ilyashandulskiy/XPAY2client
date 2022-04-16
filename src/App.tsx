import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router'

function App() {

  return (
    <BrowserRouter basename='xpay/'>
      <Router />
    </BrowserRouter>
  );
}

export default App;
