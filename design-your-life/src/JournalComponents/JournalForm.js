import React from 'react';
import {Formik, Form, Field} from 'formik'; 
import { useState } from "react";
import { Input, Button, Label, Icon} from 'semantic-ui-react';

function JournalForm() {
   return (

<div className="Mood">
  <Button class="ui positive basic button">Content</Button>
  <Button class="ui yellow basic button">Indifferent</Button>
  <Button class="ui negative basic button">Dissatisfied</Button>


<div className="Form">
  <Form>
    <Label> Activity:<Input type="text"  /></Label>
    <textarea name="body" placeholder="Write Your Thoughts Here"/>
  </Form>
</div>

<div className='SubmitButton'>
  <Button>Log Reflection</Button>
</div>

</div>
  )};



export default JournalForm;
