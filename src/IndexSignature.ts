// Index Signature

class Phone {
  // Index Signature property
  [key: string]: string | boolean;
}

const phone = new Phone();
phone.name = "oppo";

console.log(phone);
