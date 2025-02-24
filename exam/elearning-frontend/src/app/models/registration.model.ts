import { Student } from './student.model';
import { Classes } from './classes.model';

export interface Registration {
  id: number;
  date: Date;
  description: string;
  archive: boolean;
  student: Student;
  classes: Classes;
}