import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FolderProvider } from './context/FolderProvider';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FolderProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </FolderProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);