
const http = require('https');
const Url = 'https://swapi.dev/api/vehicles/';

function getData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let buffer = '';
      response.on('data', (chunk) => {
        buffer += chunk;
      });
      response.on('end', () => {
        let data = JSON.parse(buffer);
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

getData(Url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
