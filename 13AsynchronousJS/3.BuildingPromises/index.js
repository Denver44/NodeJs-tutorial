const fs = require('fs');
const axios = require('axios');

const readFilePro = (filepath) => {
  return new Promise((resolved, reject) => {
    fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) reject({ error, msg: 'Could not find any file' });
      resolved(data);
    });
  });
};

const writeFilePro = (filepath, data) => {
  return new Promise((resolved, reject) => {
    fs.writeFile(filepath, data, (error) => {
      if (error) reject({ error, msg: 'Could not write the text in the file' });
      resolved('Random dog imag URL added to the file');
    });
  });
};

const dogImage = (readFilePath, writeFilePath) => {
  readFilePro(readFilePath)
    .then((data) => {
      axios
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((res) => {
          writeFilePro(writeFilePath, res.data.message)
            .then((res) => console.log('Write file Success => ', res))
            .catch((error) => console.log('Write file Error => ', error));
        })
        .catch((error) => console.log('API call error ', error));
    })
    .catch((error) => console.log('Read file Error => ', error.msg));
};

dogImage('./dog.txt', './dog-img-url.txt');
