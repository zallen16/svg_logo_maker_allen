const Circle = require("./lib/circle.js")
const Rectangle = require("./lib/rectangle.js")
const Triangle = require("./lib/triangle.js")

function generateLogo(data) {
    let shape;
    if (data.image === 'Circle') {
        shape = new Circle()
    } else if (data.image === 'Square') {
        shape = new Rectangle()
    } else {
        shape = new Triangle()
    }
    shape.setText(data.text)
    shape.setShapeColor(data.shape_color)
    shape.setType(data.image)
    shape.setTextColor(data.text_color)
    return shape.createSvg();
}

module.exports = generateLogo;