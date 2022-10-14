import { Express } from 'express';
import { create, get, treatError } from './controller/url.controller';

const routes = (app: Express) => {
  app
    //URLS
    .get('/:urlId', get)
    .post('/api', create)
    .use(treatError);
};

export default routes;
