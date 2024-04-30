import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/Auth';
import { CartProvider } from './contexts/Cart.jsx';
import { SearchProvider } from './contexts/Search.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <SearchProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>,
)
