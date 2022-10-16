import knex from "../database";

export async function getUrlObject(input: string) {
  try {
    const urlObject = knex("urls").where("shorter", input).select("url");
    const url = await urlObject;
    return url[0];
  } catch (e) {
    throw e;
  }
}

export async function insertUrl(url: string, shorter: string) {
  try {
    return await knex("urls").insert({ url, shorter });
  } catch (e) {
    throw e;
  }
}
