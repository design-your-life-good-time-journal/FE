import React from 'react';
import {withFormik, Form, Field} from 'formik'; 
import { Input, Button, Label, Icon} from 'semantic-ui-react';



const JournalForm = ({ errors, touched, values}) => {
  
   return (

    <Form>
      <Field component="select" name="activity"> Activity
        <option>Select Activity</option>
        <option value="work">Work</option>
        <option value="social">Social</option>
        <option value="excercise">Excercise</option>
        <option value="excercise">Meditation</option>

      </Field>
      <br></br>
      <h3> Reflection </h3>
      <input type="body" name="body" placeholder="Thoughts Here" />
      <br></br>
      <Button>Log Reflection</Button>
    </Form>
   );
  }
  const FormikJournalForm = withFormik({
  mapPropsToValues({ activity, body }) {

    return {
      activity: activity || "",
      body: body || ""
    };
  },

handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(JournalForm);

export default FormikJournalForm;

