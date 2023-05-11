import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Components/Greetings';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </>
);

export default App;
