// can define an interface
interface Human {
  name: string;
  age: number;
}

// interfaces can inherit and posses all properties of the parent
interface Teacher extends Human {
  gender: string;
  employeeNumber: number;
}

// any object which has all of a parnets properties, implements it
let soldier = {
  name: "Fure",
  age: 26,
  gender: "Female",
  rank: "General"
};

// soldier implements the Human as it has all the properties
// as such we can assing variables with Human type to soldier values

let newSoldier: Human = soldier;

// this will not work for teacher as the employeenumber type is not implemented

let newTeacher: Teacher = soldier;

// we can reference typres from interfaces we have defined. They must meet all requirements
// lack of contact info throws an error.
let newAccount: BankAccount = {
  accountName: "Marty's Account",
  accountBalance: 2000,
  accountNumber: 567039384957
};

// we can use the ? in the interface to specify optional firelds.
// here lack of contact does not throw and error.
let newAccount2: modifiedBankAccount = {
  accountName: "Rock's Account",
  accountBalance: 2000,
  accountNumber: 58686868684957
};
