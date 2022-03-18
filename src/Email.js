// import Body from './Components/ReusableElements/Body';
import Table from './Components/ReusableElements/Table';
import Tr from './Components/ReusableElements/Tr';
import Td from './Components/ReusableElements/Td';
import Spacer from './Components/ReusableElements/Spacer';
import Img from './Components/ReusableElements/Img';
import Indeed from './Assets/Images/indeed_for_employers.png';

function Email() {
  return (
    <Table
      align="center"
      className="main"
      width="600"
      style={{ width: '600px', backgroundColor: '#feffff' }}
    >
      <Spacer height="20" />
      <Tr>
        <Td align="left">
          <Img src={Indeed} alt="Indeed for employers" width="183" />
        </Td>
      </Tr>
      <Spacer height="20" />
    </Table>
  );
}

export default Email;
