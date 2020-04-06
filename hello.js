"use strict";
class Greeter {
    constructor(name, times) {
        this.name = name;
        this.times = times;
    }
    hi() {
        for (let i = 0; i++; i < this.times) {
            console.log(`hello from ${this.name}`);
        }
    }
    dateOrTime(input) {
        if (typeof input === "string") {
            console.log(`it's ${input} today`);
        }
        else {
            console.log(`it's day ${input} of the weel`);
        }
    }
}
let maingreeter = new Greeter("kiki", 4);
