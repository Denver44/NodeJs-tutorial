const fs = require('fs');
const axios = require('axios');

const readFilePro = (filepath) => {
  return new Promise((resolved, reject) => {
    fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) reject('Could not find any file');
      resolved(data);
    });
  });
};

const writeFilePro = (filepath, data) => {
  return new Promise((resolved, reject) => {
    fs.writeFile(filepath, data, (error) => {
      if (error) reject('Could not write the text in the file');
      resolved('Random dog imag URL added to the file');
    });
  });
};

const dogImage = async (readFilePath, writeFilePath) => {
  try {
    const dogName = await readFilePro(readFilePath);
    console.log('Dog Name ', dogName);

    const imageURL = await axios.get(
      `https://dog.ceo/api/breed/${dogName}/images/random`
    );
    console.log('Image URL ', imageURL.data.message);

    const writeFileRes = await writeFilePro(
      writeFilePath,
      imageURL.data.message
    );
    console.log(writeFileRes);
  } catch (error) {
    console.log('Error ', error);
  }
};

dogImage('./dog.txt', './dog-img-url.txt');
