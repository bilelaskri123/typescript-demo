class Account {
  static defaultId: number = 0;
  readonly id: number = 0; // readonly variable, you can not change its value after assign it
  // owner: string = "";
  // private _balance: number = 0;
  username?: string; // optional

  // Access modifiers
  // private, protected, public(default)

  //   constructor(owner: string, balance: number) {
  //     Account.defaultId = Account.defaultId + 1;
  //     this.id = Account.defaultId;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }

  // parameter properties
  constructor(public owner: string, private _balance: number) {
    Account.defaultId = Account.defaultId + 1;
    this.id = Account.defaultId;
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error("amount should be greater than 0");
    }
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

let bilelAccount = new Account("bilel", 10);
let radhouenAccount = new Account("radhouen", 55);
bilelAccount.deposit(10);
console.log(bilelAccount);
console.log(radhouenAccount);

console.log(bilelAccount.getBalance());
