const Shape = require("./shapes.js");

class Circle extends Shape{
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="125" r="100" fill="${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="75" x="100" y="140">${this.text}</text>
        </svg>`
    }
}

module.exports=Circle;