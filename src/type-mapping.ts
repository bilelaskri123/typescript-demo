type Customer = {
  username: string;
  age: number;
  address: string;
  phone: string;
};

type ReadOnlyCustomer = {
  readonly username: string;
  readonly age: number;
  readonly address: string;
  readonly phone: string;
};

type keys = keyof Customer;

type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type Optional<T> = {
  [key in keyof T]?: T[key];
};

let readonlyCustomer: ReadOnly<Customer> = {
  username: "bilel",
  age: 29,
  address: "khadhra city tunisia",
  phone: "50796940",
};

let optionalCustomer: Optional<Customer> = {
  username: "ahmed",
  age: 22,
};

console.log(optionalCustomer);
console.log(readonlyCustomer);
