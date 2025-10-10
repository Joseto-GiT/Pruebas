import './App.css';
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/index.jsx';
import Carrito from './pages/Carrito.jsx';
import AdminPanel from './pages/Admin_panel'

function App() {

  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
