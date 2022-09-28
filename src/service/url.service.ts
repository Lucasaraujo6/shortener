// import { urlInput } from '../models/url.model';
import log from '../utils/logger';
import crypto from 'crypto';
import fs from 'fs';

let urls = [];

const urlFile = () => {
  fs.writeFile('./src/data/urls.json', JSON.stringify(urls), (err) => {
    if (err) {
      log.error(err);
    } else log.info('URL inserida');
  });
};

const readFile = async () => {
  urls = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
};
export async function postUrl(input: string) {
  readFile();

  const shorter = createShort();
  urls.push({
    [shorter]: input,
  });

  urlFile();

  try {
    return shorter;
  } catch (e) {
    log.error(e);
    throw e;
  }
}
export async function getUrl(input: string) {
  await readFile();
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
