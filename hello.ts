class Greeter {
  name: string;
  times: number;

  constructor(name: string, times: number) {
    this.name = name;
    this.times = times;
  }

  hi() {
    for (let i = 0; i++; i < this.times) {
      console.log(`hello from ${this.name}`);
    }
  }

  // uninon type: can either be string or number
  dateOrTime(input: string | number) {
    if (typeof input === "string") {
      console.log(`it's ${input} today`);
    } else {
      console.log(`it's day ${input} of the weel`);
    }
  }
}

let maingreeter = new Greeter("kiki", 4);
