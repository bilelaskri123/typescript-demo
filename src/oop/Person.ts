// parent class / base class / super class
export class Person {
  constructor(public firstName: string, public lastName: string) {}

  public get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk(): void {
    console.log("walking");
  }

  add(a: number, b: number): number;
  add(firstName: string, lastName: string): string;

  add(a: any, b: any): any {
    return a + b;
  }

  protected drinkCoffee() {
    console.log("drink coffee");
  }
}
