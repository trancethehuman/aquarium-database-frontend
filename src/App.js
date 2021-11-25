import './css/App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {Home} from './routes/Home';
import {About} from './routes/About';
import {Browse} from './routes/Browse/Browse';
import {Tank} from './routes/Tank';
import {Compatibility} from './routes/Compatibility';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App"/>
      <Routes>
        <Route exact path="/compatibility" element={<Compatibility/>}></Route>
        <Route exact path="/tank" element={<Tank/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/browse" element={<Browse/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
