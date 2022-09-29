// import { urlInput } from '../models/url.model';
import log from '../utils/logger';
import crypto from 'crypto';
import fs from 'fs';
import config from 'config';

const port = config.get<number>('port');
const host = config.get<string>('host');

let urls = [];

const urlFile = () => {
  fs.writeFile('./src/data/urls.json', JSON.stringify(urls), (err) => {
    if (err) {
      log.error(err);
    } else log.info('URL inserida');
  });
};
urlFile();

const readFile = () => {
  urls = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
};

export function postUrl(input: string) {
  readFile();

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
  readFile();
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
