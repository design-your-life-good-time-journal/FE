import React from 'react';
import {withFormik, Form, Field} from 'formik'; 
import { Input, Button, Label, Icon} from 'semantic-ui-react';
import Mood from './Mood';
import * as Yup from 'yup';


const JournalForm = ({ errors, touched, values}) => {
  
   return (
   <div className="journal-form">
     <h1> Activity Log </h1>
     < Mood/>
    <Form>

      <Field className="activity-box"
            type="text" 
            name="activity" 
            placeholder="            What activity are you doing?"/>
        {touched.activity && errors.activity && (
          <p className="error">{errors.activity}</p>
        )}

        <br></br>
        
      <Field className="reflection-box"
               type='text' 
               name='notes'
              placeholder="      Write Your Thoughts Here" />
        {touched.notes && errors.notes && (
          <p className="errors">{errors.notes}</p>
        )}
      
        <br></br>
        <Button type='submit'>Submit</Button>
    </Form>
   </div>
         );
       }

  const FormikJournalForm = withFormik({
        mapPropsToValues({ activity, notes }) {

          return {
            activity: activity || "",
            notes: notes || ""
                  };
                },
      validationSchema: Yup.object().shape({
        activity: Yup.string().required("Include Activity"),
        notes: Yup.string().required("Please Type A Reflection"),
      }),
      handleSubmit(values) {
          console.log(values);
          //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
        }
      })(JournalForm);

  export default FormikJournalForm;

