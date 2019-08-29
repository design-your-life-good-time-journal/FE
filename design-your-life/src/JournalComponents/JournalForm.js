import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik'; 
import { Button, Icon } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { render } from "react-dom";



const JournalForm = ({ errors, touched, values, status}) => {
  const [journals, setJournals] = useState([]);

    console.log("working", touched);

      useEffect(() => {
        if (status) {
      setJournals([...journals, status,values]);
    }
  }, [status]);

   
  return (
   <div className="journal-form">
     <h1> Activity Log </h1>
     
    <Form>
      <Field className="activity-box" type="text" name="activity" placeholder="                    What are you doing?"/>
        {touched.activity && errors.activity && (<p className="error">{errors.activity}</p>)}
        <br></br>
        
      <Field className="reflection-box" type='text' name='notes'placeholder="      Write Your Thoughts Here" />
        {touched.notes && errors.notes && (<p className="errors">{errors.notes}</p> )}
         <br></br>
         <h2>Mood:</h2>
      
    
      
       <label className="checkbox-container">
      <Field  type="checkbox" name="happy" checked={values.happy}/>
      <Icon>
      <i className="fas fa-laugh-beam"></i>
      </Icon>

      {touched.happy && errors.happy && (<p className="errors">{errors.happy}</p> )}
      <Field  type="checkbox" name="meh"   checked={values.meh}  />
      <Field  type="checkbox" name="sad"   checked={values.sad}  />
       </label>
      
        <Button type='submit'>Submit</Button>
    </Form>

   </div>
         );
       }

  const FormikJournalForm = withFormik({
        mapPropsToValues({ activity, notes,happy, meh, sad }) {

          return {
            activity: activity || "",
            notes: notes || "",
            happy: happy || false,
             meh: meh || false,
            sad: sad  || false,
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
          .catch(err => console.log(err.response));
      }
  
      })(JournalForm);

  export default FormikJournalForm;