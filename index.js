const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./generateLogo.js");

// class Svg{
//     constructor(){
//         this.textInput = textInput;
//         this.shapeInput = shapeInput;
//     }
//     render(){

//     }
// };

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters.",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter a color keyword (OR a hexadecimal number) for the text.",
    },
    {
        type: "list",
        name: "image",
        message: "Which shape would you like?",
        choices: ["Cirlce", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please enter a color keyword (OR a hexadecimal number) for the shape.",
    }
];

function writeToFile(fileName, data) {
    var answers = generateLogo(data);
    fs.writeFile(fileName, answers) [
        console.log("Generated logo.svg")];
}

function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();