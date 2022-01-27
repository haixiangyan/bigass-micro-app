import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReactMicroApp from "./pages/ReactMicroApp";
import styles from './styles.module.css';
import Vue3MicroApp from "./pages/Vue3MicroApp";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header className={styles.header}>
          <Link to="/">基座 Home</Link>
          <Link to="/about">基座 About</Link>
          <Link to="/react-app">React 子应用</Link>
          <Link to="/vue3-app">Vue3 子应用</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/react-app' element={<ReactMicroApp/>}/>
          <Route path='/vue3-app' element={<Vue3MicroApp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
