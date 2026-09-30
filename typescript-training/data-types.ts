//Syntax to store data :
//Declaration variable :datatype = Data;

//In TypeScript, There are two different categories of data types. 

//1. Primitive Data Types
//2. Non-Primitive Data Types

/*******************************/
/****Primitive-Datatypes********/
/*******************************/

//number => The data type that can store numbers with decimals or without decimals is called the number data type. 
// Number should be stored without any quotation. 
let num1: number = 10;
let num2: number = 10.65;

//num1 = "Bharath"; // when we try to assign a string value to a number variable, it will throw an compile time error not the run time error.
console.log(num1);

//string => The Datatype that can store a collection of characters 
//String should be stored always within the quotations: single quotes, double quotes, or backticks. 
let name1: string = '"Mr" Mohd Ismail Ali';
let name2: string = "'Mr' Mohd Ismail Ali";
console.log(name1);
console.log(name2);

//backticks will be used to store the dynamic string. 
let firstName: string = "Mohd";
let lastName: string = "Ismail Ali";

//normal
let empInfo: string = "Employee first name is " + firstName + ", and last name is " + lastName;

//with-backtics
let newEmpInfo: string = `Employee first name is ${firstName}, and last name is ${lastName}`;
console.log(newEmpInfo);

//boolean => A boolean represents the result of a condition in the form of true or false. 
let isJavaScriptFun: boolean = true;
let isSkyGreen: boolean = false;

//undefined => `undefined` represents a variable that has been declared but not assigned to any value yet. 
let empAge: undefined;
console.log(empAge);

//null => `null` represents a variable that has been declared and assigned to a `null` value intentionally. 
let salary: null = null;
console.log(salary);

//union ( | )
//Union represents more than one data type within the same variable. 
let address: string | number | boolean;
address = "Hyderabad";
address = true;
address = 500081;

//any
//`any` represents any data type is allowed. Basically, we are removing the type safety from TypeScript. 
let empAddress: any;
empAddress = "Hyderabad";
empAddress = true;
empAddress = 500081;

/*******************************/
/****Non-Primitive-Datatypes****/
/*******************************/

//Object => Object Datatype represents a collection of key-value pairs stored together. 


interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "address": {
        "city": string,
        "state": string,
        "country": string
    }
}

//Object
let empData: empInfo = {
    "empName": "Bharath Reddy",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Kadapa",
        "state": "Andrapradesh",
        "country": "India"
    }
};

console.log(empData);

console.log(empData.empName);
console.log(empData.address.city);

console.log(empData["empName"]);
console.log(empData["address"]["city"]);

//Array =>Array Datatype can represent a collection of values stored together.

let fruits: string[] = ["Apple", "Banana", "Orange"];
let prices: number[] = [100, 200, 300];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Banana", 200, "Orange", 300];

console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(prices[1]); // 200
console.log(fruitsAndPrices[2]); // Banana
console.log(fruitsAndPrices[3]); // 200

//tuple : Tuple is an ordered array. 

// tuple vs normal array

//Problem statement : Store the employee name, the employee ID, and visa status within the array. 

//Array :
let employeeInfo: (string | number | boolean)[] = ["Bharath", 1234, true, 9553220022];// gives no error when the place of the values is changed and also it allows to add more values to the array.


//Tuple
let employeeInfoTuple: [string, number, boolean] = ["Bharath", 1234, true];// gives error when the place of the values is changed and also it does not allow to add more values to the array.


//Function => A function represents a block of code or a collection of statements written together to complete a specific task. 

function launchBrowserAndLogin(browserName: string, url: string): void {
    console.log(`Launch the ${browserName} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser(): void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance(): number {
    console.log("Navigate to the account balance page");
    let accountBalance: number = 100000;
    return accountBalance;
}

function getAccountStatement(): (string | number)[] {
    console.log("Navigate to the account statement page");
    let accountStatement: (string | number)[] = ["savings", 10000, "current", 12000];
    return accountStatement;
}

//Below are three data types from the ES6 version and part of non-primitive data types. 

//1. Set => Set Represents a collection of unique values 
//2. Map => Map Represents a collection of key-value pairs 
//3. Date => Date Represents a specific point in time


//1. Set
let empIds: Set<number> = new Set();
empIds.add(1234);
empIds.add(5678);
empIds.add(7890);
empIds.add(1234); // Duplicate value, will not be added
console.log(empIds);

//2. Map (Duplicate keys are not allowed, but duplicate values are allowed. )
let empDataMap: Map<string, string | number | boolean> = new Map();
empDataMap.set("empName", "Bharath Reddy");
empDataMap.set("empId", 2345);
empDataMap.set("visaStatus", true);
empDataMap.set("empId", 1234);//Adding duplicate key. 
empDataMap.set("newEmpId", 1234);//Adding duplicate value. 
console.log(empDataMap);