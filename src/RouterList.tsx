import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './List';
import App from './App';

export default function RouterList() {
  return (
    <div>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/chatroom" element={<App />} />
      </Routes>
    </div>
  );
}
