import { Response } from 'express';

type TSuccessResponse<T> = {
  success: boolean;
  message: string;
  status: number;
  totalData: T | T[] | null;
};

export const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data?.status).json({
    success: true,
    message: data?.message,
    totalData: data?.totalData,
  });
};
