import fetch from 'node-fetch';

// function fetchData() {
//   return fetch('https://api.jsonbin.io/b/621fd0d97caf5d67835dcf84')
//     .then(res => res.json())
//     .then((res) => {
//       return res.consolidated_weather.map(w => ({
//         date: w.applicable_date,
//         name: w.weather_state_name,
//         abbr: w.weather_state_abbr,
//         tMax: w.max_temp,
//         tMin: w.min_temp,
//       }));
//     });
// }

fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));