import { Course } from "./interfaces/Course";
import { Student } from "./models/Student";

const MINEGRESAR = 10; // cantidad minima de puntaje para egresar
const MAXSTRESS = 0; // cantidad para nuestro toleracion de estress

// funcion para nuestro egresar
// funcion para nuestro nivel de estres
// crearemos una funcion para encontrar la solucion pero esto se regira a travez de  MINEGRESAR

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

  const student = new Student(courses, MINEGRESAR);
  student.printCourses();
  // student.listCourses();
}

main();
