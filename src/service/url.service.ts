// import { urlInput } from '../models/url.model';
import log from '../utils/logger';
import crypto from 'crypto';
import fs from 'fs';
import config from 'config';

const port = config.get<number>('port');
const host = config.get<string>('host');

const urlFile = () => {
  fs.writeFile('./src/data/urls.json', JSON.stringify(urls), (err) => {
    if (err) {
      log.error(err);
    } else log.info('URL inserida');
  });
};

const getInstance = () => {
  // create object if it's not already created
  // console.log(JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8')));
  try {
    if (urls.length === 0) {
      urls = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
    }
  } catch (e) {
    urlFile();
  }
};

// const readFile = () => {
//   const test = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
//   if (test.length > 0 || Object.keys(test).length) urls = test;
// };

let urls = [];
getInstance();

export function postUrl(input: string) {
  const shorter = createShort();
  urls.push({
    [shorter]: input,
  });

  urlFile();

  try {
    return `http://${host}:${port}/${shorter}`;
  } catch (e) {
    log.error(e);
    throw e;
  }
}
export function getUrl(input: string) {
  try {
    let url = '#';
    urls.forEach((urlObjec) => {
      // console.log(urlObjec);
      if (urlObjec[input]) {
        // console.log(urlObjec[input]);
        url = urlObjec[input];
        return;
      }
    });
    return url;
  } catch (e) {
    log.error(e);
    throw e;
  }
}

const createShort = () => {
  return crypto.randomBytes(3).toString('hex');
};
