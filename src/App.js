import './css/App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {Home} from './routes/Home';
import {About} from './routes/About';
import {Browse} from './routes/Browse/Browse.js';
import {Tank} from './routes/TankSize/Tank.js';
import {Compatibility} from './routes/Compatibility';
import {FishPage} from './routes/FishPage';
import FavList from './routes/FavList';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App"/>
      <Routes>
        <Route exact path="/compatibility" element={<Compatibility/>}></Route>
        <Route exact path="/tank" element={<Tank/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/browse" element={<Browse/>}></Route>
        <Route exact path="/fish" element={<FishPage/>}></Route>
        <Route exact path="/favlist" element={<FavList/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
