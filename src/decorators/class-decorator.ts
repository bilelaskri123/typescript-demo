// decorator is just a function
function Controller(constructor: Function) {
  constructor.prototype.endPoint = "/api/auth";
  constructor.prototype.login = () => {
    console.log("You logged in successfully");
  };
}

@Controller
class Auth3 {}

const auth2 = new Auth3();

//@ts-ignore
console.log(auth2.endPoint);

//@ts-ignore
console.log(auth2.login());
