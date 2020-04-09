// define log class decorator factory
function logclass(value: string): Function {
  console.log(`${value} evaluated`);
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(`${value} calleded`);

    // we return a class which extends the initial constructor and includes some properties of our choosing
    return class extends constructor {
      decoratorAddedValue = value;
    };
  };
}

// define the log property decorator
function logProperty(value: string): PropertyDecorator {
  console.log(`${value} evaluated`);
  return function(target: Object, propertyKey: symbol | string): void {
    console.log(`${value} called`);
  };
}

// define the log method decorator
function logMethod(value: string): MethodDecorator {
  console.log(`${value} evaluated`);
  return function(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log(`${value} called for ${String(propertyKey)}`);
    // lets store the original method definition
    const originalMethod = descriptor.value;
    // now lets manipulate the original method to change how it behaves
    descriptor.value = function(...args: any[]) {
      console.log(`added 10 to get: ${String(args[1] + 10)}`);
      return originalMethod.apply(this, args);
    };
  };
}

// define the log parameter decorator factory
function logParameter(value: string): ParameterDecorator {
  console.log(`${value} evaluated`);
  return function(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    console.log(`${value} called`);
  };
}

// creating a class and including our decorators....
@logclass("Class Decorator")
class Person {
  private _directReports: Person[];

  @logProperty("Property Decorator")
  public emailAddress: string;

  constructor(
    @logParameter("Parameter Decorator") public firstName: string,
    public lastname: string
  ) {
    this._directReports = [];
  }

  // NOTE we can nest decorators.. the shape will be d1(d2(class|method|etc)) and they will be
  // evaluated top to bottom (then called bottom to top)
  @logMethod("Method Decorator 1")
  @logMethod("Method Decorator 2")
  addReport(value: Person, num: number): string {
    //this._directReports.push(value);
    console.log(String(num));
    return "Hello";
  }
}

// we can create a new class instance
const Fellow = new Person("John", "Doe");
console.log(Fellow.addReport(Fellow, 10));

/**
 * Compile with "tsc decoratorsIntheWild.ts --target es2017 --experimentalDecorators true"
 * EXPECTED OUTPUT
 * >Property Decorator Evaluated
 * >Property Decorator Called
 * >Method Decorator 1 Evaluated
 * >Method Decorator 2 Evaluated
 * >Parameter Decorator Evaluated
 * >PArameter Decorator Called
 * >Method Decorator 2 called
 * >Method Decorator 1 Called
 * >Class Decorator Evaluated
 * >Class Decorator Called
 */
