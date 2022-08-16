import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import './App.css';
import Button from './Button';
import Contact from './Contact';
import Home from './Home';
import LearnMore from './LearnMore';
import Login from './Login';
import Nav from './Nav';
import Service from './Service';

function App() {
  return (
    <div className="App">
      <Nav  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/login' element={<Login />} />
        <Route path='/learn_more' element={<LearnMore />} />
      </Routes>
      
        
    </div>
  );
}

export default App;
