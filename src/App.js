import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeTransportService from './Components/EmployeeTransportService/EmployeeTransportService';
import GenesisSection from './Components/GenesisSection/GenesisSection';
import HeroSection from './Components/HeroSection/HeroSection ';
import Navbar from './Components/NavBar/NavBar';
import ThreeCards from './Components/ThreeCards/ThreeCards';
import TopFeatures from './Components/TopFeatures/TopFeatures';
import Slidebar from './Components/Main/Slidebar'
import Footer from './Components/Footer/Footer';
// import Login from './Components/Loginpage/Login';
// import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ThreeCards/>
      <Slidebar/>
      <GenesisSection/>
      <EmployeeTransportService/>
      <TopFeatures/>
      <Footer />
      {/* <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;
