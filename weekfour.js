// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

// function min(x, y) {
//     return x - y;
// }
// console.log(min(21, 17));


// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."


// const studentsFirst = ['John', 'Bob', 'Terry'];

// const studentsSecond = ['Reid', 'James', 'Milner'];

// const studentsAge = [18, 30, 22];

// console.log(`Hello, my name is ${studentsFirst[1]} ${studentsSecond[1]} and I am ${studentsAge[1]} years old!`)



// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

// let text;
// let monthly = Number(prompt(`What month are you looking for? 1-12`));
// switch (monthly) {
//     case 1:
//         text = `January`;
//         break;
//     case 2:
//         text = `February`;
//         break;
//     case 3:
//         text = `March`;
//         break;
//     case 4:
//         text = `April`;
//         break;
//     case 5:
//         text = `May`;
//         break;
//     case 6:
//         text = `June`;
//     case 7:
//         text = `July`;
//         break;
//     case 8:
//         text = `August`;
//         break;
//     case 9:
//         text = `September`;
//         break;
//     case 10:
//         text = `October`;
//         break;
//     case 11:
//         text = `November`;
//         break;
//     case 12:
//         text = `December`;
//         break;
//     default:
//         text = `Goofy I said 1-12`;
// }
// alert(text);






// //HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const tomHeight = 9;
const jerryHeight = 10;
const tomMass = 8;
const jerryMass = 45;

tomBMI = tomMass / tomHeight ** 2;
jerryBMI = jerryMass / jerryHeight ** 2;

const tomHigherBMI = (tomBMI > jerryBMI);

console.log(`is Tom's BMI higher than Jerry's?`, tomHigherBMI);