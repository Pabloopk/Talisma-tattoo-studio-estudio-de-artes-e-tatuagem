import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sobre from './page/Sobre';
// import Hero from './components/Hero'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sobre',
    element: <Sobre />

  },
  // {
  //   path: '/Hero',
  //   element: <Hero />

  // }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
