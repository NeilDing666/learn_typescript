"use strict";
//data types
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function print(message, ifLinkedtoAbove) {
    if (message === void 0) { message = "\n---\n"; }
    console.log(message);
    if (ifLinkedtoAbove) {
        console.log("👆");
    }
}
print();
// 1. number
var number1 = 1; // both int and float is number
var number2 = 1.23;
// number1 cannot assign another non-number value
print("number1 is " + number1);
print("number2 is " + number2);
print();
// 2. string
var string1 = "ABC";
print("string1 is " + string1);
print();
// 3. boolean
var boolean1 = true;
print("boolean1 is " + boolean1);
boolean1 = false;
print("boolean1 is " + boolean1 + "\nafter assigned value again");
print();
// 4. array
// method 1:
var array1 = [1, 2, 3]; // all elements must be number type
// method 2:
var array2 = [3, 4, 5];
// method 3:
var array3 = new Array(3);
// string array
var stringArray1 = ["Neil", "Jim"];
var stringArray2 = ["Bob", "Alisa"];
print("array1 is " + array1);
print("array2 is " + array2);
print("array3 is " + array3);
print("stringArray1 is " + stringArray1);
print("stringArray2 is " + stringArray2);
print(stringArray1);
print("", true);
// add: Destructuring assignment
print.apply(void 0, stringArray1); //  Neil        ISSUE: should not output emoji
var _a = __spreadArrays(stringArray1), a = _a[0], b = _a[1];
var c = stringArray1[0], d = stringArray1[1];
var e = stringArray1[0];
var f = stringArray1[1];
print("a: " + a + "      b: " + b); //  a: Neil + b: Jim
print("c: " + c + "      d: " + d); //  a: Neil + b: Jim
print("e: " + e); //  Neil
print("f: " + f); //  Jim
// add: if an array is any type
var anyArray = ["Neil", 24];
print(anyArray);
// 5. enum
// enum is a subset of array;
