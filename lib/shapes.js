class Shape {
    constructor(text, shapeColor, type, textColor){
        this.text=text
        this.shapeColor=shapeColor
        this.type=type
        this.textColor=textColor
    }
    setText(text) {
        this.text = text
    }
    setShapeColor(shapeColor){
        this.shapeColor = shapeColor
    }
    setType(type) {
        this.type = type
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
}

module.exports=Shape;