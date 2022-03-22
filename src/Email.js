import React from 'react';
// import Body from './Components/Body';
import Table from './Components/ReusableElements/Table';
import Header from './Components/Header';
import Main from './Components/Main';
// import Tr from './Components/ReusableElements/Tr';
// import Td from './Components/ReusableElements/Td';
import data from './LocalJson/example.json';

const Email = () => {
  return (
    // <Body align="center" className="wrapper" bgColor="#f4f4f4">
    //   <Tr>
    //     <Td>
    <Table align="center" className="wrapper" bgColor="#E5E5E5">
      <Header data={data} />
      <Main data={data} />
    </Table>
    //     </Td>
    //   </Tr>
    // </Body>
  );
};

export default Email;
