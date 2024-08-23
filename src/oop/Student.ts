import { Person } from "./Person";

// child class / derived class / sub class
export default class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  override get fullName(): string {
    return "Student: " + super.fullName;
  }

  study(): void {
    this.drinkCoffee();
    console.log("studying");
  }
}
