var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// define log class decorator factory
function logclass(value) {
    console.log(`${value} evaluated`);
    return function (constructor) {
        console.log(`${value} calleded`);
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.decoratorAddedValue = value;
            }
        };
    };
}
// define the log property decorator
function logProperty(value) {
    console.log(`${value} evaluated`);
    return function (target, propertyKey) {
        console.log(`${value} called`);
    };
}
// define the log method decorator
function logMethod(value) {
    console.log(`${value} evaluated`);
    return function (target, propertyKey, descriptor) {
        console.log(`${value} called for ${String(propertyKey)}`);
        // lets store the original method definition
        const originalMethod = descriptor.value;
        // now lets manipulate the original method to change how it behaves
        descriptor.value = function (...args) {
            console.log(`added 10 to get: ${String(args[1] + 10)}`);
            return originalMethod.apply(this, args);
        };
    };
}
// define the log parameter decorator factory
function logParameter(value) {
    console.log(`${value} evaluated`);
    return function (target, propertyKey, parameterIndex) {
        console.log(`${value} called`);
    };
}
// creating a class and including our decorators....
let Person = class Person {
    constructor(firstName, lastname) {
        this.firstName = firstName;
        this.lastname = lastname;
        this._directReports = [];
    }
    // NOTE we can nest decorators.. the shape will be d1(d2(class|method|etc)) and they will be
    // evaluated top to bottom (then called bottom to top)
    addReport(value, num) {
        //this._directReports.push(value);
        console.log(String(num));
        return "Hello";
    }
};
__decorate([
    logProperty("Property Decorator")
], Person.prototype, "emailAddress", void 0);
__decorate([
    logMethod("Method Decorator 1"),
    logMethod("Method Decorator 2")
], Person.prototype, "addReport", null);
Person = __decorate([
    logclass("Class Decorator"),
    __param(0, logParameter("Parameter Decorator"))
], Person);
// we can create a new class instance
const Fellow = new Person("John", "Doe");
console.log(Fellow.addReport(Fellow, 10));
/**
 * Compile with "tsc decoratorsIntheWild.ts --target es2017 --experimentalDecorators true"
 * EXPECTED OUTPUT
 * >Property Decorator Evaluated
 * >Property Decorator Called
 * >Method Decorator 1 Evaluated
 * >Method Decorator 2 Evaluated
 * >Parameter Decorator Evaluated
 * >PArameter Decorator Called
 * >Method Decorator 2 called
 * >Method Decorator 1 Called
 * >Class Decorator Evaluated
 * >Class Decorator Called
 */
