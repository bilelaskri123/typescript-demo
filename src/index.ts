import { Person } from "./oop/Person";
import Student from "./oop/Student";
import Teacher from "./oop/Teacher";

const student = new Student(1, "bilel", "askri");
const teacher = new Teacher(1, "bilel", "askri");

const people: Person[] = [];
people.push(student);
people.push(teacher);

for (const person of people) {
  console.log(person.fullName);
}
