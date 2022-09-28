import { Request, Response } from 'express';

import { postUrl, getUrl } from '../service/url.service';

export async function postUrlHandler(req: Request, res: Response) {
  const urlId = req.params.urlId;

  const url = postUrl(urlId);

  if (!url) {
    return res.sendStatus(404);
  }

  return res.send(url);
}

export async function getUrlHandler(req: Request, res: Response) {
  const urlId = req.params.urlId;

  const url = await getUrl(urlId);
  if (!url) {
    return res.sendStatus(404);
  }
  return res.redirect(url);
}
