// mixings are a way we can split large and complex classes into smaller easier to manage components
// lets make a sample class to use as reference

class ComplexClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  longMethod1() {
    console.log(`one of ${this.name}'s long methods`);
  }

  longMethodA() {
    console.log(`one of ${this.name}'s long methods`);
  }

  longMethodB() {
    console.log(`one of ${this.name}'s long methods`);
  }
}

// WITH MIXINS WE CAN break this down into sections based on functionality

// lets start by creating a base
class BaseClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// next we create a type which is a constructor that takes any arguements and returens our base class type
type BaseClassConstructor = new (...args: any[]) => BaseClass;

// now we create a function which takes an extension of base class AND returns a class that extends our base class
// this returned class will have the additional methods we want included
function ExtendedClass1<TBase extends BaseClassConstructor>(base: TBase) {
  return class extends base {
    extendedMethod1() {
      console.log(`Added functionality to ${this.name} class instance`);
    }

    extendedMethod2() {
      console.log(`Added functionality to ${this.name} class instance`);
    }
  };
}

// we can go on to create as many more functions which add methods as we want
function ExtendedClassA<TBase extends BaseClassConstructor>(base: TBase) {
  return class extends base {
    extendedMethodA() {
      console.log(`Added functionality to ${this.name} class instance`);
    }

    extendedMethodB() {
      console.log(`Added functionality to ${this.name} class instance`);
    }
  };
}

class testClass1 extends ExtendedClass1(BaseClass) {}
const testClassInstance1 = new testClass1("My Test Class");
// we see that all the extended methods are available
testClassInstance1.extendedMethod1();
testClassInstance1.extendedMethod2();

class testClass2 extends ExtendedClassA(ExtendedClass1(BaseClass)) {}
const testClassInstanceB = new testClass2("My Other Test Class");
// we see we have all methods from BOTH extended classes
testClassInstanceB.extendedMethodA();
testClassInstanceB.extendedMethod1();

// this lets us break down a class into little bits.
// we can even break them out into different files, importing only what we need & making it easier to maintain
