import './App.css';
import EmployeeTransportService from './Components/EmployeeTransportService/EmployeeTransportService';
import GenesisSection from './Components/GenesisSection/GenesisSection';
import HeroSection from './Components/HeroSection/HeroSection ';
import Navbar from './Components/NavBar/NavBar';
import ThreeCards from './Components/ThreeCards/ThreeCards';
import TopFeatures from './Components/TopFeatures/TopFeatures';
import Slidebar from './Components/Main/Slidebar'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slidebar/>
      <HeroSection/>
      <ThreeCards/>
      <GenesisSection/>
      <EmployeeTransportService/>
      <TopFeatures/>
      <Footer />
    </div>
  );
}

export default App;
