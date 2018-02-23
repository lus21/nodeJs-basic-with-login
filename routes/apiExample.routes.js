import { Router } from 'express';
import apiExampleHandlers from '../handlers/apiExample';

const apiExampleRoutes = Router();

apiExampleRoutes.post('/', apiExampleHandlers.exampleCreate);

export { apiExampleRoutes as default };