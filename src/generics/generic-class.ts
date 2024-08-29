// generic class
class Product<T, K> {
  constructor(public rating: T, public views: K) {}

  // generic method
  getProduct<K>(value: K): K {
    return value;
  }
}

const product1 = new Product<number, string>(4, "good");
let productName = product1.getProduct<string>("book");
console.log(product1);
console.log(productName);
