import { Course } from "../interfaces/Course";

export class Student {
  constructor(public courses: Array<Course>, private MIN_OUT: number, private MAX_STRESS?: number) {
    Object.assign(this, courses);
  }

  printCourses(): void {
    this.courses.map((data) => {
      const { name, scoreCred, scoreStress } = data;
      console.log(`Curso: ${name}, Credito: ${scoreCred}, Nivel de estres: ${scoreStress}`);
    });


  }
  // Divide and conquer
  // Dynamic Programming,
  listCourses(): void {
    console.log(this.calculateScoreCourses(this.courses, 0, 0, []));
  };

  // Divide and conquer
  calculateScoreCourses(courses: Array<Course>, addScore: number, index: number, listCourses: Array<Course> | undefined = []): any {
    if (addScore <= this.MIN_OUT)
      return listCourses;
    return this.calculateScoreCourses(courses, addScore += courses[index].scoreCred, index++, listCourses.push(this.courses[index]));

  }

  // getMinDivisor(): Array<number> {
  //   let divisor = [0];
  //   divisor.push();
  //   return divisor;
  // }

  // getDivisor(value: number, divisor: number): number {
  //   return (value % divisor === 0)
  //     ? value / divisor
  //     : value;
  // }
}