import { Student } from './student.model';

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

const deleteAStudentFromDb = async (id: string) => {
  const result = await Student.findByIdAndDelete(id);
  return result;
};

export const studentServices = {
  getAllStudentFromDb,
  getAStudentFromDB,
  deleteAStudentFromDb,
};
