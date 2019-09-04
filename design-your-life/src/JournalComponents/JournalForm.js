import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik'; 
import * as Yup from 'yup';
import axios from 'axios';




  const JournalForm = ({ errors, touched, values, status}) => {
    const [journals, setJournals] = useState([]);
      console.log("working", touched);

        useEffect(() => {
          if (status) {
        setJournals([...journals, status]);
      }
    }, [status]);
 

   
return (
  <div className="journal-form">
   <h1> Activity Log </h1>
    <Form>
      <Field className="activity" type="text" name="activity" placeholder="                    What are you doing?"/>
        {touched.activity && errors.activity && (<p className="error">{errors.activity}</p>)}
        <br></br>
      <Field className="reflection" component="textarea" type='text' name='notes' placeholder="                 Write Your Thoughts Here" />
        {touched.notes && errors.notes && (<p className="errors">{errors.notes}</p> )}
       

         <h2>Current Mood:</h2>
      <Field component="select" className="mood-select" name="mood">
          <option>Select a Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Annoyed">Annoyed</option>
          <option value="Meh">Meh</option>
          <option value="Fufilled">Fufilled</option>
      </Field>
     <button type='submit'>Submit</button>
    </Form>
    
    {journals.map(journal => (
        <div className='entry' key={journal.id}>
          <h2 className='entry-header'>{journal.activity}</h2>
          <h3> {journal.mood}</h3>
          <p>{journal.notes}</p>
        </div>
    ))}
</div>
);
};

  const FormikJournalForm = withFormik({
        mapPropsToValues({ activity, notes, mood }) {

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
      
          axios.post("https://reqres.in/api/users/", values)
               .then(res => {setStatus(res.data); })
               .catch(err => console.log(err.response));
    
      }
    })(JournalForm);

  export default FormikJournalForm;