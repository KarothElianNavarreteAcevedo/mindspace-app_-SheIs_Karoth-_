import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.css'; // Importa los estilos globales

import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CalmaPage from './pages/CalmaPage.jsx';
// Importa las otras páginas aquí a medida que las crees
import CienciaPage from './pages/CienciaPage.jsx';
import SosPage from './pages/SosPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />, // El Layout envuelve todas las páginas
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/calma", element: <CalmaPage /> },
      { path: "/ciencia", element: <CienciaPage /> },
      { path: "/sos", element: <SosPage /> },
      { path: "/feedback", element: <FeedbackPage /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provee el router a la aplicación */}
  </React.StrictMode>,
);