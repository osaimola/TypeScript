interface base {
  name: string;
  id: string;
}

interface secondary extends base {
  type: string;
}

interface tertiary {
  additionalValue: string;
}

class Example implements secondary {
  name: string = "example";
  id: string = "ID001";
  type: string = "exampleType";
  dummyVal: string = "default";

  constructor() {}
}

class NotExample implements secondary {
  name: string = "example";
  id: string = "ID001";
  type: string = "notExampleType";
  other: string = "other prop";
  dummyVal: number = 0;

  constructor() {}
}

// using typeof to validate type on a variable
// here we use typeof to check if the value belongs to string/number
function setFontSize(layer: any, value: string | number) {
  if (typeof value === "string") {
    layer.fontSize = value;
  } else {
    layer.fontSize = `${value}px`;
  }
}

// using instanceof to validate type on a class
// here we use instanceof to check that a passed base belongs to the Example class
function setFontSize2(bases: base[], value: string | number) {
  bases.forEach(base => {
    if (base instanceof Example) {
      setFontSize(base, value);
    }
  });
}

// using a guard function to valiadate a type
// lets first define the type validation function
function isExample(secondary: secondary): secondary is Example {
  // we have set the return type to "secorndary is Example" which is an assertion
  // if function returns true, then the passed in value is definitely an Example Class
  return secondary.type === "exampleType";
}

// here we use the isExample to validate the type
function setFontSize3(secondaries: secondary[], value: string | number) {
  secondaries.forEach(secondary => {
    if (isExample(secondary)) {
      setFontSize(secondary, value);
    }
  });
}

// lets see how we can use conditionals and generics to enforce types
// in this example it will be possible to set the dummyValue to number when only string should be allowed
// and vice versa
function setClassValue(
  definition: Example | NotExample,
  value: string | number
) {
  definition.dummyVal = value;
}

// here T can either be Example or NotExample
// if T is example it will only allow the value of type string
// else it will only allow the value of type number
function setClassValue2<T extends Example | NotExample>(
  definition: T,
  value: T extends Example ? string : number
) {
  definition.dummyVal = value;
}

// we can also define a custom type using conditionals
type customType<T> = T extends someinterface
  ? someinterface
  : someotherinterface;

// we can also use partials to only allow subsets of a type
function printValue<T extends secondary>(obj: Partial<T>) {
  console.log(obj.name);
}

printValue({ name: "ik" });
printValue({ id: "CH009" });
printValue({ notAllowed: "ghgh" }); //this is not allowed as is not a suubset of secondary interface

// we can use mapped types to ensure the conditions for a defined type are met
type mappedType = { [key in keyof secondary]: string };
type mappedType2 = { [key in keyof (secondary & tertiary)]: string };

// below we see that the mapped types must all contain values from the instances mapping was created from
const type1: mappedType = {
  name: "hh",
  id: "hhgh",
  type: "hfhfh"
};
const type2: mappedType2 = {
  name: "hh",
  id: "hhgh",
  type: "hfhfh",
  additionalValue: "hshsh"
};

// WE CAN also make exclusions from mapped typed
type combine = secondary & tertiary;
type exclude = "id" | "name";

type combinedAndExcluded = { [key in Exclude<keyof combine, exclude>]: string };
