import React, { useState, useEffect } from "react";
import { Form, Field, withFormik} from "formik";
import {Link} from 'react-router-dom';
import * as yup from "yup";
import axios from "axios";
import './Auth.css';
const SignUpForm = ({ errors, touched, values, status }) => {
 const [users, setusers] = useState([]);
   console.log(users);
 useEffect(() => {
   if (status) {
     setusers([...users, status]);
   }
 }, [status]);
 return (
   <div className="login">
     <h1>DESIGN YOUR LIFE</h1>
     <Form>
       <p>SIGN-UP</p>
    {touched.firstname && errors.firstname && <p className="errors">{errors.firstname}</p>}
   <Field className="input" type="text" name="firstname" placeholder="First Name "/>
       {touched.lastname && errors.lastname && <p className="errors">{errors.lastname}</p>}
       <Field className="input" type="password" name="lastname" placeholder="Create a password (must be alphabetical)"/>
   <button type="submit">Submit</button>
     </Form>
   </div>
 );
};
const formikHOC = withFormik({
 mapPropsToValues({  id,firstname,  lastname, date}) {
   return {
     id: id ||  Math.floor((Math.random() * 100) + 1),
     firstname: firstname || "",
     lastname: lastname || "",
     date: date || new Date()
   };
 },
 validationSchema: yup.object().shape({
   id: yup.number().required("Enter UserID"),
   firstname: yup.string().required("Enter first name"),
   lastname: yup.string().required("Enter last name"),
   }),
 handleSubmit(values,  { props, setStatus, resetForm }) {
   axios
     .post("https://vr-overlord-server.herokuapp.com/persons", values)
     .then(res => {
       console.log("handleSubmit: then: res: ", res);
       setStatus(res.data);
       props.history.push('/journal')
       resetForm();
     })
     .catch(err => console.error("handleSubmit: catch: err: ", err));
 }
});
const SignUpFormWithFormik = formikHOC(SignUpForm);
export default SignUpFormWithFormik;