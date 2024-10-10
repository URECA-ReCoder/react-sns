import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import List from './List';
import App from './App';

export default function RouterList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<List />} />
        <Route path="/chatroom/:chatId" element={<App />} />
        <Route path="*" element={<Navigate to="/list" />} />
      </Routes>
    </div>
  );
}
