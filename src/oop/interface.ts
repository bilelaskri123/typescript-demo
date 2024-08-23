interface Auth {
  register(username: string, email: string, password: string): void;
  login(email: string, password: string): void;
  role: string;
}

// A class implements an interface and of course can extends another class
class User2 implements Auth {
  register(username: string, email: string, password: string): void {
    console.log({ username, email, password });
  }
  login(email: string, password: string): void {
    console.log({ email, password });
  }
  role: string = "user";
}

// interface extends another interface
interface Auth2 extends Auth {}
