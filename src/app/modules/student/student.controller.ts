import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import { sendResponse } from '../../utils/sendResponse';

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getAStudentFromDB(id);
    sendResponse(res, {
      status: 200,
      success: true,
      message: 'Getting A Student',
      totalData: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDb();
    sendResponse(res, {
      status: 200,
      success: true,
      message: 'Getting All Student',
      totalData: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deleteAStudentFromDb(id);
    sendResponse(res, {
      status: 200,
      success: true,
      message: 'Deleted A Student',
      totalData: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentControllers = {
  getAStudent,
  getAllStudent,
  deleteAStudent,
};
