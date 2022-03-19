import React from 'react';
import Table from './Components/ReusableElements/Table';
import Header from './Components/Header';

function Email({ data }) {
  return (
    <Table align="center" className="main" width="600" bgColor="#feffff">
      <Header data={data} />
    </Table>
  );
}

export default Email;
