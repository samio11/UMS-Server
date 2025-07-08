import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import { sendResponse } from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, studentData } = req.body;
    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      success: true,
      status: 201,
      message: 'Student is Created!!',
      totalData: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = { createStudent };
