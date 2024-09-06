// property decorator

function IsEmail(classPrototype: Object, propertyName: string) {
  let value: string;
  const descriptor: PropertyDescriptor = {
    get() {
      return value;
    },
    set(v: string) {
      if (!v.includes("@") || !v.includes(".com")) {
        throw new Error("Invalid Email");
      }
      value = v;
    },
  };

  Object.defineProperty(classPrototype, propertyName, descriptor);
}

class Client {
  @IsEmail
  email: string;
  constructor(email: string) {
    this.email = email;
  }
}

let client = new Client("Bilel@gmail.com");
console.log(client.email);
