// import { urlInput } from '../models/url.model';
import crypto from "crypto";
// import knex from "../database";
import config from "config";
import { getUrlObject, insertUrl } from "../repository/url.repository";

const port = config.get<number>("port");
const host = config.get<string>("host");

export async function getUrl(input: string) {
  try {
    return await getUrlObject(input);
  } catch (e) {
    throw e;
  }
}

export async function createUrl(url: string) {
  // urlFile();

  try {
    const shorter = createShort();

    await insertUrl(url, shorter);

    return `http://${host}:${port}/${shorter}`;
  } catch (e) {
    throw e;
  }
}

const createShort = () => {
  return crypto.randomBytes(3).toString("hex");
};
