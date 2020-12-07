import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controller/OrphanagesController';

const	routes = Router();
const upload = multer(uploadConfig);

routes.get('/user', (request, response)=>{
  return response.json({message:"Hello Worlds"});
})

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes;
