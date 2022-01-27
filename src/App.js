import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">基座 Home</Link>
          <Link to="/about">基座 About</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
