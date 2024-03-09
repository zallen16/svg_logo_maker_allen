const Triangle=require("../lib/triangle.js");

describe("Test for Triangle class", () => {
    it("Successfully creates a triangle", () => {
        const testTriangle = new Triangle("tex", "blue", "blue")
        expect(typeof testTriangle).toBe("object")
        shape.setColor("blue");
        expect(shape.render()).toEqual('fill="blue" />');
    }) 
})
