import JournalForm from './JournalComponents/JournalForm';
import styled from 'styled-components'
import React, { Component } from 'react';
import Button from 'antd/es/button';
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
    <h1> Design Your Life </h1>
      <h3>Journal</h3>

    
  <div>
    
    <Button  shape="circle" size="large" icon="smile" />
    <Button shape="circle" size="large" icon="meh" />
    <Button type= 'danger' shape="circle" size="large" icon="frown" />
   
  </div>,

      <JournalForm/>
    </ WrapperDiv>

    );
  }

export default App;
