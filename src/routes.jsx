import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Repositorio from './pages/Repositorio/Repositorio';

export function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/repositorio/:repositorio" element={<Repositorio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
