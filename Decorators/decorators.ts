/**
 * see decorator documentation here: https://www.typescriptlang.org/docs/handbook/decorators.html
 * Decorators are currently an "experimental" feature in Typescript and may be subject to
 * implementation changes.
 *
 * to use decorators, WE MUST FIRST enable some settings in our tsconfig file
 * experimentalDecorators should be set to true
 */

// class decorators recieve the class constructors, do something and either return a function or void
// class decorator example
function classDecorator(constructor: Function) {
  // does something
  console.log(`${constructor} Decorator invoked`);
}

// method decorator example
function methodDecorator(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // does something
  console.log("Method Invoked");
}

// property decorator
function propertyDecorator(target: Object, propertyKey: string) {
  // does something
  console.log(`${propertyKey} Decorator Invoked`);
}

//parameter decorator
function parameterDecorator(
  target: Object,
  propertyKey: string,
  index: number
) {
  // does something
  console.log(`${propertyKey} decorator (${index}) invoked`);
}

// DECORATOR FACTORIES are functions that return decorators
// they have added advantage of allowing us pass in values while declaring them. they must use paranthesis

// calling a decorator factory
// @decoratorFactory("myValyue")

// defining the decorator factory
function decoratorFactory(value: string) {
  return function createdDecorator(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // does something with value passed in
    console.log(`Method invoked. ${value} received from decorator factory`);
  };
}
