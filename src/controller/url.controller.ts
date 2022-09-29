import { Request, Response } from 'express';

import { postUrl, getUrl } from '../service/url.service';

export async function postUrlHandler(req: Request, res: Response) {
  const { urlId }: { urlId: string } = req.body;

  const url = postUrl(urlId);

  if (!url) {
    return res.sendStatus(404);
  }

  return res.send(url);
}

export function getUrlHandler(req: Request, res: Response) {
  const urlId = req.params.urlId;

  const url = getUrl(urlId);
  if (!url) {
    return res.sendStatus(404);
  }
  return res.redirect(url);
}
