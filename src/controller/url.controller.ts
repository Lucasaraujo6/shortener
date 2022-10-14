import { NextFunction, Request, Response } from 'express';

import { createUrl, getUrl } from '../service/url.service';
import log from '../utils/logger';

export async function create(req: Request, res: Response, _next: NextFunction) {
  try {
    const { urlId }: { urlId: string } = req.body;
    const url = await createUrl(urlId);

    // if (!url) {
    //   return res.sendStatus(404);
    // }

    return res.status(200).send(url);
  } catch (e) {
    log.error(e);
    return res.sendStatus(404);
  }
}

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const urlId = req.params.urlId;

    const url = await getUrl(urlId);
    if (!url) {
      throw new Error('Erro na url');
    }

    return res.redirect(url.url);
  } catch (e) {
    // const error = new Error(e);
    // Error.httpStatusCode = 500;
    return next(e);
    // log.error(e);
  }
}

export function treatError(
  error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  log.error(error);
  res.status(500);
}
