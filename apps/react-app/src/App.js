import React, {useEffect, useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import styles from './styles.module.css';

function App() {
  const [mainAppData, setMainAppData] = useState( window.microApp.getData());

  useEffect(() => {
    if (window.microApp) {
      const dataListener = (data) => {
        console.log('主应用传的数据', data);
        setMainAppData(data);
      }

      window.microApp.addDataListener(dataListener)
      return () => {
        window.microApp.clearDataListener()
      }
    }
  })

  return (
    <div>
      <p>主应用的数据：{mainAppData ? mainAppData.name : '无'}</p>

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
    </div>
  );
}

export default App;
