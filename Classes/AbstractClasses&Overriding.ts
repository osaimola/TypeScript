// we can create absract classes which will never get instantiated
abstract class Garmet {
  abstract fabric: string; //abstract properties must be defined in child classes
  size: string;

  constructor(size: string) {
    this.size = size;
    console.log(`New garment ${size} size`);
  }

  // abstract methods must also be defined by child classes
  abstract washInstructions(): string;

  label(): string {
    return "LUXURY COLLECTION";
  }
}

let newGarmet: Garmet = new Garmet(); // we cannot create an instance of an abstract class

// child class without abstract methods or functions causes errors
class Shirt extends Garmet {}

// no errors when we implement all abstact methods and properties
class Pants extends Garmet {
  fabric: string;

  constructor(size: string, fabric: string) {
    super(size);
    this.fabric = fabric;
  }

  washInstructions() {
    return "warm wash only, do not tumble dry";
  }

  // we can override methods by re defining them
  label(): string {
    return "MID TIER COLLECTION";
  }
}

let mypants: Pants = new Pants("LARGE", "DENIM");
mypants.label(); //will return our overriden results
