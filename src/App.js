import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Nav from './component/Nav';
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom'

function App() {
  return(
    <div className="App">
    <Nav/>
    </div>
  )
  

}

export default App;
