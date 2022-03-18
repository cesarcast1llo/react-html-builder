import React from 'react';
import Table from './ReusableElements/Table';
import Tr from './ReusableElements/Tr';
import Td from './ReusableElements/Td';
import Spacer from './ReusableElements/Spacer';
import Img from './ReusableElements/Img';
import Indeed from '../Assets/Images/indeed_for_employers.png';

function Header() {
  return (
    <Table className="container" width="450" open>
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

export default Header;
