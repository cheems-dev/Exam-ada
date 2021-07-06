import { Course } from "./interfaces/Course";
import { Student } from "./models/Student";

const MINEGRESAR = 0; // cantidad minima de puntaje para egresar
const MAXSTRESS = 0; // cantidad para nuestro toleracion de estress

// funcion para nuestro egresar
// funcion para nuestro nivel de estres

function main(): void {
  const courses: Array<Course> = [
    {
      name: "ADA",
      scoreCred: 5,
      scoreStress: 10
    },
    {
      name: "IS",
      scoreCred: 4,
      scoreStress: 5
    },
    {
      name: "IA",
      scoreCred: 3,
      scoreStress: 10
    },
    {
      name: "BD 2",
      scoreCred: 5,
      scoreStress: 7
    }

  ];

  const student = new Student(courses);
}

main();
