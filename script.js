/** @format */

let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
console.log("Students with marks over 50 using .map:");
    students
        .filter(student => student.marks > 50)
        .map(student => console.log(student));
}

function PrintStudentsbyForEach() {
  console.log("Students with marks over 50 using .forEach:");
    students.forEach(student => {
        if (student.marks > 50) {
            console.log(student);
        }
    });
}

function addData() {
const newStudent = {id:4, name:"susan", age:"20", marks:45};  //ADDING A OBJECT TO ARRAY
    students.push(newStudent);
    console.log("New student added:");
    console.log(newStudent);
}

function removeFailedStudent() {
  students = students.filter(student => student.marks >= 50);
    console.log("Failed student removed:");
    console.log(students);
}

function concatenateArray() {
const newStudentsArray = [
        {id:5, name:"adam", age:"21", marks:70},
        {id:6, name:"emma", age:"19", marks:60},
        {id:7, name:"lucas", age:"22", marks:55}
    ];
    const concatenatedArray = students.concat(newStudentsArray);
    console.log("Concatenated array:");
    console.log(concatenatedArray);
}

PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();
