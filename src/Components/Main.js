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
  const interview_1 = data.candidateInterviewDataById['2373587f6d09'];
  const interview_2 = data.candidateInterviewDataById['2373587f6d01'];
  const interview_3 = data.candidateInterviewDataById['2373587f6d02'];
  const interview_4 = data.candidateInterviewDataById['2373587f6d03'];

  return (
    <>
      <Table align="center" className="main" width="600" bgColor="#feffff">
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
                intTime={interview_1.interviewTime}
                intType={interview_1.interviewType}
                typeOfCall={video}
                name={interview_1.name}
                jobTitle={interview_1.lastJobTitle}
                bb_1={{ borderBottom: '1px solid #E4E2E0' }}
                lastCompany={interview_1.lastCompany}
                education={interview_1.qualityCriteria[0].label}
                bb_2={{ borderBottom: '1px solid #E4E2E0' }}
                interest={interview_1.oneLinerPresentation}
              />
              <Spacer height="25" />
              <EmployeeModal
                data={data}
                intTime={interview_2.interviewTime}
                intType={interview_2.interviewType}
                typeOfCall={phone}
                name={interview_2.name}
                jobTitle={interview_2.lastJobTitle}
                bb_1={{ borderBottom: '1px solid #E4E2E0' }}
                lastCompany={interview_2.lastCompany}
                education={interview_2.qualityCriteria[0].label}
                bb_2={{ borderBottom: '1px solid #E4E2E0' }}
                education_1={interview_2.qualityCriteria[1].label}
                interest={interview_2.oneLinerPresentation}
              />
              <Spacer height="25" />
              <EmployeeModal
                data={data}
                intTime={interview_3.interviewTime}
                intType={interview_3.interviewType}
                typeOfCall={location}
                name={interview_3.name}
                jobTitle={interview_3.lastJobTitle}
                lastCompany={interview_3.lastCompany}
              />
              <Spacer height="25" />
              <EmployeeModal
                data={data}
                intTime={interview_4.interviewTime}
                intType={interview_4.interviewType}
                typeOfCall={video}
                name={interview_4.name}
                jobTitle={interview_4.lastJobTitle}
                lastCompany={interview_4.lastCompany}
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
