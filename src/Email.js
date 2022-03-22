import React, { useEffect, useState } from 'react';
import Body from './Components/Body';
import Table from './Components/ReusableElements/Table';
import Header from './Components/Header';
import Main from './Components/Main';
import Tr from './Components/ReusableElements/Tr';
import Td from './Components/ReusableElements/Td';
import data from './LocalJson/example.json';

const Email = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const url = 'https://api.jsonbin.io/b/621fd0d97caf5d67835dcf84';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <Body align="center" className="wrapper" bgColor="#E5E5E5">
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
