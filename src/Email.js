import React, { useEffect, useState } from 'react';
import Table from './Components/ReusableElements/Table';
import Header from './Components/Header';
import Main from './Components/Main';
import data from './LocalJson/example.json';

function Email() {
  // const [data, setData] = useState('');

  // // using useEffect hook to retrieve URL
  // useEffect(() => {
  //   const url = 'https://api.jsonbin.io/b/621fd0d97caf5d67835dcf84';

  //   // use async function to fetch our data
  //   // helps wait until promise is solved before continuing
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Table align="center" className="wrapper" bgColor="#E5E5E5">
      <Header data={data} />
      <Main data={data} />
    </Table>
  );
}

export default Email;
