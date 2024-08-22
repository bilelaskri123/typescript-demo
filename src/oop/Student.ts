import { Person } from "./Person";

// child class / derived class / sub class
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  study(): void {
    console.log("studying");
  }
}

let student = new Student(1, "bilel", "askri");
console.log(student);
