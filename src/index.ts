// let age: number = 20;
// if (age < 50)
//     age += 10;
// console.log(age); 

// import { log } from "console";

// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level;

// function render(document){
//     console.log(document);
// }

// let numbers: number[] = [];
// numbers.forEach(n => n.toExponential)

// let user: [number, string, boolean, number] = [1, 'Mosh', true, 0];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
// const enum Size { Small = 's', Medium = 'm', Large = 'l'};
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2022): number{
//     if (taxYear  < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10_000) 

//readonly helps to prevent from accidently modifying the value of this property
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
//Union types
// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if(typeof weight === 'number') {
//         return weight*2.2;
//     }
//     else {
//         return parseInt(weight) * 2.2;
//     }
// }

// kgToLbs(10);
// kgToLbs('10kg');

//intersection types
//an object with both number and string at same time
// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox : UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

//Literal types
//Literal {exact, specific}
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'n' | 'cm';

//Nullable types
// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!');
// }

// greet(null);

//Optional Chaining
// type Customer = {
//     birthday?: Date
// };

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(1);
//optional property access operator
// console.log(customer?.birthday?.getFullYear);

//optional element access operator
//if (customer !== null && customer !== undefined)
//customers?.[0]

// optional call 
// let log: any = null;
// log?.('a');
