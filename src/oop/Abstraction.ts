class SendEmail {
  constructor(
    public from: string,
    public to: string,
    public subject: string,
    public message: string
  ) {}

  send() {
    this.validateEmailAddress();
    this.validateEmailSubject();
    this.validateEmailMessage();
    console.log("Email Sent");
  }

  // abstraction method that only used inside the class
  private validateEmailAddress() {
    if (!this.from.includes("@") || !this.to.includes("@")) {
      throw new Error("invalid email address");
    }
  }

  private validateEmailSubject() {
    if (this.subject.length < 2) {
      throw new Error("subject cannot be less than 2 characters");
    }
  }

  private validateEmailMessage() {
    if (this.from.length < 10) {
      throw new Error("message cannot be less than 10 characters");
    }
  }
}

const sendEmail = new SendEmail(
  "bilel@gmail.com",
  "imene@gmail.com",
  "hello",
  "just a simple test"
);

sendEmail.send();
