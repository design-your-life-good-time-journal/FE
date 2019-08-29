import React from 'react';
import 'antd/dist/antd.css';
import {Icon} from 'antd';


   function Mood(){

    return(
        <div className="mood-buttons">
        <Icon shape="circle" size="large" type="smile" />
        <Icon shape="circle" size="large" type="meh" />
        <Icon shape="circle" size="large" type="frown" />
   
      </div>

    )};



export default Mood;