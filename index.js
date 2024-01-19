const inquirer = require("inquirer");
const fs = require("fs");


class Svg{
    constructor(){
        this.textInput = textInput;
        this.shapeInput = shapeInput;
    }
    render(){

    }
};

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
        type: "input",
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