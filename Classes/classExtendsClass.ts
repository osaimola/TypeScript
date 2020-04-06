// we can use staatic to make methods or properties accessible without creating a
// new instancee of the class
class StaticClass {
  static message: string = "processing...";

  static upper(input: string): string {
    console.log(StaticClass.message); //we substitute "this" with the class name for static properties
    return input.toUpperCase();
  }

  static lower(input: string): string {
    console.log(StaticClass.message);
    return input.toLowerCase();
  }
}

// we only use the dot notation to access upper. no new object required
let allCaps = StaticClass.upper("will Be IN all CAPs");

class ParentClass {
  readonly id: string; // readonly restricts setting values to ON INSTANTIATION or INSIDE CONSTRUCTORS

  constructor(id: string) {
    this.id = id;
  }
}

// super allows us to call the parents constructor and add ours
class ChildClass extends ParentClass {
  frined: string;
  constructor(id: string, frined: string) {
    super(id);
    this.frined = frined;
  }
}
