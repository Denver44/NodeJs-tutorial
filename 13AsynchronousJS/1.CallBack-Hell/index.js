const fs = require('fs');
const axios = require('axios');

fs.readFile('./dog.txt', 'utf-8', (error, data) => {
  try {
    console.log('Breed : ', data);
    axios
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        fs.writeFile('dog-img-url.txt', res.data.message, (err) => {
          if (err) return console.log('writeFile Error ', err.message);
          else console.log('Random dog imag URL added to the file');
        });
      })
      .catch((error) => {
        console.log('API call error ', error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
});
