//data types

function print(message:any = "\n---\n", ifLinkedtoAbove?:boolean):void{
    console.log(message);
    if(ifLinkedtoAbove){
        console.log("👆");
    }
}
print();
// 1. number
let number1:number = 1; // both int and float is number
let number2:number = 1.23;
// number1 cannot assign another non-number value
print(`number1 is ${number1}`);
print(`number2 is ${number2}`);
print();

// 2. string
let string1:string = "ABC";
print(`string1 is ${string1}`);
print();

// 3. boolean
let boolean1 = true;
print(`boolean1 is ${boolean1}`);
boolean1 = false;
print(`boolean1 is ${boolean1}\nafter assigned value again`);
print();

// 4. array
// method 1:
let array1:number[] = [1, 2, 3]; // all elements must be number type
// method 2:
let array2:Array<number> = [3, 4, 5];
// method 3:
let array3:number[] = new Array(3);
// string array
let stringArray1:string[] = ["Neil", "Jim"];
let stringArray2:Array<string> = ["Bob", "Alisa"];
print(`array1 is ${array1}`);
print(`array2 is ${array2}`);
print(`array3 is ${array3}`);
print(`stringArray1 is ${stringArray1}`);
print(`stringArray2 is ${stringArray2}`);
print(stringArray1);
print("",true);
// add: Destructuring assignment
print(...stringArray1);     //  Neil        ISSUE: should not output emoji
let [a, b] = [...stringArray1];
let [c, d] = stringArray1;
let [e] = stringArray1;
let [,f] = stringArray1;
print(`a: ${a}      b: ${b}`);     //  a: Neil + b: Jim
print(`c: ${c}      d: ${d}`);     //  a: Neil + b: Jim
print(`e: ${e}`)        //  Neil
print(`f: ${f}`)        //  Jim
// add: if an array is any type
let anyArray:any = ["Neil", 24];
print(anyArray);

// 5. enum
// enum is a subset of array;
