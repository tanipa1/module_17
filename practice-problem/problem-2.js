// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04

var markMathematics = 75.25;
var markBiology = 65;
var markChemistry = 80;
var markPhysics = 35.45;
var markBangla = 99.50;

var totalMark = markMathematics + markBiology + markChemistry + markPhysics + markBangla

var avgMark = totalMark / 5;

avgMark = avgMark.toFixed(2)
console.log(avgMark);