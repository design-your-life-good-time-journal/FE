import JournalForm from './JournalComponents/JournalForm';
import styled from 'styled-components'
import React, { Component, Route } from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";
import './App.css';


const WrapperDiv = styled.div`
    text-align:center;
    border: black;
    width: 100%;
    height: 100%;
    border-bottom: black;
`;

function App() {
 return (
  <WrapperDiv>
      <div className="navbar">
        <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
        <NavLink to="/information" activeClassName="activeNavButton">Information</NavLink>
      />
    
        <h1>Design Your Life</h1>
      </div> 
     <JournalForm/>
   </ WrapperDiv>

    );
  }

export default App;