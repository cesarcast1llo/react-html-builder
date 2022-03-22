const fs = require('fs');

const fetch = require('node-fetch');

const createEmail = require('../server/createEmail');

function fetchAPI() {
  return fetch('https://www.metaweather.com/api/location/766273/')
    .then((res) => res.json())
    .then((res) => {
      return res.map((data) => ({
        jobTitle: data.jobTitle,
      }));
    });
}

// function createEmail(email) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('createEmail.html', email, (err) => {
//       if (err) return reject(err);
//       return resolve();
//     });
//   });
// }
