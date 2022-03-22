import React from 'react';
import Table from './ReusableElements/Table';
import Tr from './ReusableElements/Tr';
import Td from './ReusableElements/Td';
import Spacer from './ReusableElements/Spacer';
import Cta from './ReusableElements/Cta';
import EmployeeModal from './ReusableElements/EmployeeModal/EmployeeModal';
import video from '../Assets/Images/video.png';
import phone from '../Assets/Images/phone.png';
import location from '../Assets/Images/location.png';

const Main = ({ data }) => {
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
              <EmployeeModal
                data={data}
                intTime={
                  data.candidateInterviewDataById['2373587f6d09'].interviewTime
                }
                intType={
                  data.candidateInterviewDataById['2373587f6d09'].interviewType
                }
                typeOfCall={video}
                name={data.candidateInterviewDataById['2373587f6d09'].name}
                jobTitle={
                  data.candidateInterviewDataById['2373587f6d09'].lastJobTitle
                }
                bb_1={{ borderBottom: '1px solid #E4E2E0' }}
                lastCompany={
                  data.candidateInterviewDataById['2373587f6d09'].lastCompany
                }
                education={
                  data.candidateInterviewDataById['2373587f6d09']
                    .qualityCriteria[0].label
                }
                bb_2={{ borderBottom: '1px solid #E4E2E0' }}
                interest={
                  data.candidateInterviewDataById['2373587f6d09']
                    .oneLinerPresentation
                }
              />
              <Spacer height="16" />
              <EmployeeModal
                data={data}
                intTime={
                  data.candidateInterviewDataById['2373587f6d01'].interviewTime
                }
                intType={
                  data.candidateInterviewDataById['2373587f6d01'].interviewType
                }
                typeOfCall={phone}
                name={data.candidateInterviewDataById['2373587f6d01'].name}
                jobTitle={
                  data.candidateInterviewDataById['2373587f6d01'].lastJobTitle
                }
                bb_1={{ borderBottom: '1px solid #E4E2E0' }}
                lastCompany={
                  data.candidateInterviewDataById['2373587f6d01'].lastCompany
                }
                education={
                  data.candidateInterviewDataById['2373587f6d01']
                    .qualityCriteria[0].label
                }
                bb_2={{ borderBottom: '1px solid #E4E2E0' }}
                education_1={
                  data.candidateInterviewDataById['2373587f6d01']
                    .qualityCriteria[1].label
                }
                interest={
                  data.candidateInterviewDataById['2373587f6d01']
                    .oneLinerPresentation
                }
              />
              <Spacer height="16" />
              <EmployeeModal
                data={data}
                intTime={
                  data.candidateInterviewDataById['2373587f6d02'].interviewTime
                }
                intType={
                  data.candidateInterviewDataById['2373587f6d02'].interviewType
                }
                typeOfCall={location}
                name={data.candidateInterviewDataById['2373587f6d02'].name}
                jobTitle={
                  data.candidateInterviewDataById['2373587f6d02'].lastJobTitle
                }
                lastCompany={
                  data.candidateInterviewDataById['2373587f6d02'].lastCompany
                }
              />
              <Spacer height="16" />
              <EmployeeModal
                data={data}
                intTime={
                  data.candidateInterviewDataById['2373587f6d03'].interviewTime
                }
                intType={
                  data.candidateInterviewDataById['2373587f6d03'].interviewType
                }
                typeOfCall={video}
                name={data.candidateInterviewDataById['2373587f6d03'].name}
                jobTitle={
                  data.candidateInterviewDataById['2373587f6d03'].lastJobTitle
                }
                lastCompany={
                  data.candidateInterviewDataById['2373587f6d03'].lastCompany
                }
              />
              <Cta bgColor="#2557A7" cta="Review candidates" />
              <Spacer height="42" />
            </Table>
          </Td>
        </Tr>
      </Table>
    </>
  );
};

export default Main;
