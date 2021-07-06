import { Course } from "../interfaces/Course";

export class Student {
  constructor(courses: Array<Course>) {
    Object.assign(this, courses);
  }


}