// parent class / base class / super class
export class Person {
  constructor(public firstName: string, public lastName: string) {}

  public get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk(): void {
    console.log("walking");
  }
}
