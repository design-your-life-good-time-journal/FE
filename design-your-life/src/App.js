import React from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";
import './App.css';
import AppRouter from './Routing/AppRouter';
import NavBar from './Routing/NavBar';


function App() {
 return (
<div>
  <NavBar />
  <AppRouter/>
  </div>

    );
  }

export default App;