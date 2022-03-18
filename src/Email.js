import React from 'react';
import Table from './Components/ReusableElements/Table';
import Header from './Components/Header';

function Email() {
  return (
    <Table
      align="center"
      className="main"
      width="600"
      style={{ width: '600px', backgroundColor: '#feffff' }}
      open
    >
      <Header />
    </Table>
  );
}

export default Email;
