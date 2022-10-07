import { Express } from 'express';
import { create, get } from './controller/url.controller';

const routes = (app: Express) => {
  app
    //URLS
    .get('/:urlId', get)
    .post('/api', create)
};

export default routes;
