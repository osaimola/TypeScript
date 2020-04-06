import * as Helpers from "./exporting"; // * imoports all and as assigns a reference name
import { one, two, three as third } from "./exporting"; // can also specify what we want to import

// imports can be accessed
one();
two();
third();

// can be accessed via the alias
Helpers.one();
Helpers.two();
Helpers.three();
