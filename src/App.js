import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Warehouse from './pages/industry/Warehouse';
import Industry from './pages/industry/Index';
import Layout from './components/layout';
import Uildwer from './pages/industry/Uildwer';
import Electricity from './pages/industry/Electricity';
import Products from './pages/industry/Products';
import Factory from './pages/factory/index';
import Login from './pages/Login';



function App() {
  return (
    <>
      <Routes>
          
           <Route path="/" element={<Navigate to="/login" replace />} />
           <Route path="/login" element={<Login />} />

            <Route path="/factory" element={<><Navbar /><Factory /></>} />

        <Route element={<Layout/>}>

           <Route path="/industry" element={<><Navbar/><Industry /></>} >
           <Route path="warehouse" element={<Warehouse />} />
           <Route path="electricity" element={<Electricity />} />
           <Route path="products" element={<Products />} />
           <Route path="uildwer" element={<Uildwer/>} />

           </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;


