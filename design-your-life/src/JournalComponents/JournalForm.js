import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik'; 
import { Card, Icon, Button} from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import { render } from "react-dom";



const JournalForm = ({ errors, touched, values, status}) => {
  const [journals, setJournals] = useState([]);
  {journals.map(journal => (
  
    <Card
      header= {journal.activity}
      meta={journal.mood}
      description= {journal.notes} 
    />
  ))}
    console.log("working", touched);

      useEffect(() => {
        if (status) {
      setJournals([...journals, status,values]);
    }
  }, [])
 

   
return (
  <div className="journal-form">
   <h1> Activity Log </h1>
    <Form>
      <Field className="activity-box" type="text" name="activity" placeholder="                    What are you doing?"/>
        {touched.activity && errors.activity && (<p className="error">{errors.activity}</p>)}
        <br></br>
      <Field component="textarea" className="reflection-box" type='text' name='notes'placeholder="      Write Your Thoughts Here" />
        {touched.notes && errors.notes && (<p className="errors">{errors.notes}</p> )}
         <br></br>
         <h2>Current Mood:</h2>

         
        <Field component="select" className="mood-select" name="mood">
          <option>Select a Mood</option>
          <option value="happy">Happy</option>
          <option value="meh">Sad</option>
          <option value="unhappy">Energized</option>
          <option value="meh">Meh</option>
          <option value="unhappy">Fufilled</option>
        </Field>
     <Button type='submit'>Submit</Button>
    </Form>

</div>
);
};

  const FormikJournalForm = withFormik({
        mapPropsToValues({ activity, notes, mood}) {

          return {
            activity: activity || "",
            notes: notes || "",
            mood: mood ||""
                  };
                },
      validationSchema: Yup.object().shape({
        activity: Yup.string().required("Include Activity!"),
        notes: Yup.string().required("Please Type A Reflection!")
      }),
    
      handleSubmit(values, {setStatus}) {
          console.log(values);
          axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
           setStatus(res.data);
          })
          .catch(err => console.log(err.response))
      }, 
    
      })(JournalForm);

  export default FormikJournalForm;