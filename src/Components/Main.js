import React from 'react';
import Table from './ReusableElements/Table';
import Tr from './ReusableElements/Tr';
import Td from './ReusableElements/Td';
import Spacer from './ReusableElements/Spacer';
import data from '../LocalJson/example.json';

function Main({}) {
  return (
    <div>
      {/* {this.state.messages.map((message, index) => (
        <div className="newMessage" key={index}>
          <p>User: {message.user}</p>
          <p>Message: {message.message}</p>
        </div>
      ))} */}
      {/* {data &&
        data.map(({ name, id }) => (
          <div key={id} className="row">
            <strong>{name}</strong>
          </div>
        ))} */}
      {/* {data.candidateInterviewDataById &&
        data.candidateInterviewDataById.map(({ name, id }) => (
          <div key={id} className="row" style={{ color: 'red' }}>
            <strong>{name}</strong>
          </div>
        ))} */}
    </div>
  );
}

export default Main;
