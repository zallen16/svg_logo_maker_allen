const Shape=require("./shapes.js");

class Circle extends Shape{
    constructor(text, shapeColor, type, textColor){
        super(text, shapeColor, type, textColor)
    }
    createSvg(){
        return `<svg xmlns="https://www.w3.org/TR/SVG2/">
        <circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>
        </svg>`
    }
}

module.exports=Circle;

