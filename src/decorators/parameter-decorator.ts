// parameter decorator

function Http(
  classPrototype: Object,
  methodName: string,
  parameterIndex: number
) {
  if (parameterIndex === 0) {
    console.log("this is the request object");
  } else if (parameterIndex === 2) {
    console.log("this is the response object");
  } else {
    console.log("this is not request nor response");
  }
}

class BookController {
  getBook(@Http req: Object, res: Object) {
    console.log(req, res);
  }
}
