// WE CAN create wrapper functions which add functions to existing functions
// lets create an example object
interface ExampleObject {
  name: string;
  purpose: string;
  newValue?: string;
  lastAction?: string;
  timestamp?: number;
}

const exampleObject = {
  name: "object",
  purpose: "example"
};

// now lets create an example function which does something to our example object
function exampleFunction(target: ExampleObject, value: string): void {
  target.newValue = value;
}

// now we create the wrapper
function wrapperFunction<U extends any[]>(
  name: string,
  func: (...args: U) => any
) {
  return function wrapper(exampleObject: ExampleObject, ...args: U) {
    func(...args);
    exampleObject.lastAction = name;
    exampleObject.timestamp = Date.now();
  };
}

// now we can pass the examplefunction we created earlier into the wrapper
const wrappedExampleFunction = wrapperFunction("test", exampleFunction);

// we can then call the wrapped function
wrappedExampleFunction(exampleObject, exampleObject, "fakeValue");

// tuples allow us to define the type and shape of custom types
// making a type tuple coordinates = [x,y,w,h,units]
type coordinates = [number, number, number, number, "px" | "pt"];
const valid: coordinates = [0, 0, 6, 4, "pt"];
const invalid: coordinates = [1, 1, 6, 4, "points"]; // invalid because points doesnt match pt/px
const invalid2: coordinates = [1, 1]; // invalid because some required values have not been added

// USING MIXINGS TO BREAK CLASSES MODULE 8
