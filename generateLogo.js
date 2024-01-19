const Circle = require("../lib/circle.js")
const Rectangle = require("../lib/rectangle.js")
const Triangle = require("../lib/triangle.js")

function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'Circle') {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    } else if (data.shape === 'Rectangle') {
        shape = new Rectangle(data.shape_color, data.text, data.text_color)
    } else {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    }
    return shape.render();
}

module.exports = generateLogo;