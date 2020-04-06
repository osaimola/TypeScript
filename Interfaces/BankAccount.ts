// note interfaces are just shells/guidleines of what a type should look like
// interfaces do not compile to any JavaScript code.
interface BankAccount {
  accountName: string;
  accountNumber: number;
  accountBalance: number;
  contact: string;
}

// contact is made optional with the ?
interface modifiedBankAccount {
  accountName: string;
  accountNumber: number;
  accountBalance: number;
  contact?: string;
}
