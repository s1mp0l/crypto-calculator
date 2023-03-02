import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CipherContainer} from "./components/CipherContainer";
import {Navigation} from "./components/Navigation";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Navigation /> }>
                <Route path='/:cipher' element={ <CipherContainer /> } />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
