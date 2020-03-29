import { Router } from 'express';

// import authMiddleware from './app/middlewares/auth';
import userController from './app/controllers/UserControllers';
// import sessionController from './app/controllers/SessionControllers';

const routes = new Router();
routes.post('/users', userController.store);
routes.get('/users', userController.getUsers);

// routes.post('/sessions', sessionController.store);

 //routes.use(authMiddleware);
// routes.put('/users', userController.update);

export default routes;
