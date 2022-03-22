import React from 'react';
import Table from '../../Table';
import Tr from '../../Tr';
import Td from '../../Td';
import Img from '../../Img';
import Spacer from '../../Spacer';
import video from '../../../../Assets/Images/video.png';
import jobIcon from '../../../../Assets/Images/jobIcon.png';

function TimeNameTitle({ data }) {
  return (
    <Table style={{ borderBottom: '1px solid #E4E2E0' }}>
      <Spacer height="32" />
      <Tr>
        <Td style={{ padding: '0 24px' }}>
          <Table>
            <Tr>
              <Td
                align="left"
                style={{
                  fontFamily: `'Noto Sans', helvetica, arial`,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#00000',
                  fontWeight: '700',
                }}
              >
                {data.candidateInterviewDataById['2373587f6d09'].interviewTime}
              </Td>
              <Td
                align="right"
                style={{
                  fontFamily: `'Noto Sans', helvetica, arial`,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#2557A7',
                  fontWeight: '400',
                  textAlign: 'right',
                }}
              >
                {/* if statement here gathering json res to update accordingly to result */}
                <Img
                  src={video}
                  alt="Check"
                  width="16"
                  style={{ marginRight: '10px' }}
                />
                {data.candidateInterviewDataById['2373587f6d09'].interviewType}
              </Td>
            </Tr>
          </Table>
        </Td>
      </Tr>
      <Spacer height="5" />
      <Tr>
        <Td
          style={{
            fontFamily: `'Noto Sans', helvetica, arial`,
            fontSize: '20px',
            lineHeight: '150%',
            color: '#2557A7',
            fontWeight: '700',
            textAlign: 'left',
            padding: '0 24px',
          }}
        >
          {data.candidateInterviewDataById['2373587f6d09'].name}
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
            src={jobIcon}
            alt="Job Icon"
            width="16"
            style={{ marginRight: '10px' }}
          />
          {data.candidateInterviewDataById['2373587f6d09'].lastJobTitle},{' '}
          <span style={{ fontWeight: 400 }}>
            {data.candidateInterviewDataById['2373587f6d09'].lastCompany}
          </span>
        </Td>
      </Tr>
      <Spacer height="16" />
    </Table>
  );
}

export default TimeNameTitle;
