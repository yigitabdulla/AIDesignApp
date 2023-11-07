import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ParticlesContainer } from './components/Background';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Designs from './pages/Designs';
import Orders from './pages/Orders';
import Design from './pages/Design'

function App() {
  return (
    <div className="App">
      <ParticlesContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/profile/designs" element={<Designs />}/>
          <Route path="/profile/orders" element={<Orders />}/>
          <Route path="/design" element={<Design />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
