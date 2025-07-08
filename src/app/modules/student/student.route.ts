import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();
router.get('/', studentControllers.getAllStudent);
router.get('/:id', studentControllers.getAStudent);
router.delete('/:id', studentControllers.deleteAStudent);

export const studentRoutes = router;
