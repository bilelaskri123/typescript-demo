function Logger(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalValue = descriptor.value;
  descriptor.value = function (speed: number) {
    console.log("before car moving");
    originalValue.call(this, speed);
    console.log("after car moving");
  };
}

function DecreaseDecorator(speed: number) {
  return (
    classPrototype: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.value = () => {
      console.log("decrease speed by: ", speed);
    };
  };
}

class Car {
  @Logger
  move(speed: number) {
    console.log("The car moving with speed: " + speed);
  }

  stop() {
    console.log("the car stopped");
  }

  @DecreaseDecorator(10)
  decreaseSpeed() {}
}

const car2 = new Car();
car2.move(90);
car2.decreaseSpeed();
