import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import styles from './styles.module.css';

function App() {
  return (
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
      <div>
        <header className={styles.header}>
          <Link to="/">react-app Home</Link>
          <Link to="/about">react-app About</Link>
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
