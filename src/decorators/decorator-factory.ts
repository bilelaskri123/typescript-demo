// Decorator factory
function Controllers(endPoint: string) {
  return function (constructor: Function) {
    constructor.prototype.endPoint = endPoint;
    console.log(endPoint);
    constructor.prototype.login = () => {
      console.log("You logged in successfully");
    };
  };
}

function Guard(role: string) {
  return (constructor: Function) => {
    console.log("Guard Decorator called");
    constructor.prototype.role = role;
  };
}

@Controllers("/api/books")
class Book2 {}

@Guard("admin")
@Controllers("/api/users")
class Users {}
