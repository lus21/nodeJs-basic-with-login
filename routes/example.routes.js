import { Router } from 'express';
import exampleHandlers from '../handlers/example';
import middleware from '../handlers/middleware';

export const exampleRoutes = Router();

exampleRoutes.get('/', exampleHandlers.exampleAction);
exampleRoutes.get('/profile', exampleHandlers.showProfile);
exampleRoutes.get('/profileSettings', middleware.isLoggedIn, exampleHandlers.showProfileSettings);

export { exampleRoutes as default };