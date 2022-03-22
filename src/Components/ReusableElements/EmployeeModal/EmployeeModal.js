import React from 'react';
import Tr from '../Tr';
import Td from '../Td';
import TimeNameTitle from './Components/TimeNameTitle';
import Education from './Components/Education';
import Interest from './Components/Interest';

function EmployeeModal({ data }) {
  return (
    <Tr>
      <Td
        style={{
          border: '1px solid #E4E2E0',
          borderRadius: '16px',
        }}
      >
        <TimeNameTitle data={data} />
        <Education data={data} />
        <Interest data={data} />
      </Td>
    </Tr>
  );
}

export default EmployeeModal;
