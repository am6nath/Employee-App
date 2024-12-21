import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import View from './components/View';
import Add from './components/Add';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/A" element={<Add />} />
        <Route path="/V" element={<View />} />
      </Routes>
      
    </>
  );
}
export default App;