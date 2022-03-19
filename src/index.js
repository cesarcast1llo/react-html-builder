import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Components/Body';
import Email from './Email';
// import App from './App';
import data from './LocalJson/example.json';

ReactDOM.render(
  <Body bgColor="#f4f4f4">
    <Email data={data} />
  </Body>,
  document.getElementById('root')
);
