import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Navbar from './Navbar'
import { AuthContextProvider } from './auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    {/*  */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </>
);
