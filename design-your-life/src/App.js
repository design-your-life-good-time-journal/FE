import JournalForm from './JournalComponents/JournalForm';
import styled from 'styled-components'
import React, { Component } from 'react';
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
    <h1>  </h1>
      
      <JournalForm/>
    </ WrapperDiv>

    );
  }

export default App;