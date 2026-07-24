import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.css'; // Importa los estilos globales

import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CalmaPage from './pages/CalmaPage.jsx';
import CienciaPage from './pages/CienciaPage.jsx';
import SosPage from './pages/SosPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import ProgresoPage from './pages/ProgresoPage.jsx';
import DescompresionPage from './pages/DescompresionPage.jsx';
import MisionesPage from './pages/MisionesPage.jsx';
import SeguraPage from './pages/SeguraPage.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/calma", element: <CalmaPage /> },
      { path: "/ciencia", element: <CienciaPage /> },
      { path: "/sos", element: <SosPage /> },
      { path: "/feedback", element: <FeedbackPage /> },
      { path: "/progreso", element: <ProgresoPage /> },
      { path: "/descompresion", element: <DescompresionPage /> },
      { path: "/misiones", element: <MisionesPage /> },
      { path: "/segura", element: <SeguraPage /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provee el router a la aplicación */}
  </React.StrictMode>,
);