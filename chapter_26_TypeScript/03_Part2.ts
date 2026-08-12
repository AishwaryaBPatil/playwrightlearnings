let name: string = "abc";
let age: number = 24;
let percentage: number = 34.6;
let distance: number = 456789321456;
let active: boolean = true;
let nothing: null = null;
let notdefined: undefined = undefined;

//arrays
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["abc", "bcd"];
let n: string[] = ["c", "v"];
// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";


let message: string = "Hello, TypeScript!";
let count: number = 42;
// let isActive: boolean = true;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", active);
