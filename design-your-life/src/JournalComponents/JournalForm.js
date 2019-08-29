import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik'; 
import { Button} from 'semantic-ui-react';
import Mood from './Mood';
import * as Yup from 'yup';
import axios from 'axios';


const JournalForm = ({ errors, touched, values, status}) => {
  const [journals, setJournals] = useState([]);

    console.log("this is touched", touched);
    useEffect(() => {
    if (status) {
      setJournals([...setJournals, status]);
    }
  }, [status]);

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
    {journals.map(journal => (
      <div class="ui card">
      <div class="content">
        <div class="header"> Activity:{journal.activity}</div>
        <div class="description">
          <p>{journal.notes}</p>
  
        </div>
      </div>
      
        Mood
      </div>
 
    ))}
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
    
      handleSubmit(values, {setStatus}) {
          console.log(values);
          axios
          .post("<https://reqres.in/api/users/>", values)
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
      }
  
      })(JournalForm);

  export default FormikJournalForm;