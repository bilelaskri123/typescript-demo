// Example 1
interface IUser {
  username: string;
  age: number;
  firstName: string;
  lastName: string;
  email: string;
}

type UserKeys = keyof IUser;
const userKey: UserKeys = "firstName";
console.log(userKey);

// Example 2
type TCountry = {
  name: string;
  flag: string;
};

type CountryKeys = keyof TCountry;
const countryKey: CountryKeys = "name";
console.log(countryKey);

// example 3
const car = {
  name: "BMW",
  color: "black",
  type: "automatic",
};

type CarKeys = keyof typeof car;
const carKey: CarKeys = "color";
console.log(carKey);
