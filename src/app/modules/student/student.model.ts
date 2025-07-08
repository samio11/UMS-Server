import { model, Schema } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from './student.interface';

const nameSchema = new Schema<TName>({
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  middleName: { type: String, trim: true },
  lastName: { type: String, required: true, trim: true, minlength: 2 },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: nameSchema, required: true },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not a valid gender',
      },
      required: true,
    },
    dob: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} not a valid blood Group',
      },
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    profileImage: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual('fullname').get(function () {
  return this.name.firstName + this?.name?.middleName + this.name.lastName;
});

export const Student = model<TStudent>('Student', studentSchema);
