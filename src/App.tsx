import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './router'; 

function App() {
  return (
    <RecoilRoot>
      <AppRouter /> 
    </RecoilRoot>
  );
}

export default App;
