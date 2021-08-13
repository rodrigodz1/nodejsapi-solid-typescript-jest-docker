import {Router} from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: "hello dev" })
});

export default routes;
