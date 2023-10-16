import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ToastProvider from './contextApi/ToastProvider';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/viewProduct/:id' element={<ViewProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
