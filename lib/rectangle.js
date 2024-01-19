const Shape = require("./shapes.js");

class Rectangle extends Shape{
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg xmlns="https://www.w3.org/TR/SVG2/">
        <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }

module.exports=Rectangle;