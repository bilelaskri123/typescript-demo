import { Person } from "./Person";

export default class Teacher extends Person {
  constructor(public teacherId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  override get fullName(): string {
    return "Teacher: " + super.fullName;
  }

  teach(): void {
    console.log("teaching");
  }
}
