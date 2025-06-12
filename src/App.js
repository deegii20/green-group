import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Warehouse from './pages/industry/Warehouse';
import Industry from './pages/industry/Index';
import Factory from './pages/industry/Factory';
import Electricity from './pages/industry/Electricity';
import Products from './pages/industry/Products';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/industry" element={<Industry />}>
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="factory" element={<Factory />} />
          <Route path="electricity" element={<Electricity />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

