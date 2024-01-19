const Shape = require("./shapes.js");

class Circle extends Shape{
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg xmlns="https://www.w3.org/TR/SVG2/">
        <circle cx="250" cy="250" r="250" fill="${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports=Circle;