// we can use generics to losely specify tpyes when we do not have full details of what types will be used eventually

// lets create a sample interface for BOOKS
interface Book {
  title: string;
  author: string;
  ISBN: number;
}

// lets then create a class which stores objects of type BOOK
class Bookshelf {
  private _books: Book[]; // we can only store _books which is a list of books

  addNewBook(newBook: Book) {
    this._books.push(newBook); // this will ensure only Book types can be added
  }

  removeBook(newBook: Book) {
    //remove book here
  }
}

// the above is great for storing/working with books. But if we wanted to make a shelf for music records
// we would have to create a new class entirely as Bookshelf only takes the type book.
// we can make the class more flexible/resuable by adding generics
// this will allow us to specify what types are allowed when using the class

// lets create a class using generics to enforce types
class Shelf<T> {
  _items: Array<T>;
  _storedItems: T[]; // we can also use this format to declare a list of an object type

  constructor(items: Array<T>) {
    this._items = items;
  }
  addNewItem(newItem: T) {
    this._items.push(newItem);
  }

  get items() {
    return this._items;
  }
}

// in the above, T is used as a filler for type (any letter or key is allowed)
// when creating an instance of the class, we then specify which types we want to use.

// creating an instance of shelf. we can specify any valid type to be enforeced
// this makes the Shelf class reusable as opposed to Bookshelf which takes a single type
let awardsShelf: Shelf<string> = new Shelf([
  "first item",
  "second item",
  "third item"
]);
let scoreShelf: Shelf<number> = new Shelf([1, 2, 3, 4, 5]);

// lets look at a more complex function that uses generics now.

// in printHistory method, we are using name and offenceCount of the vaalues passed
// this makes it possible to pass values which do not have these values and cause errors.
// we can restrict allowed types by making T extend an interface

// lets define the interface with name and offenceCount
interface RegisterEntry {
  name: string;
  offenceCount: number;
}

// now T extends the RegisterEntry interface and only types which implement it will be allowed
class RegisterReader<T extends RegisterEntry> {
  constructor() {} // added so instances cannot be created

  printHistory(registerEntries: Array<T>) {
    registerEntries.forEach(entry => {
      // note the error on entry.ofenceCount
      console.log(`${entry.name}: History of ${entry.offenceCount} offences`);
    });
  }
}

// we see strings are not allowed as they do  not implement the RegistryEntry interface
let reader: RegisterReader<string> = new RegisterReader();

// Generics work with both classes and functions as we see below...
interface Sample {
  name: string;
}

// In this case, types which have the name property (imolement Sample interface) will be allowed
function IdentityCard<T extends Sample>(owner: T): string {
  console.log(`ID Card belongst to ${owner.name}`);
  return `ID Card belongst to ${owner.name}`;
}

let bingo = {
  name: "bingodog",
  age: 6
};

let chair = {
  price: 490,
  type: "sofa"
};

IdentityCard<Sample>(bingo); // bingo is allowes as it has a name property
IdentityCard<Sample>(chair); // raises error as name property is not present

// we can also create variables with our generic function types
// here IDReader has type similar to IdentityCard function
let IDReader: <T extends Sample>(value: T) => string;
IDReader = IdentityCard;
