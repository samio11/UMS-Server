import { Router } from 'express';
import { userRouter } from '../modules/user/user.routes';
import { studentRoutes } from '../modules/student/student.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/student',
    route: studentRoutes,
  },
];

moduleRoutes.forEach((x) => router.use(x?.path, x?.route));

export default router;
