import React from 'react';
import JournalForm from './JournalComponents/JournalForm';
import styled from 'styled-components'

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
     <h3>Activity Log</h3>
     <JournalForm/>
     </ WrapperDiv>

  );
}

export default App;
