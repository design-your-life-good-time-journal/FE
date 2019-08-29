import React from 'react';
// import 'antd/dist/antd.css';
import { Button } from 'antd';


   function Mood(){

    return(
        <div className="mood-buttons">
        <Button  shape="circle" size="large" icon="smile" />
        <Button shape="circle" size="large" icon="meh" />
        <Button shape="circle" size="large" icon="frown" />
      </div>

    )};



export default Mood;