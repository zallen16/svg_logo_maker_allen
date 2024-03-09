const Shape = require("./shapes.js");

class Triangle extends Shape {
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polyline points="150,10 250,190 50,190" fill="${this.shapeColor}"/>
        <text fill="${this.textColor}" font-size="75" x="105" y="160">${this.text}</text>
        </svg>`
    }
}

module.exports=Triangle;