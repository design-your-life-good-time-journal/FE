import React from 'react';
import {Route} from 'react-router-dom';
import JournalForm from '../JournalComponents/JournalForm';
import SignupForm from '../Authentication/SignupForm';
import LoginForm from '../Authentication/LoginForm';


export default function AppRouter() {
    
    return (
    <div>
        <Route exact path='/' component={LoginForm} />
        <Route path='/journal' component={JournalForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
    </div>
    )
  }