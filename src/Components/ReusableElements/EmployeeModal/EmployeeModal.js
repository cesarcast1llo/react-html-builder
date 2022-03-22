import React from 'react';
import Tr from '../Tr';
import Td from '../Td';
import TimeNameTitle from './Components/TimeNameTitle';
import Education from './Components/Education';
import Interest from './Components/Interest';

const EmployeeModal = ({
  data,
  intTime,
  intType,
  name,
  jobTitle,
  lastCompany,
  education,
  interest,
}) => {
  return (
    <Tr>
      <Td
        style={{
          border: '1px solid #E4E2E0',
          borderRadius: '16px',
        }}
      >
        <TimeNameTitle
          data={data}
          intType={intType}
          intTime={intTime}
          name={name}
          jobTitle={jobTitle}
          lastCompany={lastCompany}
        />
        <Education education={education} />
        <Interest interest={interest} />
      </Td>
    </Tr>
  );
};

export default EmployeeModal;
