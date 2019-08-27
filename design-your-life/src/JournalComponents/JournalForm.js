import React from 'react';
import {Formik, Form, Field} from 'formik'; 
import { useState } from "react";
import { Input, Button, Label, Icon} from 'semantic-ui-react';
import styled from 'styled-components'


// const Button = styled.button`
// padding:6px , 10px;
// margin: 5px;
// border: none;
// border-radius: 3px;
// color: white;
// ${props => (props.type === 'primary') ? `background: #2196f3` : null}




function JournalForm() {
   return (

<div className="Mood">
  <Button class="ui positive basic button">  Content </Button>
  <Button class="ui yellow basic button">Indifferent</Button>
  <Button class="ui negative basic button">Dissatisfied</Button>


<div className="Form">
  <Form>
    <Label> Activity:<Input type="text" placeholder="Activity"/></Label>
    <textarea name="body" placeholder="Write Your Thoughts Here"/>
  </Form>
</div>

<div className='SubmitButton'>
  <Button>Log Reflection</Button>

</div>

</div>
  )};



export default JournalForm;
