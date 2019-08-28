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
      <h2>Journal Entry:</h2>
  <div>
    <Button  shape="circle" size="large" icon="smile" theme="twoTone" twoToneColor="#52c41a" />
    <Button shape="circle" size="large" icon="meh" />
    <Button type= 'danger' shape="circle" size="large" icon="frown" />
  </div>,
      <h3>Activity</h3>
      <JournalForm/>
    </ WrapperDiv>

    );
  }

export default App;
