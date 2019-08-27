import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';


   function Mood(){

    ReactDOM.render(
        <div>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </div>,
        document.getElementById('container'),
      )};


//  <div className="Mood">
//   <Button className="ui positive basic button">  Content </Button>
//   <Button class="ui yellow basic button">Indifferent</Button>
//   <Button class="ui negative basic button">Dissatisfied</Button>
// </div>


export default Mood;