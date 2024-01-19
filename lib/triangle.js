const Shape = require("./shapes.js");

class Triangle extends Shape {
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg xmlns="https://www.w3.org/TR/SVG2/">
        <polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports=Triangle;