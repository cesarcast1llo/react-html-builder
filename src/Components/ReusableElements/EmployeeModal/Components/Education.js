import React from 'react';
import Table from '../../Table';
import Tr from '../../Tr';
import Td from '../../Td';
import Img from '../../Img';
import Spacer from '../../Spacer';
import checkMark from '../../../../Assets/Images/checkmark.png';

const TimeNameTitle = ({ education, education_1, bb_2 }) => {
  return (
    <>
      {education ? (
        <Table style={bb_2}>
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
              {education}
            </Td>
          </Tr>
          {education_1 ? (
            <>
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
                  {education_1}
                </Td>
              </Tr>
            </>
          ) : (
            ''
          )}
          <Spacer height="16" />
        </Table>
      ) : (
        ''
      )}
    </>
  );
};

export default TimeNameTitle;
