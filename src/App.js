import React from 'react'
import Navbar from './component/Navbar';
import Sidebar from  './component/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  return (
    <div>

      <Navbar />
      {/* <Sidebar /> */}

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here like product, cart etc. */}
      </Routes>
    </Router>
  
     


    </div>
  )
}

export default App