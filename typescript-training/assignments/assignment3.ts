// Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

let studentNames : string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks : number[] = [75, 80, 82];
// using assignment operator to add 10 marks to each student and store it in another array


let updatedMarks: number[] = studentMarks.map(mark => mark + 10);


for (let i = 0; i < studentNames.length; i++) {
    // console.log(`${updatedMarks[i]}`);
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// let updatedMark : Map<string, number> = new Map();
// updatedMark.set("Suresh", studentMarks[0]! + 10);
// updatedMark.set("Mahesh", studentMarks[1]! + 10);
// updatedMark.set("Naresh", studentMarks[2]! + 10);

// console.log(updatedMark); 
 let averageMarks : number = (updatedMarks[0]! + updatedMarks[1]! + updatedMarks[2]!) / 3;
console.log(`Average Marks: ${averageMarks}`);
