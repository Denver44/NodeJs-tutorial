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
    const dogList = dogName.split('-');

    const imagOneURL = axios.get(
      `https://dog.ceo/api/breed/${dogList[0]}/images/random`
    );
    const imageTwoURL = axios.get(
      `https://dog.ceo/api/breed/${dogList[1]}/images/random`
    );
    const imageThreeURL = axios.get(
      `https://dog.ceo/api/breed/${dogList[2]}/images/random`
    );

    const all = await Promise.all([imagOneURL, imageTwoURL, imageThreeURL]);
    const imageURL = all.map((el) => el.data.message);
    console.log('Image URL ', imageURL);

    const writeFileRes = await writeFilePro(
      writeFilePath,
      imageURL.join('\n\n\n\n')
    );
    console.log(writeFileRes);
  } catch (error) {
    console.log('Error ', error);
  }
};

dogImage('./dog.txt', './dog-img-url.txt');
