// import { urlInput } from '../models/url.model';
import log from '../utils/logger';
import crypto from 'crypto';
// import fs from 'fs';
import knex from '../database';
import config from 'config';

const port = config.get<number>('port');
const host = config.get<string>('host');

export async function getUrl(input: string) {
  try {
    const urlObject = knex('urls').where('shorter', input).select('url');
    const url = await urlObject;
    return url[0];
  } catch (e) {
    log.error(e);
    return '';
  }
}

export async function createUrl(url: string) {
  // urlFile();

  try {
    const shorter = createShort();
    await knex('urls').insert({ url, shorter });
    // urls.push({
    //   [shorter]: input,
    // });
    // console.log(`http://${host}:${port}/${shorter}`);
    return `http://${host}:${port}/${shorter}`;
  } catch (e) {
    log.error(e);
    throw e;
  }
}

const createShort = () => {
  return crypto.randomBytes(3).toString('hex');
};

// let urls = [];
// getInstance();

// const urlFile = () => {
//   fs.writeFile('./src/data/urls.json', JSON.stringify(urls), (err) => {
//     if (err) {
//       log.error(err);
//     } else log.info('URL inserida');
//   });
// };

// const getInstance = () => {
//   // create object if it's not already created
//   // console.log(JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8')));
//   try {
//     if (urls.length === 0) {
//       urls = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
//     }
//   } catch (e) {
//     urlFile();
//   }
// };

// const readFile = () => {
//   const test = JSON.parse(fs.readFileSync('./src/data/urls.json', 'utf-8'));
//   if (test.length > 0 || Object.keys(test).length) urls = test;
// };
