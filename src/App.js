import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuList from "./components/MenuList";
import Login from './components/Login';
import Home from "./components/Home";
import Cart from './components/Cart';
import ProductDetail from './components/Productdetail';
import Menu from './components/Menu';
import Checkout from './components/checkout';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  
  return <>
  <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/menulist" element={<MenuList/>}  />
    <Route path="/login" element={<Login/>}  />
    <Route path="/cart" element={<Cart/>}  />
    <Route path="/menu/:id" element={<ProductDetail/>}  />
    <Route path="/menu" element={<Menu/>}  />
      
      <Route path="/checkout" element={<Checkout/>}  />
    
     </Routes>
      <Footer/>    
  </Router>
  </>
}
export default App;


