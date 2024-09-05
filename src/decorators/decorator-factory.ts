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

@Controllers("/api/books")
class Book2 {}

@Controllers("/api/users")
class Users {}
