function first() {
  console.log("first");
}

function two() {
  console.log("second");
}

function three() {
  console.log("third");
}

// we can use the as to specify what they should be called when imported
export { first as one, two, three };
