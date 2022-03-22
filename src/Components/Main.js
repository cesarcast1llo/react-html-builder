import React from 'react';
import Table from './ReusableElements/Table';
import Tr from './ReusableElements/Tr';
import Td from './ReusableElements/Td';
import Spacer from './ReusableElements/Spacer';
import EmployeeModal from './ReusableElements/EmployeeModal/EmployeeModal';

function Main({ data }) {
  return (
    <>
      <Table align="center" className={'main'} width={'600'} bgColor="#feffff">
        <Tr>
          <Td>
            <Table className="container" width="488">
              <Spacer height="40" />
              <Tr>
                <Td
                  align="center"
                  style={{
                    fontFamily: `'Noto Sans', helvetica, arial`,
                    fontSize: '44px',
                    lineHeight: '55px',
                    letterSpacing: '1px',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    textAlign: 'left',
                  }}
                >
                  Your daily summary
                </Td>
              </Tr>
              <Spacer height="40" />
              <Tr>
                <Td
                  align="center"
                  style={{
                    fontFamily: `'Noto Sans', helvetica, arial`,
                    fontSize: '24px',
                    lineHeight: '125%',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    textAlign: 'left',
                  }}
                >
                  {data.candidateInterviewCount} upcoming interviews
                </Td>
              </Tr>
              <Spacer height="24" />
              <Tr>
                <Td
                  align="center"
                  style={{
                    fontFamily: `'Noto Sans', helvetica, arial`,
                    fontSize: '20px',
                    lineHeight: '150%',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    textAlign: 'left',
                  }}
                >
                  {data.candidateInterviewDate}
                </Td>
              </Tr>
              <Spacer height="16" />
              <EmployeeModal data={data} />
            </Table>
          </Td>
        </Tr>
      </Table>
    </>
  );
}

export default Main;
