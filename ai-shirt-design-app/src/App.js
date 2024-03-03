import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import Designs from './pages/Designs';
import Orders from './pages/Orders';
import Design from './pages/Design'
import Cart from './pages/Cart'
import Addresses from './pages/Addresses';
import Products from './pages/Products';


function App() {

  
  return (
    
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/profile/designs" element={<Designs />}/>
              <Route path="/profile/orders" element={<Orders />}/>
              <Route path="/profile/addresses" element={<Addresses />}/>
              <Route path="/design" element={<Design/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/products" element={<Products/>}/>
            </Routes>
          </Router>
        
      </div>
  );
}

export default App;
