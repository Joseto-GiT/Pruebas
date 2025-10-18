//import './App.css';
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/index.jsx';
import Carrito from './pages/Carrito.jsx';
import AdminPanel from './pages/Admin_panel'
import Productos from './pages/public/productos.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Iniciar from './pages/public/iniciar.jsx';


function App() {

  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/iniciar_sesion' element={<Iniciar />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
