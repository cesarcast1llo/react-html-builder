const fs = require('fs');

const fetch = require('node-fetch');

// calling webpack file to gather components and build html file
const createEmail = require('../server/createEmail');

// fetch api call from Email.js below

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
