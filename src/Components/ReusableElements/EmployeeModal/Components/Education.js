import React from 'react';
import Table from '../../Table';
import Tr from '../../Tr';
import Td from '../../Td';
import Img from '../../Img';
import Spacer from '../../Spacer';
import checkMark from '../../../../Assets/Images/checkmark.png';

const TimeNameTitle = ({ data }) => {
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
          Matches to quality criteria
        </Td>
      </Tr>
      <Spacer height="5" />
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
          <Img
            src={checkMark}
            alt="Check"
            width="16"
            style={{ marginRight: '10px' }}
          />
          {
            data.candidateInterviewDataById['2373587f6d09'].qualityCriteria[0]
              .label
          }
        </Td>
      </Tr>
      <Spacer height="16" />
    </Table>
  );
};

export default TimeNameTitle;
