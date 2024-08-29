class Account {
  static defaultId: number = 0;
  readonly id: number = 0;
  username?: string; // optional

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

  withdraw(amount: number): number {
    if (this._balance < amount) {
      throw new Error("You don't have enough money");
    }

    this._balance = this._balance - amount;
    return amount;
  }

  getBalance() {
    return this._balance;
  }

  // getter
  public get balance(): number {
    return this._balance;
  }

  //   public set balance(v: number) {
  //     if (v < 0) {
  //       throw new Error("balance should be greater than 0");
  //     }
  //     this._balance = v;
  //   }

  static get members(): number {
    return Account.defaultId;
  }
}

let bilelAccount = new Account("bilel", 10);
let radhouenAccount = new Account("radhouen", 55);
bilelAccount.deposit(10);
console.log(Account.members);
