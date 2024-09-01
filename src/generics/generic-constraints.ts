// generic constraints

interface IBook3 {
  title: string;
  price: number;
}

interface ILaptop3 {
  brand: string;
  color: string;
}

function getProduct<T extends IBook3 | ILaptop3>(product: T) {
  return product;
}

let book5 = getProduct<IBook3>({
  title: "typescript",
  price: 25,
});
console.log(book5);

let laptop5 = getProduct<ILaptop3>({
  brand: "lenevo",
  color: "blue",
});
console.log(laptop5);
