import { Router } from 'express';
import OrphanagesController from './controller/OrphanagesController';

const	routes = Router();

routes.get('/user', (request, response)=>{
  return response.json({message:"Hello Worlds"});
})

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', OrphanagesController.create)

export default routes;
