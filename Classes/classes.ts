// we can create classes
class publicPerson {
  name: string;
  age: number;
  secret: string;

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this.secret = secret;
  }

  shareSecret() {
    console.log(`my secret is ${this.secret}`);
  }
}

// we can use access modifiers to retrict access to a classes values
class privatePerson {
  name: string;
  age: number;
  private _secret: string; //private only lets the class access

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this._secret = secret;
  }

  // protected only lets the class and extenders of a class access
  // we do not need the function prefix to create methods here
  protected shareSecret() {
    console.log(`my secret is ${this._secret}`);
  }

  //we create a getter method using "get" to access secret
  get secret(): string {
    return this._secret;
  }

  // we create a setter method using "Set" to modify the secret
  set secret(newSecret: string) {
    this._secret = newSecret;
  }
}

// lets make a private and a public person
let Talks: publicPerson = new publicPerson(
  "Toka",
  5,
  "I wet the bed sometimees"
);
let Shuts: privatePerson = new privatePerson(
  "Shota",
  13,
  "I never tell anyone but I sleep a lot"
);

// we can reach everything in a public person
Talks.secret;
Talks.shareSecret();
// access modifiers dont let us access the private and protected
Shuts._secret;
Shuts.shareSecret();
Shuts.secret; // we can use getter to access the secret
Shuts.secret = "I hate pie"; // we can set secret using the setter
