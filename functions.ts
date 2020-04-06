// variables and fucntion are implicitly of any typpe
function regularFunction(variable1, variable2) {
  // do something
  return variable1 + variable2;
}

// function return type is enforced as well as variable types
function typedFunction(variable1: number, variable2: string): string {
  // do something
  if (variable1 > 0) {
    return variable2;
  }
  return "false";
}

// function not allowed to return values
function noReturn(): void {
  //do something
}

// function with optional arguments denoted by ?
function optionalArgs(
  required: string,
  optional?: string,
  optional2?: number
): void {
  //do something
}

// function with a default argument set with =, thus not required.
function defaultAndOpt(
  defaultAndOptional: string = "i'm red by default and thus not required"
): void {
  console.log(defaultAndOptional);
}
defaultAndOpt();
defaultAndOpt("i'm not the default");

// creating variables with function types
let funcVariable: (value: string) => void; //this takes function that accepts one string arg and has no return
let funcVariable2: (value?: string, value2?: number) => string; // 2 optional args and string return

// ENFORCING TYPES ON UNION TYPE VARIABLES)
let futureNumber: number | string;
let futureString: number | string;
// before enforcing can be either number/string
futureNumber = 4;
futureString = "string";
// enforced. can be only number or string.
<number>futureNumber;
futureString as string;
