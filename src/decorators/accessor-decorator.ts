function ToUpperCase(
  classPrototype: Object,
  methodName: string,
  description: PropertyDescriptor
) {
  const originalValue = description.get;
  description.get = function () {
    const result = originalValue?.call(this);
    return result.toUpperCase();
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @ToUpperCase
  public get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const person5 = new Person("bilel", "askri");
console.log(person5.fullName);
