import React from 'react';
import Table from '../Table';
import Tr from '../Tr';
import Td from '../Td';
import Spacer from '../Spacer';
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
  education_1,
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
        <Table>
          <Spacer height="32" />
          <Tr>
            <Td>
              <TimeNameTitle
                data={data}
                intType={intType}
                intTime={intTime}
                name={name}
                jobTitle={jobTitle}
                lastCompany={lastCompany}
              />
              <Education education={education} education_1={education_1} />
              <Interest interest={interest} />
            </Td>
          </Tr>
          <Spacer height="32" />
        </Table>
      </Td>
    </Tr>
  );
};

export default EmployeeModal;
