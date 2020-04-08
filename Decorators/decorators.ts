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
