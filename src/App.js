import './App.css';
import Bottombar from './components/footer/Bottombar';
import NavbarBox from './components/header/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBannerBar from './components/header/Topbar';
import Home from './components/Home';
import ProductDetail from './components/Productdetail';
import More from './components/More';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => { setIsSidebarOpen(true) };

  const closeSidebar = () => { setIsSidebarOpen(false) };

  return (
    <Router>
      <TopBannerBar />
      <NavbarBox onToggleSidebar={openSidebar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/more' element={<More />} />
      </Routes>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Footer />
      <Bottombar />

    </Router>
  );
}

export default App;
