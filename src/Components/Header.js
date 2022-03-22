import React from 'react';
import Table from './ReusableElements/Table';
import Tr from './ReusableElements/Tr';
import Td from './ReusableElements/Td';
import Spacer from './ReusableElements/Spacer';
import Img from './ReusableElements/Img';
import Indeed from '../Assets/Images/indeed_for_employers.png';

function Header({ data }) {
  return (
    <>
      <Table align="center" className={'main'} width={'600'} bgColor="#feffff">
        <Tr>
          <Td>
            <Table className="container" width="488" open>
              <Spacer height="20" />
              <Tr>
                <Td align="center" style={{ textAlign: 'left' }}>
                  <Img
                    src={Indeed}
                    alt="Indeed for employers"
                    width="183"
                    style={{ display: 'block' }}
                  />
                </Td>
              </Tr>
              <Spacer height="20" />
            </Table>
          </Td>
        </Tr>
      </Table>
      <Table align="center" className={'main'} width={'600'} bgColor="#001C40">
        <Tr>
          <Td>
            <Table className="container" width="488">
              <Spacer height="16" />
              <Tr>
                <Td
                  align="center"
                  style={{
                    fontFamily: `'Noto Sans', helvetica, arial`,
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 700,
                    color: '#feffff',
                    textAlign: 'left',
                  }}
                >
                  {data.jobTitle}
                </Td>
              </Tr>
              <Spacer height="5" />
              <Tr>
                <Td>
                  <Table>
                    <Tr>
                      <Td
                        align="center"
                        style={{
                          fontFamily: `'Noto Sans', helvetica, arial`,
                          fontSize: '12px',
                          lineHeight: '150%',
                          color: '#feffff',
                          textAlign: 'left',
                          width: '70px',
                        }}
                      >
                        {data.jobLocation}
                      </Td>
                      <Td
                        align="center"
                        style={{
                          fontFamily: `'Noto Sans', helvetica, arial`,
                          fontSize: '12px',
                          lineHeight: '150%',
                          color: '#feffff',
                          textAlign: 'left',
                          width: '15px',
                        }}
                      >
                        |
                      </Td>
                      <Td
                        align="center"
                        style={{
                          fontFamily: `'Noto Sans', helvetica, arial`,
                          fontSize: '12px',
                          lineHeight: '150%',
                          color: '#feffff',
                          textAlign: 'left',
                        }}
                      >
                        <a
                          href="https://www.indeed.com/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: 'underline',
                            color: '#feffff',
                          }}
                        >
                          Review candidates
                        </a>
                      </Td>
                    </Tr>
                  </Table>
                </Td>
              </Tr>
              <Spacer height="16" />
            </Table>
          </Td>
        </Tr>
      </Table>
    </>
  );
}

export default Header;
