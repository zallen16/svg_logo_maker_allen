const Shape = require("./shapes.js");

class Rectangle extends Shape {
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="75" x="90" y="150">${this.text}</text>
        </svg>`
    }
}
module.exports=Rectangle;