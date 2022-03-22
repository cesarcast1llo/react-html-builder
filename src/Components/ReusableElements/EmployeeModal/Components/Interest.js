import React from 'react';
import Table from '../../Table';
import Tr from '../../Tr';
import Td from '../../Td';
import Spacer from '../../Spacer';

const Interest = ({ interest }) => {
  return (
    <Table style={{ borderBottom: '1px solid #E4E2E0' }}>
      <Spacer height="16" />
      <Tr>
        <Td
          style={{
            fontFamily: `'Noto Sans', helvetica, arial`,
            fontSize: '14px',
            lineHeight: '21px',
            color: '#2d2d2d',
            fontWeight: '700',
            textAlign: 'left',
            padding: '0 24px',
          }}
        >
          Why is this candidate interested in the job?
        </Td>
      </Tr>
      <Spacer height="5" />
      <Tr>
        <Td style={{ padding: '0 24px' }}>
          <Table>
            <Tr>
              <Td
                style={{
                  fontFamily: `'Noto Sans', helvetica, arial`,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: '#2d2d2d',
                  fontWeight: '400',
                  textAlign: 'left',
                  borderLeft: '3px solid #C4C4C4',
                  paddingLeft: '10px',
                }}
              >
                {interest}
              </Td>
            </Tr>
          </Table>
        </Td>
      </Tr>
      <Spacer height="32" />
    </Table>
  );
};

export default Interest;
