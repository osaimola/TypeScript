// lets make an interface to store values for an ID
interface ID {
  name: string;
  age: number;
  SIN: number;
}

// lets create a class to which we want iterator functionality
class IterableClass {
  //constructor IDs take an object with the shape {ID.name : ID}
  constructor(public IDs: { [idName: string]: ID }) {}

  [Symbol.iterator]() {
    // we'll use pointer to keep track of our position in iteration
    // and create an array "IDs" with all the ID values
    let pointer = 0;
    let keys: string[] = Object.keys(this.IDs);
    let IDs: Array<ID> = [];
    keys.forEach(key => {
      IDs.push(this.IDs.key);
    });

    return {
      // we can return a next which holds an iteratorResult of type ID if we have more values
      // else we let the iterator know there are no more values.
      next(): IteratorResult<ID> {
        if (pointer < IDs.length) {
          return {
            done: false,
            value: IDs[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }
}

// lets make an object with a list of IDs
let IDsObject = {
  "John Doe": {
    name: "John Doe",
    age: 45,
    SIN: 898737050
  },
  "Jane Doe": {
    name: "Jane Doe",
    age: 35,
    SIN: 5656044
  }
};

const testClass = new IterableClass(IDsObject);
for (const entry of testClass) {
  // do something with the {name, age, SIN} ID object returned by iterator
}
