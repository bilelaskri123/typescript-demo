abstract class Payment {
  constructor() {}
  abstract Pay(): void;

  protected paid(): boolean {
    return true;
  }

  protected noPaid(): boolean {
    return false;
  }
}

class PaymentWithUSD extends Payment {
  Pay(): void {
    console.log("payment with dollar");
  }
}

class PaymentWithDinar extends Payment {
  Pay(): void {
    console.log("Payment with Dinar");
  }
}
