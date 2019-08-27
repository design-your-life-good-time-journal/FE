import React from 'react';
import {Formik, Form, Field} from 'formik'; 
import { useState } from "react";
import { Input, Button, Label, Icon} from 'semantic-ui-react';






function JournalForm() {
  
   return (
  <div className="Form">
    <Form>
      <Label> Activity:<Input type="text" placeholder="Activity"/></Label>
      <textarea name="body" placeholder="Write Your Thoughts Here"/>
    </Form>
  

  <div className='SubmitButton'>
    <Button>Log Reflection</Button>
   </div>
  </div>
  )};



export default JournalForm;
