import { Express, Request, Response } from 'express';
import { postUrlHandler, getUrlHandler } from './controller/url.controller';

const routes = (app: Express) => {
  app.get(
    '/healthcheck',
    (req: Request, res: Response) => (
      console.log(req.url), res.sendStatus(200)
    ),
  );

  app.post('/api', postUrlHandler);
  app.get('/:urlId', getUrlHandler);
};

export default routes;
